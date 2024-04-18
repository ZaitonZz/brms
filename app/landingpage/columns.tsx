"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 
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
    accessorKey: "FirstName",
    header: "First Name",
  },
  {
    accessorKey: "LastName",
    header: "Last Name",
  },
  {
    accessorKey: "MiddleName",
    header: "Middle Name",
  },
  {
    accessorKey: "Purok",
    header: "Purok",
  },  
  {
    accessorKey: "Gender",
    header: "Gender",
  },{
    accessorKey: "ResidenceType",
    header: "Residence Type",
  },  {
    accessorKey: "SeniorCitizen",
    header: "Senior Citizen",
  },  
  {
    accessorKey: "Birthdate",
    header: "Birthdate",
    cell: ({ row }) => {
        const date = new Date(row.getValue("Birthdate"))
        const formatted = date.toLocaleDateString()
        return [formatted]
    }
  },
]