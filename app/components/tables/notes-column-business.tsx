"use client"

import { Note } from "@/app/types/types";
import { ColumnDef } from "@tanstack/react-table"


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
  ];
