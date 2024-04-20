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
    accessorKey: "firstname",
    header: "First Name",
  },
  {
    accessorKey: "middlename",
    header: "Middle Name",
  },
  {
    accessorKey: "lastname",
    header: "Last Name",
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
  },
]