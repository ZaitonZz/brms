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
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Citizen = {
  id: string
  FirstName: string
  LastName: string
  MiddleName: String
  Purok: String
  Gender: String
  ResidenceType:String
  SeniorCitizen: String
  Birthdate: string
}

 
export const columns: ColumnDef<Citizen>[] = [
  
    {
    accessorKey: "lastname",
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
    accessorKey: "middlename",
    header: "Middle Name",
  },
  {
    accessorKey: "purok",
    header: "Purok",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "residenceType",
    header: "Residence Type",
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
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "status",
    header: "Marital Status",
  },  
  {
    accessorKey: "SeniorCitizen",
    header: "Senior Citizen",
  },  
  {
    accessorKey: "isEmployed",
    header: "Employed",
  },
  {
    accessorKey: "bloodtype",
    header: "Blood Type",
  },
  {
    accessorKey: "occupation",
    header: "Occupation",
  },
  {
    accessorKey: "pwdType",
    header: "PWD Type",
  },
  {
    accessorKey: "education",
    header: "Education",
  },
  {
    accessorKey: "isEnrolled",
    header: "Enrolled",
  },
  {
    accessorKey: "isDeceased",
    header: "Deceased",
  },
  {
    accessorKey: "religion",
    header: "Religion",
  },
  {
    accessorKey: "cellNo",
    header: "Cellphone Number",
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
  },{
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
              onClick={() => navigator.clipboard.writeText(Citizen.id)}
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