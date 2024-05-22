import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: Request, context:any) {
    try {
        const { params } = context;
        const transactions : [] = await prisma.$queryRaw`CALL GetTransactionByID(${params.citizenID}, NULL);`
        if (transactions.length != 0) {
            return NextResponse.json({
                transactions,
            });
        } else {
            return new NextResponse('Transactions not found', { status: 404 })
        }
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}