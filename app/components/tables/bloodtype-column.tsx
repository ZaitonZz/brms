"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BloodType } from "@/app/types/types"
 
export const BloodTypeColumns: ColumnDef<BloodType>[] = [
  {
    accessorKey: "PurokName",
    header: 'Purok Name'
  },
  {
    accessorKey: "A_Positive",
    header: "A+",
  },
  {
    accessorKey: "A_Negative",
    header: "A-",
  },
  {
    accessorKey: "B_Positive",
    header: "B+",
  },
  {
    accessorKey: "B_Negative",
    header: "B-",
  },
  {
    accessorKey: "AB_Positive",
    header: "AB+",
  },
  {
    accessorKey: "AB_Negative",
    header: "AB-",
  },  
  {
    accessorKey: "O_Positive",
    header: "O+",
  },
  {
    accessorKey: "O_Negative",
    header: "O-",
  },
  {
    accessorKey: "Unknown",
    header: "Unknown",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const bloodType = row.original
 
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
              onClick={() => navigator.clipboard.writeText(bloodType.PurokName)}
            >
              Copy Purok Name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
