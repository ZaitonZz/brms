// app/api/minorPopulation/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

interface MinorPopulationData {
    PurokName: string;
    Minor: number;
    Population: number;
}

export async function GET(request: NextRequest, { params }: { params: { barangayNo: string }}) {
    try {
        const minorPopulationData = await prisma.citizen.findMany({
            where: {
                barangayNo: parseInt(params.barangayNo, 10),
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

        const formattedMinorPopulationData = minorPopulationData.reduce((acc: Record<string, MinorPopulationData>, data) => {
            const purokName = data.purok?.PurokName || 'Unknown';
            const ages = data.personalinfo.map(info => info.age);

            if (!acc[purokName]) {
                acc[purokName] = {
                    PurokName: purokName,
                    Minor: 0,
                    Population: 0,
                };
            }

            ages.forEach(age => {
                if (age !== null && age < 18) {
                    acc[purokName].Minor++;
                }
                acc[purokName].Population++;
            });

            return acc;
        }, {});

        const responseArray = Object.values(formattedMinorPopulationData);

        return NextResponse.json(responseArray);
    } catch (error) {
        console.error('Error fetching minor population by barangay:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
