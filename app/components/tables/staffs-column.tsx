// components/staffs-column.tsx
"use client"
import { Staff } from '@/app/types/types';
import { ColumnDef } from '@tanstack/react-table';

// Define the data structure for the staff

// Define the columns for the staff data table
export const staffsColumns: ColumnDef<Staff>[] = [
  
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'Email',
    header: 'Email',
  },
  {
    accessorKey: 'AccessLevel',
    header: 'Access Level',
  },
  {
    accessorKey: 'firstname',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
];
