import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const inputBarangayNo = parseInt(searchParams.get('input_barangayNo') || '0', 10);

        if (isNaN(inputBarangayNo) || inputBarangayNo <= 0) {
            return new NextResponse('Invalid barangay number', { status: 400 });
        }

        const bloodTypeData = await prisma.personalinfo.findMany({
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
                bloodtype: true,
            },
        });

    
    } catch (error) {
        console.error('Error fetching blood type distribution by barangay:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
