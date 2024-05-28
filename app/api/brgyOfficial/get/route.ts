import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const officials = await prisma.barangayofficial.findMany();
    return new Response(JSON.stringify(officials), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching barangay officials:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch barangay officials' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
