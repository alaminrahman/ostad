import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(){

    await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice6@prisma.io',
          phone: '01534334343'
         
        },
      })

    const allUsers = await prisma.user.findMany();
    return NextResponse.json(allUsers, {status: 200})
}

export async function POST(req, res){

    const reqData = req.json();
    let name = reqData.name;
    let email = reqData.email;
    let phone = reqData.get('phone');

    return NextResponse.json({'message': phone}, { status: 200})

    await prisma.user.create({
        data: {
          name: name,
          email: email,
          phone: phone
         
        },
      })

      return NextResponse.json({'message': 'Success!'}, { status: 200})


}