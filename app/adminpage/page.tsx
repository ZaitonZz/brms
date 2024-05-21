import React from 'react'
import { Citizen, columns } from '../landingpage/columns'
import Footer from '../components/footer' 
import NavLinks from './navlinks'
import SearchBar from './SearchBar'
import NavBar from '../components/navbar'


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
        <NavBar/>
      </div>
      <NavLinks/>
      <SearchBar/>

      <div className="Footer">
        <Footer /> 
      </div>
    </main>
  );
}


