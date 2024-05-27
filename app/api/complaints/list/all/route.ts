import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: Request) {
    try {
        const complaints = await prisma.$queryRaw`CALL GetComplaintsWithNames();`
        if (complaints) {
            return NextResponse.json({
                complaints,
            });
        } else {
            return new NextResponse('Complaints not found', { status: 404 })
        }
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}