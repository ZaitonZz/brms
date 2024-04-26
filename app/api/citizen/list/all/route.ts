import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const citizens = await prisma.citizen.findMany();
        return NextResponse.json(citizens);
    } catch {
        return NextResponse.json({}); 
    }
}