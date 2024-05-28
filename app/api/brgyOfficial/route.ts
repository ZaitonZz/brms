import { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Received body:', body);  // Log the received data

    const {
      barangayNo,
      PunongBarangay,
      Kagawad1,
      Kagawad2,
      Kagawad3,
      Kagawad4,
      Kagawad5,
      Kagawad6,
      Kagawad7,
      PangkatSecretary,
    } = body;

    // Parse barangayNo as an integer
    const barangayNoInt = parseInt(barangayNo, 10);

    const newOfficial = await prisma.barangayofficial.create({
      data: {
        barangayNo: barangayNoInt,
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

    return new Response(JSON.stringify(newOfficial), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating barangay official:', error);
    return new Response(JSON.stringify({ error: 'Failed to create new barangay official' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
