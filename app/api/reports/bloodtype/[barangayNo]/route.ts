import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: NextRequest, { params }: { params: { barangayNo: string }}) {

    try {
        const bloodtypes = await prisma.purok.findMany({
            where: {
                BarangayNo: parseInt(params.barangayNo, 10)
            },
            include: {
                citizen: {
                    select: {
                        personalinfo: {
                            select: {
                                bloodtype: true
                            }
                        }
                    }
                }
            }
        });
        
        const formattedBloodTypes = bloodtypes.map(purok => {
            const bloodTypeCounts = {
                A_Positive: 0,
                A_Negative: 0,
                B_Positive: 0,
                B_Negative: 0,
                AB_Positive: 0,
                AB_Negative: 0,
                O_Positive: 0,
                O_Negative: 0,
                Unknown: 0
            };

            purok.citizen.forEach(citizen => {
                citizen.personalinfo.forEach(info => {
                    const bloodtype = info.bloodtype;
                    switch (bloodtype) {
                        case 'A+':
                            bloodTypeCounts.A_Positive++;
                            break;
                        case 'A-':
                            bloodTypeCounts.A_Negative++;
                            break;
                        case 'B+':
                            bloodTypeCounts.B_Positive++;
                            break;
                        case 'B-':
                            bloodTypeCounts.B_Negative++;
                            break;
                        case 'AB+':
                            bloodTypeCounts.AB_Positive++;
                            break;
                        case 'AB-':
                            bloodTypeCounts.AB_Negative++;
                            break;
                        case 'O+':
                            bloodTypeCounts.O_Positive++;
                            break;
                        case 'O-':
                            bloodTypeCounts.O_Negative++;
                            break;
                        default:
                            bloodTypeCounts.Unknown++;
                    }
                });
            });

            return {
                PurokName: purok.PurokName || 'Unknown',
                ...bloodTypeCounts
            };
        });

        return NextResponse.json(formattedBloodTypes);
    } catch (error) {
        console.error('Error fetching blood types:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
