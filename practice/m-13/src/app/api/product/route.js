import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";



export async function GET(req, res){
  
  return NextResponse.json({
    msg: 'I am msg',
  }, { status: 200 });

}