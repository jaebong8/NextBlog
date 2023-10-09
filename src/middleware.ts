import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('미들웨어 체크중');
    if(request.nextUrl.pathname.startsWith("/posts/4")){
        console.log('미들웨어 체크중,"/posts/4"');
        return NextResponse.redirect(new URL("/posts",request.url))
    }
}

// 특정한 경로에서만 실행
export const config = {
    matcher: ["/posts/:id+"]
}