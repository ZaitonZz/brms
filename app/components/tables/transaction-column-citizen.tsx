// components/transactions-columns.tsx
import { CitizenTransaction } from '@/app/types/types';
import { ColumnDef } from '@tanstack/react-table';


// Define the columns for the transactions data table
export const transactionsColumnsCitizen: ColumnDef<CitizenTransaction>[] = [
  {
    accessorKey: 'firstname',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'purpose',
    header: 'Purpose',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'time',
    header: 'Time',
  },
];