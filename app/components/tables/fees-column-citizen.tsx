
// components/fees-columns.tsx
import { ColumnDef } from '@tanstack/react-table';
import { Fee } from '@/app/types/types';

// Define the columns for the fees data table
export const feesCitizenColumns: ColumnDef<Fee>[] = [
  {
    accessorKey: 'feeID',
    header: 'Fee ID',
  },
  {
    accessorKey: 'adminID',
    header: 'Admin ID',
  },
  {
    accessorKey: 'CitizenID',
    header: 'Citizen ID',
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
    accessorKey: 'firstname',
    header: 'First Name',
  },
  {
    accessorKey: 'lastname',
    header: 'Last Name',
  },
];