import { NextRequest, NextResponse } from "next/server";

export function middleware(req, res){
    if(req.nextUrl.pathname.startsWith('/api/product')){
        const reqHeaders = new Headers(req.headers);
        const token = reqHeaders.get('token');

        console.log(token)
    
        if(token == '123-XYZ'){
            reqHeaders.set('user', 'alamin')
            reqHeaders.set('email', 'alamin@gmail.com')

            return NextResponse.next({
                request: { headers: reqHeaders }
            });
        }else{
            return NextResponse.json({}, { status: 401 });
        }
    }
}