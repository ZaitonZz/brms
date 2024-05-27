"use client"
 
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
import { Barangay } from "../../types/types"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
async function onDelete(barangayNo:number) {
  try {
    const res = await fetch(`https://6620bff93bf790e070b084e4.mockapi.io/Barangay/${barangayNo}`, {
      method: 'DELETE'
    });
    if (!res.ok) {
      throw new Error(`Error deleting barangay with ID ${barangayNo}: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

 
export const BarangayColumns: ColumnDef<Barangay>[] = [
  
    {
    accessorKey: "City_municipality",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          City
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "BarangayName",
    header: "Barangay Name",
  },
  {
    accessorKey: "Address",
    header: "Address",
  },
  {

    id: "actions",
    cell: ({ row }) => {
      const Barangay = row.original
 
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
              onClick={() => onDelete(Barangay.barangayNo)}
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
]