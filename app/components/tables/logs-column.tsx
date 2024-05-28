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


export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

async function onDelete(logsID:number) {
  try {
    const res = await fetch(`https://6620bff93bf790e070b084e4.mockapi.io/Citizen/${logsID}`, {
      method: 'DELETE'
    });
    if (!res.ok) {
      throw new Error(`Error deleting citizen with ID ${logsID}: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const LogsColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const logs = row.original
 
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
              onClick={() => onDelete(logs.logsID)}
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
