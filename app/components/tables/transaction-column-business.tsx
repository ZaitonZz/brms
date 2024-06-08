// components/transactions-columns.tsx
import { BusinessTransaction} from '@/app/types/types';
import { ColumnDef } from '@tanstack/react-table';


// Define the columns for the transactions data table
export const transactionsColumnsBusiness: ColumnDef<BusinessTransaction>[] = [
  {
    accessorKey: 'businessName',
    header: 'Business Name',
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