import { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export async function GET(req, res){
  return NextResponse.json({
    name: 'test'
    
  }, { status: 200});

}