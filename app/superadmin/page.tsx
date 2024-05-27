'use client'
import React, { useEffect, useState } from 'react'

import Footer from '../components/footer'
import SearchBar from '../components/searchbar'
import { useRouter } from 'next/navigation'
import { getWithExpiry, isLocalStorageKeyEmptyOrExpired } from '../util/session'
import { fetchBarangay } from '../util/fetch-barangay'
import { Barangay } from '../types/types'
import { fetchAccessLevel } from '../util/fetch-access-level'
import { BarangayDataTable } from '../components/tables/barangay-table'
import NavBar from '../components/navbar'
import { BarangayColumns } from '../components/tables/barangay-column'


export default function superadminpage() {

    const [data, setData] = useState<Barangay[]>([]);
    const router = useRouter();

    useEffect(() => {
      const checkUserAndFetchData = async () => {
        if (isLocalStorageKeyEmptyOrExpired('username')) {
          router.push('http://localhost:3000/');
        } else {
          const username = getWithExpiry('username');
          const accessLevel = await fetchAccessLevel(username);
          if (accessLevel == 4) {
            const fetchedData = await fetchBarangay();
            setData(fetchedData);
          } else if(accessLevel == 1 || accessLevel == 2 || accessLevel == 3){
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

        <SearchBar />
        <BarangayDataTable columns={BarangayColumns} data={data} />
        </div>
  
        <div className="Footer">
          <Footer />
        </div>
      </main>
    );
  }
  
  
  