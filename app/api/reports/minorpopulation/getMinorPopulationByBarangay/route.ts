import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const inputBarangayNo = parseInt(searchParams.get('input_barangayNo') || '0', 10);

        if (isNaN(inputBarangayNo) || inputBarangayNo <= 0) {
            return new NextResponse('Invalid barangay number', { status: 400 });
        }

        const minorPopulationData = await prisma.citizen.findMany({
            where: {
                barangayNo: inputBarangayNo,
            },
            select: {
                purok: {
                    select: {
                        PurokName: true,
                    },
                },
                personalinfo: {
                    select: {
                        age: true,
                    },
                },
            },
        });
       

    } catch (error) {
        console.error('Error fetching minor population by barangay:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
