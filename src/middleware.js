import { NextRequest, NextResponse } from "next/server";

export async function middleware(req) {

    // console.log("End here!")
    // console.log(req.cookies.has("next-auth.session-token"))
    // if (req.cookies.has("next-auth.session-token")) {
        return NextResponse.next()
    // } else {
    //     console.log("No cookie provided")
    //     return NextResponse.redirect(new URL("/api/auth/unauthorized"))
    // }
}

// export const config = {
//     matcher: ["/api/post/:path*"]
// }