'use client'
import React, { useEffect, useState } from 'react';
import { Citizen, columns } from './columns';
import { DataTable } from './data-table';
import TopBar from '../components/topbar';
import Footer from '../components/footer';
import Navbar from './navbar';
import SearchBar from '../components/searchbar';
import { useRouter } from 'next/navigation';
import { fetchAccessLevel } from '../util/fetch-access-level';
import { isLocalStorageKeyEmptyOrExpired, getWithExpiry } from '../util/session';

const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

async function fetchCitizens(): Promise<Citizen[]> {
  const res = await fetch(`${host}/api/citizen/list/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

const LandingPage: React.FC = () => {
  const [data, setData] = useState<Citizen[]>([]);
  const router = useRouter();

  useEffect(() => {
    const checkUserAndFetchData = async () => {
      if (isLocalStorageKeyEmptyOrExpired('username')) {
        router.push('http://localhost:3000/');
      } else {
        const fetchedData = await fetchCitizens();
        setData(fetchedData);
      }
    };

    checkUserAndFetchData();
  }, [router]);

  return (
    <main>
      <div className="topBar">
        <TopBar />
      </div>

      <div className="w-100% mx-auto py-5 px-20">
        <Navbar />
        <SearchBar />
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;
