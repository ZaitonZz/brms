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

        const formattedFees = fees.map(fee => {
            const personalinfo = Array.isArray(fee.citizen?.personalinfo) ? fee.citizen.personalinfo[0] : fee.citizen?.personalinfo;
            return {
                feeID: fee.feeID,
                adminID: fee.adminID,
                CitizenID: fee.CitizenID,
                Date: fee.Date,
                Time: fee.Time,
                amountPaid: fee.amountPaid,
                feetype: fee.feetype,
                firstname: personalinfo?.firstname || null,
                lastName: personalinfo?.lastName || null,
            };
        });

        return NextResponse.json(formattedFees);
    } catch (error) {
        console.error('Error fetching citizen fees:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
