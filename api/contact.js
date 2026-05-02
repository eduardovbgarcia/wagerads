// Public contact endpoint. Persists every submission to Redis (so it shows up
// in the /admin pipeline) and optionally forwards to a downstream backoffice
// webhook if BACKOFFICE_URL is set.

import { createLead } from "../lib/db.js";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(204).end();
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};

  if (!body.email || typeof body.email !== "string" || !body.email.includes("@")) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }

  const enriched = {
    name: typeof body.name === "string" ? body.name.slice(0, 200) : "",
    email: body.email.slice(0, 200),
    company: typeof body.company === "string" ? body.company.slice(0, 200) : "",
    monthlySpend: typeof body.monthlySpend === "string" ? body.monthlySpend : "",
    markets: Array.isArray(body.markets) ? body.markets.slice(0, 20).map(String) : [],
    message: typeof body.message === "string" ? body.message.slice(0, 2000) : "",
    locale: typeof body.locale === "string" ? body.locale.slice(0, 8) : "",
    page: typeof body.page === "string" ? body.page.slice(0, 500) : "",
    submittedAt: typeof body.submittedAt === "string" ? body.submittedAt : null,
    receivedAt: new Date().toISOString(),
    userAgent: req.headers["user-agent"] || null,
    ip: (req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "").toString().split(",")[0].trim() || null,
    referer: req.headers.referer || null,
  };

  let leadId = null;
  try {
    const saved = await createLead(enriched);
    leadId = saved.id;
  } catch (err) {
    console.error("[contact] persistence failed", err);
    // Surface a 500 so the form shows an error and the user retries — better
    // than silently swallowing leads.
    return res.status(500).json({ ok: false, error: "Storage error" });
  }

  // Optional fan-out to a downstream backoffice / Slack / Zap.
  const url = process.env.BACKOFFICE_URL;
  if (url) {
    try {
      const headers = { "Content-Type": "application/json" };
      if (process.env.BACKOFFICE_TOKEN) {
        headers.Authorization = `Bearer ${process.env.BACKOFFICE_TOKEN}`;
      }
      await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify({ ...enriched, id: leadId }),
      });
    } catch (err) {
      // Fan-out is best-effort. The lead is already in Redis.
      console.error("[contact] downstream forward failed", err);
    }
  }

  return res.status(200).json({ ok: true, id: leadId });
}
