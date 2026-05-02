// Single-token auth gate for the backoffice API.
//
// Set ADMIN_TOKEN to a long random string in Vercel → Project → Settings →
// Environment Variables. The admin UI prompts for it and stores it in
// sessionStorage. Every protected request sends "Authorization: Bearer <token>".

function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export function requireAdmin(req, res) {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) {
    res.status(503).json({
      ok: false,
      error: "ADMIN_TOKEN env var is not set",
    });
    return false;
  }
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!safeEqual(token, expected)) {
    res.status(401).json({ ok: false, error: "Unauthorized" });
    return false;
  }
  return true;
}
