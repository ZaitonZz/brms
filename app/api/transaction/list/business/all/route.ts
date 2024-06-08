import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';
import { BusinessTransaction } from '@/app/types/types';

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

        const formattedTransactions: BusinessTransaction[] = transactionss.map(transaction => {
            const formattedDate = transaction.date ? new Date(transaction.date).toLocaleDateString('en-US') : null;
            const formattedTime = transaction.time ? new Date(transaction.time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : null;
            
            return{
                transactionID: transaction.transactionID,
                adminID: transaction.adminID,
                businessID: transaction.businessID,
                date: formattedDate,
                time: formattedTime,
                purpose: transaction.purpose,
                businessName: transaction.business ? transaction.business.businessName : null,
            }
            
        });
        
        return NextResponse.json(formattedTransactions);
    } catch (error) {
        console.error('Error fetching business transactions:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
