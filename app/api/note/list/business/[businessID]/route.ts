import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request, context:any) {
    try {
        const { params } = context;
        const notes:[] = await prisma.$queryRaw`CALL GetFeeByID(${params.citizenID}, NULL);`
        if (notes.length != 0) {
            return NextResponse.json({
                notes,
            });
        } else {
            return new NextResponse('Notes not found', { status: 404 })
        }
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}