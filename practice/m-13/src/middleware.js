import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher : '/'
} 

export function middleware(req, res){
    console.log(req.nextUrl.pathname);
    console.log("Im middleware");
    console.log(" ");
}