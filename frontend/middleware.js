import { NextResponse } from "next/server";

export function middleware(request) {
    // console.log(request.nextUrl.pathname);

    if (request.nextUrl.pathname.startsWith("/profile/settings")) {
        return NextResponse.rewrite(new URL("/profile", request.url));
    }

    if (request.nextUrl.pathname.startsWith("/profile/course")) {
        return NextResponse.rewrite(new URL("/profile", request.url));
    }

    if (request.nextUrl.pathname.startsWith("/profile/delete")) {
        return NextResponse.rewrite(new URL("/profile", request.url));
    }
}
// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/profile/:path*"],
};
