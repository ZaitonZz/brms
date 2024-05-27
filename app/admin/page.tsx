// pages/adminpage.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { CitizenColumns } from '../components/tables/citizen-column';
import Footer from '../components/footer';
import NavLinks from './navlinks';
import NavBar from '../components/navbar';
import { useRouter } from 'next/navigation';
import { getWithExpiry, isLocalStorageKeyEmptyOrExpired } from '../util/session';
import { fetchCitizens } from '../util/fetch-citizen';
import { PersonalInformation } from '../types/types';
import { fetchAccessLevel } from '../util/fetch-access-level';
import { CitizenDataTable } from '../components/tables/citizen-table';
import NavLinksFees from './navlinkfees';
import { businessFee } from '../types/types';
import { fetchBusinessFee } from '../util/fetch-business-fees';
import { BusinessFeesTable } from '../components/tables/fees-table-business';
import { feesBusinessColumns } from '../components/tables/fees-column-business';

async function getCit(): Promise<PersonalInformation[]> {
  const res = await fetch('https://6620bff93bf790e070b084e4.mockapi.io/Citizen');
  const data = await res.json();
  return data;
}


export default function AdminPage() {
  const [data, setData] = useState<PersonalInformation[]>([]);
  const [dataBusinessFees, setDataBusinessFees] = useState<businessFee[]>([]);
  const [selectedTab, setSelectedTab] = useState('Admins');
  const [selectedTabFees, setSelectedTabFees] = useState('Admins');
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
          const fetchedBusinessFeesData = await fetchBusinessFee();
          setData(fetchedData);
          setDataBusinessFees(fetchedBusinessFeesData);
        } else if (accessLevel == 1 || accessLevel == 4) {
          router.push('http://localhost:3000/');
        }
      }
    };

    checkUserAndFetchData();
  }, [router]);
  const renderTableFees = () => {
    switch (selectedTabFees) {
      case 'Business':
        return <><BusinessFeesTable columns={feesBusinessColumns} data={dataBusinessFees} /></>;
      case 'Citizen':
        return <div>Citizen</div>;
    }
  } 
  const renderTable = () => {
    switch (selectedTab) {
      case 'Admins':
        return <CitizenDataTable columns={CitizenColumns} data={data} />;
      case 'Transactions':
        return <div>Transactions Table</div>;
      case 'Fees':
        return <><div>Fees Table</div><NavLinksFees onSelect={setSelectedTabFees} /><div>{renderTableFees()}</div></>
        ;
      case 'Complaints':
        return <div>Complaints Table</div>;
      case 'Notes':
        return <div>Notes Table</div>;
      case 'Logs':
        return <div>Logs Table</div>;
      default:
        return null;
    }
  };

  return (
    <main>
      <div>
        <NavBar />
      </div>
      <div className="w-100% mx-auto py-5 px-20">
        <NavLinks onSelect={setSelectedTab} />
        <div>
          {renderTable()}
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </main>
  );
}
