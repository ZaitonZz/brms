// components/transactions-columns.tsx
import { Transaction } from '@/app/types/types';
import { ColumnDef } from '@tanstack/react-table';


// Define the columns for the transactions data table
export const transactionsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'transactionID',
    header: 'Transaction ID',
  },
  {
    accessorKey: 'adminID',
    header: 'Admin ID',
  },

  {
    accessorKey: 'businessID',
    header: 'Business ID',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'time',
    header: 'Time',
  },
  {
    accessorKey: 'purpose',
    header: 'Purpose',
  },

  {
    accessorKey: 'businessName',
    header: 'Business Name',
  },
];