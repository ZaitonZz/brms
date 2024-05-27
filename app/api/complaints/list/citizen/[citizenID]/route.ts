import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET(request: Request, context:any) {
    try {
        const { params } = context;
        const complaints = await prisma.$queryRaw`CALL GetComplaintsByCitizen(${params.citizenID});`
        if (complaints) {
            return NextResponse.json({
                complaints,
            });
        } else {
            return new NextResponse('Citizen not found', { status: 404 })
        }
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}