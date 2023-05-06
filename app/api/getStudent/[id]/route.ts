import { NextResponse } from 'next/server'
import { prisma } from '../../client'
import { Student } from '@prisma/client';


export async function GET(request: Request,
  { params }: { params: { id: string }; }) {
  'use server'
  // console.log(params.id)
  // console.log(typeof (parseInt(params.id)))
  let data: Student | null = null;
  try {
    data = await prisma.student.findUnique({
      where: {
        id: parseInt(params.id)
      }
    })
  } catch (err) {
    console.error(err)
  } finally {
    console.log(data)
    return NextResponse.json(data)
  }
}
