import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export async function GET(req, res){
  redirect('/');
}