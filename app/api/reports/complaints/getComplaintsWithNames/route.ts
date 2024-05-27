import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const complaints = await prisma.complaints.findMany({
            select: {
                complaintID: true,
                adminID: true,
                citizenID_complainant: true,
                citizenID_complainee: true,
                date: true,
                time: true,
                for: true,
                actions: true,
                citizen_complaints_citizenID_complainantTocitizen: {
                    select: {
                        personalinfo: {
                            select: {
                                firstname: true,
                                lastName: true,
                            },
                        },
                    },
                },
               citizen_complaints_citizenID_complaineeTocitizen: {
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
        console.error('Error fetching complaints with names:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
