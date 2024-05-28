import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma'; // Adjust the path to your prisma client setup

export async function GET(req: NextRequest, { params }: { params: { barangayNo: string } }) {
    try {
        const barangayNo = parseInt(params.barangayNo);
        if (isNaN(barangayNo)) {
            return new NextResponse('Invalid barangay number', { status: 400 });
        }

        const physicalInfo = await prisma.physicalinfo.findFirst({
            where: { barangayNo },
        });

        if (!physicalInfo) {
            return new NextResponse('Physical information not found', { status: 404 });
        }

        return NextResponse.json(physicalInfo);
    } catch (error) {
        console.error('Error fetching physical information:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export async function POST(req: NextRequest, { params }: { params: { barangayNo: string } }) {
    try {
        const barangayNo = parseInt(params.barangayNo);
        if (isNaN(barangayNo)) {
            return new NextResponse('Invalid barangay number', { status: 400 });
        }

        const data = await req.json();

        const existingPhysicalInfo = await prisma.physicalinfo.findFirst({
            where: { barangayNo },
        });

        if (!existingPhysicalInfo) {
            return new NextResponse('Physical information not found', { status: 404 });
        }

        const updatedPhysicalInfo = await prisma.physicalinfo.update({
            where: { physicalInfoID: existingPhysicalInfo.physicalInfoID },
            data: data,
        });

        return NextResponse.json(updatedPhysicalInfo);
    } catch (error) {
        console.error('Error updating physical information:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
