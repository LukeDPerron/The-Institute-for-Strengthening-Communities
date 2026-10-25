import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const requestedPath = searchParams.get("next") ?? "/membership";
  const requestedDestination = new URL(requestedPath, origin);
  const isLocalPath = requestedPath.startsWith("/") && !requestedPath.startsWith("//");
  const destination =
    isLocalPath && requestedDestination.origin === origin
      ? requestedDestination
      : new URL("/membership", origin);

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(destination);
  }

  return NextResponse.redirect(new URL("/login?message=confirmation-failed", origin));
}