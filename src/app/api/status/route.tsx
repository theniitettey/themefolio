import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";

export function GET(request: NextRequest) {
  return NextResponse.json({ status: "online" });
}
