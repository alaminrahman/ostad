import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";



export async function GET(req, res){
  
  const list = headers();
  const user = list.get('user')

  return NextResponse.json({
    msg: 'I am msg',
    name: user,
  }, { status: 200 });

}