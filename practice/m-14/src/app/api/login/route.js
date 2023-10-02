import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

import { CreateToken } from "@/app/utility/JWTHelper";
import { TokenCookie } from "@/app/utility/TokenCookie";

export async function POST(req, res){
    let JSON = await req.json();

    let email = JSON['email'];
    let password = JSON['password'];

    if(email == 'alamin@gmail.com' && password == '123'){
        let Cookie = await TokenCookie(email);

        return NextResponse.json({
            status: true
        }, { status: 200, headers: Cookie });
        
    }else{
        return NextResponse.json({
            status: false,
            message: 'Invalid credentials'
        }, { status: 200 });
    }

}

export async function GET(){

    cookies().delete('token');

    return NextResponse.json({
        status: true,
        message: 'Logout success!'
    });
}