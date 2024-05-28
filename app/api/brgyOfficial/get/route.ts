import { NextResponse } from "next/server";
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const barangayOfficials = await prisma.barangayofficial.findMany();
        return NextResponse.json(barangayOfficials);
    } catch (error) {
        console.error('Error fetching barangay officials:', error);
        return NextResponse.json({ status: 404 });
    }
}
