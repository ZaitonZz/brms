import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const complaints = await prisma.complaints.findMany({
            select: {
                complaintID: true,
                adminID: true,
                citizenID_complainant: true,
                citizenID_complainee: true,
                date: true,
                time: true,
                for: true,
                actions: true,
                citizen_complaints_citizenID_complainantTocitizen: {
                    select: {
                        personalinfo: {
                            select: {
                                firstname: true,
                                lastName: true,
                            },
                        },
                    },
                },
                citizen_complaints_citizenID_complaineeTocitizen: {
                    select: {
                        personalinfo: {
                            select: {
                                firstname: true,
                                lastName: true,
                            },
                        },
                    },
                },
            },
        });

        const formattedComplaints = complaints.map(complaint => {
            const complainant = Array.isArray(complaint.citizen_complaints_citizenID_complainantTocitizen?.personalinfo)
                ? complaint.citizen_complaints_citizenID_complainantTocitizen.personalinfo[0]
                : complaint.citizen_complaints_citizenID_complainantTocitizen?.personalinfo;
            const complainee = Array.isArray(complaint.citizen_complaints_citizenID_complaineeTocitizen?.personalinfo)
                ? complaint.citizen_complaints_citizenID_complaineeTocitizen.personalinfo[0]
                : complaint.citizen_complaints_citizenID_complaineeTocitizen?.personalinfo;
            return {
                complaintID: complaint.complaintID,
                adminID: complaint.adminID,
                citizenID_complainant: complaint.citizenID_complainant,
                citizenID_complainee: complaint.citizenID_complainee,
                date: complaint.date,
                time: complaint.time,
                for: complaint.for,
                actions: complaint.actions,
                complainantFirstname: complainant?.firstname || null,
                complainantLastName: complainant?.lastName || null,
                complaineeFirstname: complainee?.firstname || null,
                complaineeLastName: complainee?.lastName || null,
            };
        });

        return NextResponse.json(formattedComplaints);
    } catch (error) {
        console.error('Error fetching complaints with names:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
