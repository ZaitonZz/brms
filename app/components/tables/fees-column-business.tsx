
// components/fees-columns.tsx
import { ColumnDef } from '@tanstack/react-table';
import { businessFee } from '@/app/types/types';
// Define the data structure for the fee


// Define the columns for the fees data table
export const feesBusinessColumns: ColumnDef<businessFee>[] = [
  {
    accessorKey: 'feeID',
    header: 'Fee ID',
  },
  {
    accessorKey: 'adminID',
    header: 'Admin ID',
  },

  {
    accessorKey: 'BusinessID',
    header: 'Business ID',
  },
  {
    accessorKey: 'Date',
    header: 'Date',
  },
  {
    accessorKey: 'Time',
    header: 'Time',
  },
  {
    accessorKey: 'amountPaid',
    header: 'Amount Paid',
  },
  {
    accessorKey: 'feetype',
    header: 'Fee Type',
  },

  {
    accessorKey: 'businessName',
    header: 'Business Name',
  },
];