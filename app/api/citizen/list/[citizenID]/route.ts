import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request, context:any) {
    try {
        const { params } = context;
        const citizen = await prisma.$queryRaw`CALL GetPersonalInfo(${params.citizenID}, NULL);`
        if (citizen) {
            return NextResponse.json({
                citizen,
            });
        } else {
            return new NextResponse('Citizen not found', { status: 404 })
        }
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}