import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const notes = await prisma.note.findMany({
            where: {
                citizenID: {
                    not: null,
                },
            },
            select: {
                noteID: true,
                AdminID: true,
                citizenID: true,
                BusinessID: true,
                Time: true,
                Note: true,
                Date: true,
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
        console.error('Error fetching citizen notes:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
