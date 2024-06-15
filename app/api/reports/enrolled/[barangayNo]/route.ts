// app/api/enrolled/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

interface EnrollmentData {
    PurokName: string;
    Enrolled: number;
    Population: number;
}

export async function GET(request: NextRequest, { params }: { params: { barangayNo: string }}) {
    try {
        const enrollmentData = await prisma.personalinfo.findMany({
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
                isEnrolled: true,
            },
        });

        const formattedEnrollmentData = enrollmentData.reduce((acc: Record<string, EnrollmentData>, data) => {
            const purokName = data.citizen?.purok?.PurokName || 'Unknown';
            if (!acc[purokName]) {
                acc[purokName] = {
                    PurokName: purokName,
                    Enrolled: 0,
                    Population: 0,
                };
            }
            if (data.isEnrolled === "Yes") {
                acc[purokName].Enrolled++;
            }
            acc[purokName].Population++;
            return acc;
        }, {});

        const responseArray = Object.values(formattedEnrollmentData);

        return NextResponse.json(responseArray);
    } catch (error) {
        console.error('Error fetching enrollment data by barangay:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
