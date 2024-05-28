import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const transactionss = await prisma.transactions.findMany({
            where: {
                businessID: {
                    not: null,
                },
            },
            select: {
                transactionID: true,
                adminID: true,
                businessID: true,
                date: true,
                time: true,
                purpose: true,
                business: {
                    select: {
                        businessName: true,
                    },
                },
            },
        });

        const formattedTransactions = transactionss.map(transactions => ({
            transactionID: transactions.transactionID,
            adminID: transactions.adminID,
            businessID: transactions.businessID,
            date: transactions.date,
            time: transactions.time,
            purpose: transactions.purpose,
            businessName: transactions.business ? transactions.business.businessName : null,
        }));
        
        return NextResponse.json(formattedTransactions);
    } catch (error) {
        console.error('Error fetching business transactions:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
