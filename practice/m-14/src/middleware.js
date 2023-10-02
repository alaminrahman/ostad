import { NextRequest } from "next/server";
import { CheckCookieAuth } from "./app/utility/MiddlewareUtility";

export async function middleware(request){

   if(request.nextUrl.pathname.startsWith('/dashboard')){
    return await CheckCookieAuth(request);
   }
}