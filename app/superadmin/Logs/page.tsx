'use client'
import React, { useEffect, useState } from 'react'

import NavBar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import SearchBar from '@/app/components/searchbar';
import { useRouter } from 'next/navigation'
import { getWithExpiry, isLocalStorageKeyEmptyOrExpired } from '@/app/util/session'
import { fetchBarangay } from '@/app/util/fetch-barangay'
import { logs } from '@/app/types/types'
import { fetchAccessLevel } from '@/app/util/fetch-access-level'
import { SAlogColumns } from '@/app/components/tables/logs-column-superadmin'
import { SAlogDataTable } from '@/app/components/tables/logs-table-superadmin'


export default function superadminlogspage() {

    const [data, setData] = useState<logs[]>([]);
    const router = useRouter();

  

    return (
      <main>
        <div>
          <NavBar />
        </div>
        <div className="w-100% mx-auto py-5 px-20">

        <SearchBar />
        <logs-column-superadminpage columns={SAlogColumns} data={data} />
        </div>
  
        <div className="Footer">
          <Footer />
        </div>
      </main>
    );
  }
  
  
  