import React from 'react'
import Footer from '../components/footer' 
import NavLinks from './navlinks'
import NavBar from '../components/navbar'
import { PersonalInformation } from '../types/types'


async function getCit(): Promise<PersonalInformation[]> {
  // Fetch data from your API here.
  const res= await fetch('https://6620bff93bf790e070b084e4.mockapi.io/Citizen')
  const data= await res.json()
  return data
}

export default async function StaffPage() {
  const data = await getCit()

  return (
    <main>
      <div className="TopBarStaff">
        <NavBar/>
      </div>
      <NavLinks/>

      <div className="Footer">
        <Footer /> 
      </div>
    </main>
  );
}


