import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { username: string } }) {
    try {
        const account = await prisma.account.findFirst({
            where: {
                Username: params.username
            }
        });
        const accesslevel = account?.AccessLevel;
        return NextResponse.json( accesslevel );
    } catch (error) {
        console.log('what', error);
        return NextResponse.json({
            status: 404
        }); 
    }
}
