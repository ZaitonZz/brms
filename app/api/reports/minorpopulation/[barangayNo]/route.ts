import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

interface MinorPopulationData {
    PurokName: string;
    Minor: number;
    Population: number;
}

export async function GET(request: NextRequest, { params }: { params: { barangayNo: string }}) {
    try {
        const minorPopulationData = await prisma.personalinfo.findMany({
            where: {
                citizen: {
                    purok: {
                        BarangayNo: parseInt(params.barangayNo, 10),
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
                age: true,
            },
        });

        const formattedMinorPopulationData = minorPopulationData.reduce((acc: Record<string, MinorPopulationData>, data) => {
            const purokName = data.citizen?.purok?.PurokName || 'Unknown';
            if (!acc[purokName]) {
                acc[purokName] = {
                    PurokName: purokName,
                    Minor: 0,
                    Population: 0,
                };
            }
            if (data.age !== null && data.age < 18) {
                acc[purokName].Minor++;
            }
            acc[purokName].Population++;
            return acc;
        }, {});

        const responseArray = Object.values(formattedMinorPopulationData);

        return NextResponse.json(responseArray);
    } catch (error) {
        console.error('Error fetching minor population by barangay:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
