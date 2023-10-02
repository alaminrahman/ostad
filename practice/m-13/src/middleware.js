import { NextRequest, NextResponse } from "next/server";

export function middleware(req, res){
    if(req.nextUrl.pathname.startsWith('/api/product')){
        const reqHeaders = new Headers(req.headers);
        const token = reqHeaders.get('token');

        console.log(token)
    
        if(token == '123-XYZ'){
            const response = NextResponse.next();
            response.headers.set('Set-Cookie', 'session=xxxvalue; path=/; httponly=true; secure=true; expires=Thu, 18 Dec 2023 12:00:00 Astana');
            return response;
        }else{
            return NextResponse.json({}, { status: 401 });
        }
    }
}