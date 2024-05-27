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

import { logs } from "@prisma/client"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


 
export const SAlogColumns: ColumnDef<logs>[] = [
  
    {
    accessorKey: "barangay",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Barangay
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ) 
    },
  },
  {
    accessorKey: "admin",
    header: "Admin",
  },
  {
    accessorKey: "history",
    header: "History",
  }, 
  {
    accessorKey: "logdate",
    header: "Date",
    cell: ({ row }) => {
        const date = new Date(row.getValue("logdate"))
        const formatted = date.toLocaleDateString()
        return [formatted]
    }
  },
  {
    accessorKey: "logtime",
    header: "Time",
    cell: ({ row }) => {
      const date = new Date(row.getValue("birthday"));
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formatted = date.toLocaleTimeString();
        return [formatted]
    }
  },
]