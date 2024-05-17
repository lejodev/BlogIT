import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";

export async function middleware(req) {
  // const currentUser = req.cookies.get("next-auth.session-token");
  // console.log("currentUser", currentUser);
  // const session = req;
  // console.log("FUCCKING SESSION", session);

  if (currentUser) {
    console.log("With cookie");
    const url = req.nextUrl.clone();
    url.pathname = "/";
    // const userType = JSON.parse(currentUser.value);
    // console.log(userType)
    // console.log(
    //   "==================================userType==================================",
    //   userType
    // );
    return NextResponse.redirect(url);
  } else {
    console.log("Without cookie");
    const url = req.nextUrl.clone();
    url.pathname = "/api/auth/signin";
    // return NextResponse.rewrite(url);
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/company", "/create"],
};
