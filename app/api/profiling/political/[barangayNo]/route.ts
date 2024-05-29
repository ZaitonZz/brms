import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(req: NextRequest, { params }: { params: { barangayNo: string } }) {
  try {
    const barangayNo = parseInt(params.barangayNo, 10);

    if (isNaN(barangayNo) || barangayNo <= 0) {
      return new NextResponse('Invalid barangay number', { status: 400 });
    }

    const politicalInfo = await prisma.politicalinfo.findFirst({
      where: { barangayNo },
    });

    if (!politicalInfo) {
      return new NextResponse('Political info not found', { status: 404 });
    }

    return NextResponse.json(politicalInfo);
  } catch (error) {
    console.error('Error fetching political info:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(req: NextRequest, { params }: { params: { barangayNo: string } }) {
  try {
    const barangayNo = parseInt(params.barangayNo, 10);
    const data = await req.json();

    if (isNaN(barangayNo) || barangayNo <= 0) {
      return new NextResponse('Invalid barangay number', { status: 400 });
    }

    const existingPoliticalInfo = await prisma.politicalinfo.findFirst({
      where: { barangayNo },
    });

    if (!existingPoliticalInfo) {
      return new NextResponse('Political info not found', { status: 404 });
    }

    const updatedPoliticalInfo = await prisma.politicalinfo.update({
      where: { politicalInfoID: existingPoliticalInfo.politicalInfoID },
      data: {
        ...data,
        numOfPrecints: parseInt(data.numOfPrecints, 10), // Ensure numOfPrecints is an integer
      },
    });

    return NextResponse.json(updatedPoliticalInfo);
  } catch (error) {
    console.error('Error updating political info:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
