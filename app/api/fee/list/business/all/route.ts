import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: Request) {
    try {
        const fees = await prisma.$queryRaw`CALL GetBusinessFees();`
        if (fees) {
            return NextResponse.json({
                fees,
            });
        } else {
            return new NextResponse('Business Fees not found', { status: 404 })
        }
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}