// app/api/gender/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

interface GenderData {
    PurokName: string;
    Male: number;
    Female: number;
    Other: number;
}

export async function GET(request: NextRequest, { params }: { params: { barangayNo: string }}) {
    try {
        const genderData = await prisma.personalinfo.findMany({
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
                gender: true,
            },
        });

        const formattedGenderData = genderData.reduce((acc: Record<string, GenderData>, data) => {
            const purokName = data.citizen?.purok?.PurokName || 'Unknown';
            if (!acc[purokName]) {
                acc[purokName] = {
                    PurokName: purokName,
                    Male: 0,
                    Female: 0,
                    Other: 0,
                };
            }
            if (data.gender === "Male") {
                acc[purokName].Male++;
            } else if (data.gender === "Female") {
                acc[purokName].Female++;
            } else {
                acc[purokName].Other++;
            }
            return acc;
        }, {});

        const responseArray = Object.values(formattedGenderData);

        return NextResponse.json(responseArray);
    } catch (error) {
        console.error('Error fetching gender distribution by barangay:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
