import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const citizens = await prisma.personalinfo.findMany({
            where: { AdminID: null}
        })
        return NextResponse.json(citizens);
    } catch (error) {
        console.error('Error fetching citizens:', error);
        return NextResponse.json({
            status: 404
        }); 
    }
}