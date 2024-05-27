import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const inputBarangayNo = parseInt(searchParams.get('input_barangayNo') || '0', 10);

        if (isNaN(inputBarangayNo) || inputBarangayNo <= 0) {
            return new NextResponse('Invalid barangay number', { status: 400 });
        }

        const genderData = await prisma.personalinfo.findMany({
            where: {
                citizen: {
                    purok: {
                        BarangayNo: inputBarangayNo,
                    },
                },
            },
            select: {
                citizen: {
                    select: {
                        purok: {
                            select: {
                                PurokName: true,
                            },
                        },
                    },
                },
                gender: true,
            },
        });

        type GenderCount = {
          Male: number;
          Female: number;
          Other: number;
      };


    } catch (error) {
        console.error('Error fetching gender distribution by barangay:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}