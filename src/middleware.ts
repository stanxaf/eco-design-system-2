import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = { matcher: "/r/:path*" };

export function middleware(request: NextRequest) {
  // Temporarily disabled for development
  // const token = request.nextUrl.searchParams.get("token");
  // if (token == null || token !== process.env.REGISTRY_AUTH_TOKEN) {
  //   return new NextResponse("Unauthorized", { status: 401 });
  // }
  return NextResponse.next();
}
