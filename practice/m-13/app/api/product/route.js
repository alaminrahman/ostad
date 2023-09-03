import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { headers } from "next/headers";


export async function POST(req, res){
  //encoded data
  // let reqBody = await req.formData();
  // let name = reqBody.get('name');

  // let headerList = headers();
  // let authToken = headerList.get("Auth-Token");

  //Cookies
  let csrf_token = req.cookies.get("csrf_token");
  let token = req.cookies.get("csrf_token");

    return NextResponse.json({
        data: csrf_token,
        token : token
    }, { 
      status: 200, 
      headers: {
        token: "tfasdfsd",
        'Set-Cookie': 'token=cookietoken, path=/'
      },
      
    });
}