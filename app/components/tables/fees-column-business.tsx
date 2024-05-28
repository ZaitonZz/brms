
// components/fees-columns.tsx
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown,MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { businessFee } from '@/app/types/types';
// Define the data structure for the fee
async function onDelete(feeID:number) {
  try {
    const res = await fetch(`https://6620bff93bf790e070b084e4.mockapi.io/Citizen/${feeID}`, {
      method: 'DELETE'
    });
    if (!res.ok) {
      throw new Error(`Error deleting citizen with ID ${feeID}: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}


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
    accessorKey: 'businessID',
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
  {
    id: "actions",
    cell: ({ row }) => {
      const Fee = row.original
 
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
              onClick={() => onDelete(Fee.feeID)}
              >
                Delete Citizen
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
            >View Citizen</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];