import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(req: NextRequest, { params }: { params: { username: string } }) {
    try {
        const account = await prisma.account.findFirst({
            where: {
                Username: params.username,
            },
            select: {
                admin: {
                    select: {
                        barangayNo: true,
                    },
                },
            },
        });

        if (!account || !account.admin) {
            return new NextResponse('User not found or does not have an associated barangay', { status: 404 });
        }

        return NextResponse.json({ barangayNo: account.admin.barangayNo });
    } catch (error) {
        console.error('Error fetching barangay number:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
