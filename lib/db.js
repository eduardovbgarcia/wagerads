// Lead storage backed by Upstash Redis (works on Vercel via the marketplace
// integration, which auto-injects UPSTASH_REDIS_REST_URL and
// UPSTASH_REDIS_REST_TOKEN env vars).
//
// Layout:
//   lead:{id}                — JSON blob with the full lead record
//   leads:by:received        — sorted set of ids scored by receivedAt epoch ms

import { Redis } from "@upstash/redis";

export const STAGES = [
  "new",
  "contacted",
  "qualified",
  "meeting",
  "won",
  "lost",
];

let _redis;
function db() {
  if (!_redis) {
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      throw new Error(
        "Upstash Redis env vars missing. Connect Upstash via Vercel Marketplace " +
          "(Project → Storage → Create → Upstash for Redis) so it auto-injects " +
          "UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN."
      );
    }
    _redis = Redis.fromEnv();
  }
  return _redis;
}

function parse(value) {
  if (value == null) return null;
  if (typeof value === "object") return value;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function generateId() {
  return crypto.randomUUID();
}

export async function createLead(lead) {
  const id = lead.id || generateId();
  const now = new Date().toISOString();
  const record = {
    ...lead,
    id,
    status: STAGES.includes(lead.status) ? lead.status : "new",
    notes: typeof lead.notes === "string" ? lead.notes : "",
    receivedAt: lead.receivedAt || now,
    updatedAt: now,
  };
  const r = db();
  await r.set(`lead:${id}`, JSON.stringify(record));
  await r.zadd("leads:by:received", {
    score: Date.parse(record.receivedAt) || Date.now(),
    member: id,
  });
  return record;
}

export async function listLeads() {
  const r = db();
  const ids = await r.zrange("leads:by:received", 0, -1, { rev: true });
  if (!ids || ids.length === 0) return [];
  const keys = ids.map((id) => `lead:${id}`);
  const values = await r.mget(...keys);
  return values.map(parse).filter(Boolean);
}

export async function updateLead(id, patch) {
  const r = db();
  const existing = parse(await r.get(`lead:${id}`));
  if (!existing) return null;
  const next = {
    ...existing,
    ...patch,
    id: existing.id, // immutable
    receivedAt: existing.receivedAt, // immutable
    updatedAt: new Date().toISOString(),
  };
  await r.set(`lead:${id}`, JSON.stringify(next));
  return next;
}
