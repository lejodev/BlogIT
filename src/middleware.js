import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";

export async function middleware(req) {
  const currentUser = req.cookies.get("next-auth.session-token");
  console.log("currentUser", currentUser);
  const session = req;
  console.log("FUCCKING SESSION", session);

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

  //   console.log("End here!");
  //   console.log(req.cookies);
  // if (req.cookies) {
  //     console.log("HASSSS")
  //     return NextResponse.next()
  // } else {
  //     console.log("No cookie provided")
  //     return NextResponse.redirect(new URL("/api/auth/unauthorized"))
  // }
}

export const config = {
  matcher: ["/company", "/about"],
};
