import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';
import { Fee } from '@/app/types/types';

export async function GET(request: Request) {
    try {
        const rawFees:Fee[] = await prisma.$queryRaw`CALL GetBusinessFees();`
        if (rawFees) {
            const fees = rawFees.map((fee: any) => ({
                feeID: fee.f0,
                adminID: fee.f1,
                BusinessID: fee.f2,
                Date: fee.f3,
                Time: fee.f4,
                amountPaid: fee.f5,
                feetype: fee.f6,
                businessName: fee.f7
            }));
            return NextResponse.json({
                fees,
            });
        } else {
            return new NextResponse('Business Fees not found', { status: 404 })
        }
    } catch (error) {
        console.error('Error fetching fees:', error);
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}