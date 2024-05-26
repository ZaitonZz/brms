import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: Request) {
    try {
        const notes = await prisma.$queryRaw`CALL GetCitizenNotes();`
        if (notes) {
            return NextResponse.json({
                notes,
            });
        } else {
            return new NextResponse('Citizen Notes not found', { status: 404 })
        }
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}