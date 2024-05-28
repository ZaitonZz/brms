// app/api/socioeconomic/[barangayNo]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(req: NextRequest, { params }: { params: { barangayNo: string } }) {
    try {
        const barangayNo = parseInt(params.barangayNo, 10);
        
        if (isNaN(barangayNo)) {
            return NextResponse.json({ error: 'Invalid barangay number' }, { status: 400 });
        }
        
        const socioEconomicInfo = await prisma.socioeconomicinfo.findFirst({
            where: {
                barangayNo,
            },
        });

        return NextResponse.json(socioEconomicInfo);
    } catch (error) {
        console.error('Error fetching socio-economic information:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { barangayNo, brgyHall, MultiPurposeHall, Library, brgyHealthstation, dayCareCenter, satelliteMarket, sportsCenter, materialsRecoveryFacility, wasteManagementCollectSystem, rainWaterCollectionSystem, plaza, waterSupplySystem, PlantingMaterialsDistributionSystem, FarmProduceStation } = await req.json();

        const existingSocioEconomicInfo = await prisma.socioeconomicinfo.findFirst({
            where: { barangayNo },
        });

        if (!existingSocioEconomicInfo) {
            return new NextResponse('Physical information not found', { status: 404 });
        }


        const socioEconomicInfo = await prisma.socioeconomicinfo.upsert({
            where: { socioEconomicID: existingSocioEconomicInfo.socioEconomicID },
            update: {
                brgyHall,
                MultiPurposeHall,
                Library,
                brgyHealthstation,
                dayCareCenter,
                satelliteMarket,
                sportsCenter,
                materialsRecoveryFacility,
                wasteManagementCollectSystem,
                rainWaterCollectionSystem,
                plaza,
                waterSupplySystem,
                PlantingMaterialsDistributionSystem,
                FarmProduceStation,
            },
            create: {
                barangayNo,
                brgyHall,
                MultiPurposeHall,
                Library,
                brgyHealthstation,
                dayCareCenter,
                satelliteMarket,
                sportsCenter,
                materialsRecoveryFacility,
                wasteManagementCollectSystem,
                rainWaterCollectionSystem,
                plaza,
                waterSupplySystem,
                PlantingMaterialsDistributionSystem,
                FarmProduceStation,
            },
        });

        return NextResponse.json(socioEconomicInfo);
    } catch (error) {
        console.error('Error updating socio-economic information:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
