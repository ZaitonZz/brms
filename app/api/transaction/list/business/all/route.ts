import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: Request) {
    try {
        const transactions = await prisma.$queryRaw`CALL GetBusinessTransactions();`
        if (transactions) {
            return NextResponse.json({
                transactions,
            });
        } else {
            return new NextResponse('Business Transactions not found', { status: 404 })
        }
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}