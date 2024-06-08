import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';
import { CitizenTransaction } from '@/app/types/types';

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

        const formattedTransactions: CitizenTransaction[] = transactions.map(transaction => {
            const personalinfo = Array.isArray(transaction.citizen?.personalinfo) ? transaction.citizen.personalinfo[0] : transaction.citizen?.personalinfo;

            const formattedDate = transaction.date ? new Date(transaction.date).toLocaleDateString('en-US') : null;
            const formattedTime = transaction.time ? new Date(transaction.time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : null;

            return {
                transactionID: transaction.transactionID,
                adminID: transaction.adminID,
                citizenID: transaction.citizenID,
                date: formattedDate,
                time: formattedTime,
                purpose: transaction.purpose,
                firstname: personalinfo?.firstname || null,
                lastName: personalinfo?.lastName || null,
            };
        });

        return NextResponse.json(formattedTransactions);
    } catch (error) {
        console.error('Error fetching citizen transactions:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
