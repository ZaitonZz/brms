import React from 'react'
import { Citizen, columns } from "./columns"
import { DataTable } from "./data-table"
import TopBar from '../components/topbar'
import Footer from '../components/footer' 
import Navbar from './navbar'
import SearchBar from '../components/searchbar'

const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

async function getCit(): Promise<Citizen[]> {

  // Fetch data from your API here.
  const res= await fetch(`${host}/api/citizen/list/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const data= await res.json()
  return data
}

export default async function landingpage() {
  const data = await getCit()

  return (
    <main>
      <div className="topBar">
        <TopBar/>
      </div>
      
      <div className="w-100% mx-auto py-5 px-20">
      <Navbar /> 
      <SearchBar /> 
      <div>
      <DataTable  columns={columns} data={data}/>
      </div>
      </div>

      <div className="Footer">
        <Footer /> 
      </div>
    </main>
  );
}


