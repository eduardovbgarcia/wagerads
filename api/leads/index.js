import { listLeads } from "../../lib/db.js";
import { requireAdmin } from "../../lib/auth.js";

export default async function handler(req, res) {
  if (!requireAdmin(req, res)) return;
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }
  try {
    const leads = await listLeads();
    return res.status(200).json({ ok: true, leads });
  } catch (err) {
    console.error("[leads] list failed", err);
    return res.status(500).json({ ok: false, error: "Failed to list leads" });
  }
}
