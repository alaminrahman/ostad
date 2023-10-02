import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req){

    console.log('check middleware utility')

    try{
        const token = req.cookies.get('token');
        // console.log('check token')
        // //test
        // let tokenAce = token ? 'token ace' : 'token nai';
        // console.log(token.value);

        let payload = await VerifyToken(token.value);

        const reqHeadears = new Headers(req.headers);
        reqHeadears.set('email', payload['email'])


        return NextResponse.next({
            request: { headers: reqHeadears }
        });
        
    }catch(e){
        return NextResponse.redirect(new URL('/login', req.url))
    }

}