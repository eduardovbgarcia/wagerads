import { STAGES, updateLead } from "../../lib/db.js";
import { requireAdmin } from "../../lib/auth.js";

export default async function handler(req, res) {
  if (!requireAdmin(req, res)) return;

  if (req.method !== "PATCH") {
    res.setHeader("Allow", "PATCH");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { id } = req.query || {};
  if (!id || typeof id !== "string") {
    return res.status(400).json({ ok: false, error: "Missing id" });
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};
  const patch = {};

  if (typeof body.status === "string") {
    if (!STAGES.includes(body.status)) {
      return res.status(400).json({ ok: false, error: "Invalid status" });
    }
    patch.status = body.status;
  }
  if (typeof body.notes === "string") {
    patch.notes = body.notes.slice(0, 5000);
  }

  if (Object.keys(patch).length === 0) {
    return res.status(400).json({ ok: false, error: "Nothing to update" });
  }

  try {
    const updated = await updateLead(id, patch);
    if (!updated) return res.status(404).json({ ok: false, error: "Not found" });
    return res.status(200).json({ ok: true, lead: updated });
  } catch (err) {
    console.error("[leads] update failed", err);
    return res.status(500).json({ ok: false, error: "Failed to update" });
  }
}
