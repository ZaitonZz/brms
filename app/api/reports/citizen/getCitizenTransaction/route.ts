import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const transactions = await prisma.transactions.findMany({
            where: {
                citizenID: {
                    not: null,
                },
            },
            select: {
                transactionID: true,
                adminID: true,
                citizenID: true,
                date: true,
                time: true,
                purpose: true,
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
        console.error('Error fetching citizen transactions:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
