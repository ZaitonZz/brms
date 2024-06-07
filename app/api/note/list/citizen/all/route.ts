import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const notes = await prisma.note.findMany({
            where: {
                citizenID: {
                    not: null,
                },
            },
            select: {
                noteID: true,
                AdminID: true,
                citizenID: true,
                BusinessID: true,
                Time: true,
                Note: true,
                Date: true,
                citizen: {
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
        const formattedNotes = notes.map(note => {
            const personalinfo = Array.isArray(note.citizen?.personalinfo) ? note.citizen.personalinfo[0] : note.citizen?.personalinfo;
            return {
                noteID: note.noteID,
                AdminID: note.AdminID,
                citizenID: note.citizenID,
                Date: note.Date,
                Time: note.Time,
                Note: note.Note,
                firstname: personalinfo?.firstname || null,
                lastName: personalinfo?.lastName || null,
            };
        });
        return NextResponse.json(formattedNotes);
    } catch (error) {
        console.error('Error fetching citizen notes:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
