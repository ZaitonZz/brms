import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { username: string } }) {
    try {
        const account = await prisma.account.findFirst({
            where: {
                username: params.username
            }
        });
        const accessLevel = account?.AccessLevel; 
        return NextResponse.json(accessLevel);
    } catch (error) {
        console.log('Error:', error);
        return NextResponse.json({
            status: 404,
            message: "Account not found"
        }); 
    }
}
