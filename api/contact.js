// Vercel serverless function — receives leads from the contact form and
// forwards them to the WagerAds backoffice.
//
// Environment variables (set in Vercel → Project → Settings → Environment Variables):
//   BACKOFFICE_URL    — full URL of the backoffice ingest endpoint (POST)
//   BACKOFFICE_TOKEN  — optional bearer token sent in Authorization header
//
// If BACKOFFICE_URL is not set, the function logs the lead and returns 200
// so the form keeps working until the backoffice is wired.

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(204).end();
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const lead = (req.body && typeof req.body === "object") ? req.body : {};

  // Light validation — drop obvious junk fast, don't try to be a CRM.
  if (!lead.email || typeof lead.email !== "string" || !lead.email.includes("@")) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }

  const enriched = {
    ...lead,
    receivedAt: new Date().toISOString(),
    userAgent: req.headers["user-agent"] || null,
    ip: req.headers["x-forwarded-for"] || req.socket?.remoteAddress || null,
    referer: req.headers.referer || null,
  };

  const url = process.env.BACKOFFICE_URL;
  if (!url) {
    console.log("[lead]", JSON.stringify(enriched));
    return res.status(200).json({ ok: true, forwarded: false });
  }

  try {
    const headers = { "Content-Type": "application/json" };
    if (process.env.BACKOFFICE_TOKEN) {
      headers.Authorization = `Bearer ${process.env.BACKOFFICE_TOKEN}`;
    }

    const upstream = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(enriched),
    });

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => "");
      console.error("[backoffice] non-2xx", upstream.status, detail.slice(0, 500));
      return res.status(502).json({ ok: false, error: "Upstream rejected" });
    }

    return res.status(200).json({ ok: true, forwarded: true });
  } catch (err) {
    console.error("[backoffice] exception", err);
    return res.status(502).json({ ok: false, error: "Upstream unreachable" });
  }
}
