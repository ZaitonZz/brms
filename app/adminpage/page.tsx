import React from 'react'
import { Citizen, columns } from '../landingpage/columns'
import TopBarAdmin from './topbaradmin'
import Footer from '../components/footer' 
import Navbar from './navbar'
import SearchBar from './SearchBar'


async function getCit(): Promise<Citizen[]> {
  // Fetch data from your API here.
  const res= await fetch('https://6620bff93bf790e070b084e4.mockapi.io/Citizen')
  const data= await res.json()
  return data
}

export default async function adminpage() {
  const data = await getCit()

  return (
    <main>
      <div className="TopBarAdmin">
        <TopBarAdmin/>
      </div>
      <Navbar/>
      <SearchBar/>

      <div className="Footer">
        <Footer /> 
      </div>
    </main>
  );
}


