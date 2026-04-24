import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // TODO: wire to CRM / email / Slack. For now, just log.
  console.log("[contact]", body);
  return NextResponse.json({ ok: true });
}
