'use client'
import React, { useEffect, useState } from 'react'
import { CitizenColumns } from '../components/citizen-column'
import Footer from '../components/footer'
import NavLinks from './navlinks'
import SearchBar from './SearchBar'
import NavBar from '../components/navbar'
import { useRouter } from 'next/navigation'
import { getWithExpiry, isLocalStorageKeyEmptyOrExpired } from '../util/session'
import { fetchCitizens } from '../util/fetch-citizen'
import { PersonalInformation } from '../types/types'
import { fetchAccessLevel } from '../util/fetch-access-level'
import { CitizenDataTable } from '../components/citizen-table'


async function getCit(): Promise<PersonalInformation[]> {
  // Fetch data from your API here.
  const res = await fetch('https://6620bff93bf790e070b084e4.mockapi.io/Citizen')
  const data = await res.json()
  return data
}

export default function adminpage() {


  const [data, setData] = useState<PersonalInformation[]>([]);
  const router = useRouter();

  useEffect(() => {
    const checkUserAndFetchData = async () => {
      if (isLocalStorageKeyEmptyOrExpired('username')) {
        router.push('http://localhost:3000/');
      } else {
        const username = getWithExpiry('username');
        const accessLevel = await fetchAccessLevel(username);
        if (accessLevel == 2 || accessLevel == 3) {
          const fetchedData = await fetchCitizens();
          setData(fetchedData);
        } else if(accessLevel == 1 || accessLevel == 4){
          router.push('http://localhost:3000/');
        }
      }
    };

    checkUserAndFetchData();
  }, [router]);


  return (
    <main>
      <div>
        <NavBar />
      </div>
      <div className="w-100% mx-auto py-5 px-20">
        <NavLinks />
        <SearchBar />
        <div>
          <CitizenDataTable columns={CitizenColumns} data={data} />
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </main>
  );
}


