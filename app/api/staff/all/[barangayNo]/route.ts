import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: { params: { barangayNo: string } }) {
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
