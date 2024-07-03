import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: NextRequest, { params }: { params: { barangayNo: string }}) {

    try {
        const businessesGroupedByPurok = await prisma.business.groupBy({
            by: ['purokID'],
            where: {
                barangayNo: parseInt(params.barangayNo, 10),
            },
            _count: {
                businessID: true,
            },
            orderBy: {
                purokID: 'asc',
            },
        });

        const result = await Promise.all(
            businessesGroupedByPurok.map(async (group) => {
                if (group.purokID === null) {
                    return {
                        PurokName: 'Unknown Purok',
                        NumberOfEstablishments: group._count.businessID,
                    };
                }

                const purok = await prisma.purok.findUnique({
                    where: { purokID: group.purokID },
                    select: { PurokName: true },
                });

                return {
                    PurokName: purok?.PurokName || 'Unknown Purok',
                    NumberOfEstablishments: group._count.businessID,
                };
            })
        );

        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching businesses:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
