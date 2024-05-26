import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const transactions = await prisma.transactions.findMany();
        return NextResponse.json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return NextResponse.json({ error: 'Failed to fetch transactions' }, { status: 500 });
    }
}
