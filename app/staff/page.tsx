"use client"
import React, { useEffect, useState } from 'react'
import Footer from '../components/footer'
import NavLinks from './navlinks'
import NavBar from '../components/navbar'
import { PersonalInformation } from '../types/types'
import router from 'next/router'
import { fetchAccessLevel } from '../util/fetch-access-level'
import { fetchBarangay } from '../util/fetch-barangay'
import { isLocalStorageKeyEmptyOrExpired, getWithExpiry } from '../util/session'
import { fetchCitizens } from '../util/fetch-citizen'
import { CitizenDataTable } from '../components/tables/citizen-table'
import { CitizenColumns } from '../components/tables/citizen-column'



export default function StaffPage() {


  const [citizenData, setCitizenData] = useState<PersonalInformation[]>([]);

  useEffect(() => {
    const checkUserAndFetchData = async () => {
      if (isLocalStorageKeyEmptyOrExpired('username')) {
        router.push('http://localhost:3000/');
      } else {
        const username = getWithExpiry('username');
        const accessLevel = await fetchAccessLevel(username);
        if (accessLevel == 2) {
          const fetchedData = await fetchCitizens();
          setCitizenData(fetchedData);
          console.log(fetchedData);
        } else if (accessLevel == 1 || accessLevel == 4 || accessLevel == 3) {
          router.push('http://localhost:3000/');
        }
      }
    };

    checkUserAndFetchData();
  }, [router]);

  return (
    <main>
      <div className="TopBarStaff">
        <NavBar />
      </div>
      <NavLinks />
      <div>
        <CitizenDataTable columns={CitizenColumns} data={citizenData}></CitizenDataTable>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </main>
  );
}




