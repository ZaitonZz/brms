import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request, context:any) {
    try {
        const { params } = context;
        const admin = await prisma.$queryRaw`CALL GetPersonalInfo(NULL, ${params.AdminID});`
        if (admin) {
            return NextResponse.json({
                admin,
            });
        } else {
            return new NextResponse('Admin not found', { status: 404 })
        }
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}