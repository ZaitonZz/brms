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
import ResidenceType from "@/app/staff/reports/residencetype"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


 
export const ResidencetypeColumns: ColumnDef<ResidenceType>[] = [
  
    {
    accessorKey: "purokname",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         Purok Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "Owned",
    header: "Owned",
  },

  {
    accessorKey: "Least",
    header: "Least",
  },

  {
    accessorKey: "Rented",
    header: "Rented",
  },
 
  {
    accessorKey: "Boarder",
    header: "Boarder",
  },

  {
    accessorKey: "Otherwise",
    header: "Otherwise",
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
              onClick={() => navigator.clipboard.writeText("hello world")}
            >
              Copy citizen ID
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