import React, { useEffect } from 'react'
import Footer from '../components/footer' 
import NavLinks from './navlinks'
import NavBar from '../components/navbar'
import { PersonalInformation } from '../types/types'
import router from 'next/router'
import { fetchAccessLevel } from '../util/fetch-access-level'
import { fetchBarangay } from '../util/fetch-barangay'
import { isLocalStorageKeyEmptyOrExpired, getWithExpiry } from '../util/session'


async function getCit(): Promise<PersonalInformation[]> {
  // Fetch data from your API here.
  const res= await fetch('https://6620bff93bf790e070b084e4.mockapi.io/Citizen')
  const data= await res.json()
  return data
}

export default async function StaffPage() {
  useEffect(() => {
    const checkUserAndFetchData = async () => {
      if (isLocalStorageKeyEmptyOrExpired('username')) {
        router.push('http://localhost:3000/');
      } else {
        const username = getWithExpiry('username');
        const accessLevel = await fetchAccessLevel(username);
        if (accessLevel == 2) {
          const fetchedData = await fetchBarangay();
          setData(fetchedData);
        } else if(accessLevel == 1 || accessLevel == 4 || accessLevel == 3){
          router.push('http://localhost:3000/');
        }
      }
    };

    checkUserAndFetchData();
  }, [router]);

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


function setData(fetchedData: import("../types/types").Barangay[]) {
  throw new Error('Function not implemented.')
}

