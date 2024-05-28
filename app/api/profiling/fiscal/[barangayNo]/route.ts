import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(req: NextRequest, { params }: { params: { barangayNo: string } }) {
    try {
        const barangayNo = parseInt(params.barangayNo);
        if (isNaN(barangayNo)) {
            return new NextResponse('Invalid barangay number', { status: 400 });
        }

        const fiscalInfo = await prisma.fiscalinfo.findFirst({
            where: { barangayNo },
        });

        if (!fiscalInfo) {
            return new NextResponse('Fiscal information not found', { status: 404 });
        }

        return NextResponse.json(fiscalInfo);
    } catch (error) {
        console.error('Error fetching fiscal information:', error);
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

        // Fetch the existing fiscalInfoID for the given barangayNo
        const existingFiscalInfo = await prisma.fiscalinfo.findFirst({
            where: { barangayNo },
        });

        if (!existingFiscalInfo) {
            return new NextResponse('Fiscal information not found', { status: 404 });
        }

        const updatedFiscalInfo = await prisma.fiscalinfo.update({
            where: { fiscalInfoID: existingFiscalInfo.fiscalInfoID },
            data: data,
        });

        return NextResponse.json(updatedFiscalInfo);
    } catch (error) {
        console.error('Error updating fiscal information:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
