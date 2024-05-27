import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const fees = await prisma.fee.findMany({
            where: {
                businessID: {
                    not: null,
                },
            },
            select: {
                feeID: true,
                adminID: true,
                businessID: true,
                Date: true,
                Time: true,
                amountPaid: true,
                feetype: true,
                business: {
                    select: {
                        businessName: true,
                    },
                },
            },
        });
        const formattedFees = fees.map(fee => ({
            ...fee,
            businessName: fee.business ? fee.business.businessName : null,
        }));
   
        return NextResponse.json(formattedFees);
    } catch (error) {
        console.error('Error fetching business fees:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
