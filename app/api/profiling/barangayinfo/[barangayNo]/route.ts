import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma'; // Adjust the path to your prisma client setup

// GET request to fetch barangay details
export async function GET(req: NextRequest, { params }: { params: { barangayNo: string } }) {
  try {
    const barangayNo = parseInt(params.barangayNo);
    if (isNaN(barangayNo)) {
      return new NextResponse('Invalid barangay number', { status: 400 });
    }

    const barangay = await prisma.barangay.findUnique({
      where: {
        barangayNo,
      },
    });

    if (!barangay) {
      return new NextResponse('Barangay not found', { status: 404 });
    }

    return NextResponse.json(barangay);
  } catch (error) {
    console.error('Error fetching barangay:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// POST request to update barangay details
export async function POST(req: NextRequest, { params }: { params: { barangayNo: string } }) {
  try {
    const barangayNo = parseInt(params.barangayNo);
    if (isNaN(barangayNo)) {
      return new NextResponse('Invalid barangay number', { status: 400 });
    }

    const body = await req.json();

    const updatedBarangay = await prisma.barangay.update({
      where: {
        barangayNo,
      },
      data: body,
    });

    return NextResponse.json(updatedBarangay);
  } catch (error) {
    console.error('Error updating barangay:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
