import { NextResponse } from "next/server";
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const barangay = await prisma.barangay.findMany({
            where:  { NOT: [{ City_municipality: null }] }
        })
        return NextResponse.json(barangay);
    } catch (error) {
        console.error('Error fetching citizens:', error);
        return NextResponse.json({
            status: 404
        }); 
    }
}