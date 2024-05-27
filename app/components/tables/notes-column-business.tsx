"use client"

import { Note } from "@/app/types/types";
import { ColumnDef } from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ArrowUpDown,MoreHorizontal } from "lucide-react"

async function onDelete(noteID:number) {
  try {
    const res = await fetch(`https://6620bff93bf790e070b084e4.mockapi.io/Barangay/${noteID}`, {
      method: 'DELETE'
    });
    if (!res.ok) {
      throw new Error(`Error deleting barangay with ID ${noteID}: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}


export const notesColumns: ColumnDef<Note>[] = [
    {
      accessorKey: 'Time',
      header: 'Time',
    },
    {
      accessorKey: 'Note',
      header: 'Note',
    },
    {
      accessorKey: 'Date',
      header: 'Date',
    },
    {
      accessorKey: 'businessName',
      header: 'Business Name',
    },
    {

      id: "actions",
      cell: ({ row }) => {
        const Note = row.original
   
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => onDelete(Note.noteID)}
                >
                  Delete Baranggay
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Citizen</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ];
