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
    const formattedStaff = staff.map(account => {
      const personalinfo = Array.isArray(account.admin?.personalinfo) ? account.admin.personalinfo[0] : account.admin?.personalinfo;
      return {
          acountId: account.accountID,
          username: account.Username,
          Email:account.Email,
          AccessLevel: account.AccessLevel,
          firstname: personalinfo?.firstname || null,
          lastName: personalinfo?.lastName || null,
          address: personalinfo?.address || null,
      };
  });

    return NextResponse.json(formattedStaff);
  } catch (error) {
    console.error('Error fetching staff:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
