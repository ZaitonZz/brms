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

 
export const CitizenColumns: ColumnDef<PersonalInformation>[] = [
  
    {
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "firstname",
    header: "First Name",
  },
  {
    accessorKey: "middleName",
    header: "Middle Name",
  },
  {
    accessorKey: "purok",
    header: "Purok",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "residenceType",
    header: "Residence Type",
  },
  {
    accessorKey: "isSeniorCitizen",
    header: "Senior Citizen",
  },  
  {
    accessorKey: "residencyDate",
    header: "Residency Date",
    cell: ({ row }) => {
        const date = new Date(row.getValue("residencyDate"))
        const formatted = date.toLocaleDateString()
        return [formatted]
    }
  },
  {
    accessorKey: "birthday",
    header: "Birthdate",
    cell: ({ row }) => {
        const date = new Date(row.getValue("birthday"))
        const formatted = date.toLocaleDateString()
        return [formatted]
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const Citizen = row.original
 
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
              onClick={() => onDelete(Citizen.citizenID)}
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
]