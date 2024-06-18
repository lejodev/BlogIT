import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";

export async function handleToken() {
  // const token =
}

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // "/company",
    "/create",
  ],
};
