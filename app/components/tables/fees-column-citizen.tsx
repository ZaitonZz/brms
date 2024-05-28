
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
import { citizensFee} from '@/app/types/types';


async function onDelete(citizenID:number) {
  try {
    const res = await fetch(`https://6620bff93bf790e070b084e4.mockapi.io/Citizen/${citizenID}`, {
      method: 'DELETE'
    });
    if (!res.ok) {
      throw new Error(`Error deleting citizen with ID ${citizenID}: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
// Define the columns for the fees data table
export const feesCitizenColumns: ColumnDef<citizensFee>[] = [
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
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const citizensfee = row.original
 
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
              onClick={() => onDelete(citizensfee.feeID)}
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