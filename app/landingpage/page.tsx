import React from 'react'
import { Citizen, columns } from "./columns"
import { DataTable } from "./data-table"
import TopBar from '../components/topbar'

async function getCit(): Promise<Citizen[]> {
  // Fetch data from your API here.
  const res= await fetch('https://6620bff93bf790e070b084e4.mockapi.io/Citizen')
  const data= await res.json()
  return data
}

export default async function landingpage() {
  const data = await getCit()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}


