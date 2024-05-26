import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: Request) {
    try {
        const notes = await prisma.$queryRaw`CALL GetBusinessNotes();`
        if (notes) {
            return NextResponse.json({
                notes,
            });
        } else {
            return new NextResponse('Business Notes not found', { status: 404 })
        }
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}