import { Prisma, PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request, context:any) {
    try {
        const { params } = context;
        const fees : [] = await prisma.$queryRaw`CALL Get   FeeByID(NULL, ${params.businessID});`
        if (fees.length != 0) {
            return NextResponse.json({
                fees,
            });
        } else {
            return new NextResponse('Fees not found', { status: 404 })
        }
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}