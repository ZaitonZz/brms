import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const transactions = await prisma.transactions.findMany({
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
        const formattedTransaction = transactions.map(transactions => ({
            ...transactions,
            businessName: transactions.business ? transactions.business.businessName : null,
        }));
        return NextResponse.json(formattedTransaction);
    } catch (error) {
        console.error('Error fetching business transactions:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
