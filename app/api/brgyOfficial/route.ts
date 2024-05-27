import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { PunongBarangay, Kagawad1, Kagawad2, Kagawad3, Kagawad4, Kagawad5, Kagawad6, Kagawad7, PangkatSecretary } = body;

    const newOfficial = await prisma.barangayofficial.create({
      data: {
        PunongBarangay,
        Kagawad1,
        Kagawad2,
        Kagawad3,
        Kagawad4,
        Kagawad5,
        Kagawad6,
        Kagawad7,
        PangkatSecretary,
      },
    });

    return NextResponse.json(newOfficial, { status: 200 });
  } catch (error) {
    console.error('Error creating barangay official:', error);
    return NextResponse.json({ error: 'Failed to create new barangay official' }, { status: 500 });
  }
}
