import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: Request, context:any) {
    try {
        const { params } = context;
        const barangay = await prisma.$queryRaw`CALL GetPersonalInfo(${params.barangayNo}, NULL);`
        if (barangay) {
            return NextResponse.json({
                barangay,
            });
        } else {
            return new NextResponse('Barangay not found', { status: 404 })
        }
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}