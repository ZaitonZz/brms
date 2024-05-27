import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const fees = await prisma.fee.findMany({
            where: {
                CitizenID: {
                    not: null,
                },
            },
            select: {
                feeID: true,
                adminID: true,
                CitizenID: true,
                Date: true,
                Time: true,
                amountPaid: true,
                feetype: true,
                citizen: {
                    select: {
                        personalinfo: {
                            select: {
                                firstname: true,
                                lastName: true,
                            },
                        },
                    },
                },
            },
        });

    } catch (error) {
        console.error('Error fetching citizen fees:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
