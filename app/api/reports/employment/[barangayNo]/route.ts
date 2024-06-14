// app/api/employed/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

interface EmployedData {
    PurokName: string;
    Employed: number;
    Unemployed: number;
    Population: number;
}

export async function GET(request: NextRequest, { params }: { params: { barangayNo: string }}) {
    try {
        const employmentData = await prisma.personalinfo.findMany({
            where: {
                citizen: {
                    purok: {
                        BarangayNo: parseInt(params.barangayNo, 10)
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
                isEmployed: true,
            },
        });

        const formattedEmploymentData = employmentData.reduce((acc: Record<string, EmployedData>, data) => {
            const purokName = data.citizen?.purok?.PurokName || 'Unknown';
            if (!acc[purokName]) {
                acc[purokName] = {
                    PurokName: purokName,
                    Employed: 0,
                    Unemployed: 0,
                    Population: 0,
                };
            }
            if (data.isEmployed === "Yes") {
                acc[purokName].Employed++;
            } else if (data.isEmployed === "No") {
                acc[purokName].Unemployed++;
            }
            acc[purokName].Population = acc[purokName].Employed + acc[purokName].Unemployed;
            return acc;
        }, {});

        const responseArray = Object.values(formattedEmploymentData);

        return NextResponse.json(responseArray);
    } catch (error) {
        console.error('Error fetching employment distribution by barangay:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
