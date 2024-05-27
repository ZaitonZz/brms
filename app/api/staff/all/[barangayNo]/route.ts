// app/api/staff/[barangayNo]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/prisma'; // Adjust the path to your prisma client setup

export async function GET(req: NextRequest, { params }: { params: { inputBarangayNo: number } }) {
  try {
    const staff = await prisma.account.findMany({
      where: {
        AccessLevel: 2,
        admin: {
          barangayNo: params.inputBarangayNo,
        },
      },
      select: {
        accountID: true,
        Username: true,
        Email: true,
        AccessLevel: true,
        admin: {
            select: {
              personalinfo: {
                select: {
                  firstname: true,
                  lastName: true,
                  address: true,
                },
              },
            },
          },
        }
    });

    return NextResponse.json(staff);
  } catch (error) {
    console.error('Error fetching staff:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
