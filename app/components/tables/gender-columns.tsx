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
import { PersonalInformation } from "../../types/types"
import Gender from "@/app/staff/reports/gender"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

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
 
export const GenderColumns: ColumnDef<Gender>[] = [
  
    {
    accessorKey: "PurokName",
    header: "Purok Name",
  },
  {
    accessorKey: "Male",
    header: "Male",
  },

  {
    accessorKey: "Female",
    header: "Female",
  },

  {
    accessorKey: "Other",
    header: "Other",
  },
 
  {
    id: "actions",
    cell: ({ row }) => {
      const gender = row.original
 
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
              //onClick={() => onDelete(gender.genderID}
              >
                Delete Citizen
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