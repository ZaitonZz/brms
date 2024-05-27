import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';

export async function GET() {
    try {
        const notes = await prisma.note.findMany({
            where: {
                BusinessID: {
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
                business: {
                    select: {
                        businessName: true,
                    },
                },
            },
        });
        const formattedNotes = notes.map(note => ({
            ...note,
            businessName: note.business ? note.business.businessName : null,
        }));
        
        return NextResponse.json(formattedNotes);
    } catch (error) {
        console.error('Error fetching business notes:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
