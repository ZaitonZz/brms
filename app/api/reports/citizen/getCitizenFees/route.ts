import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const fees: any[] = await prisma.fee.findMany({
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
        const formattedFees = fees.map(fee => ({
            feeID: fee.feeID,
            adminID: fee.adminID,
            CitizenID: fee.CitizenID,
            Date: fee.Date,
            Time: fee.Time,
            amountPaid: fee.amountPaid,
            feetype: fee.feetype,
            firstname: fee.citizen?.personalinfo?.firstname || null,
            lastName: fee.citizen?.personalinfo?.lastName || null,
            // Ensure businessName is handled correctly
        }));

        return NextResponse.json(formattedFees);
    } catch (error) {
        console.error('Error fetching citizen fees:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
