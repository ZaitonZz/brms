import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const inputCitizenID = parseInt(searchParams.get('inputCitizenID') || '0', 10);

        if (isNaN(inputCitizenID) || inputCitizenID <= 0) {
            return new NextResponse('Invalid citizen ID', { status: 400 });
        }

        const complaints = await prisma.complaints.findMany({
            where: {
                OR: [
                    { citizenID_complainant: inputCitizenID },
                    { citizenID_complainee: inputCitizenID },
                ],
            },
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
        console.error('Error fetching complaints by citizen:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
