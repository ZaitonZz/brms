// pages/adminpage.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import NavLinks from './navlinks';
import NavBar from '../components/navbar';
import { useRouter } from 'next/navigation';
import { getWithExpiry, isLocalStorageKeyEmptyOrExpired } from '../util/session';
import { BusinessNote, CitizenNote, citizensFee, PersonalInformation, Staff, BusinessTransaction, CitizenTransaction } from '../types/types';
import { fetchAccessLevel } from '../util/fetch-access-level';
import NavLinksFees from './navlinkfees';
import { businessFee } from '../types/types';
import { feesBusinessColumns } from '../components/tables/fees-column-business';
import { fetchStaffs } from '../util/fetch-staffs';
import { staffsColumns } from '../components/tables/staffs-column';
import { GenericDataTable } from '../components/tables/generic-data-table';
import { feesCitizenColumns } from '../components/tables/fees-column-citizen';
import { BusinessNotesColumns } from '../components/tables/notes-column-business';
import { CitizenNotesColumns } from '../components/tables/notes-column-citizen';
import { transactionsColumnsBusiness } from '../components/tables/transaction-column-business';
import { fetchBarangayNoByUserName } from '../util/fetch-barangay';
import { fetchBusinessFees, fetchBusinessNotes, fetchBusinessTransactions } from '../util/fetch-business';
import { fetchCitizenNotes, fetchCitizensFees, fetchCitizenTransactions } from '../util/fetch-citizen';
import Transaction from '../citizen/transactions/page';
import { transactionsColumnsCitizen } from '../components/tables/transaction-column-citizen';

async function getCit(): Promise<PersonalInformation[]> {
  const res = await fetch('https://6620bff93bf790e070b084e4.mockapi.io/Citizen');
  const data = await res.json();
  return data;
}


export default function AdminPage() {
  const [dataBusinessFees, setDataBusinessFees] = useState<businessFee[]>([]);
  const [selectedTab, setSelectedTab] = useState('Staffs');
  const [selectedTabFees, setSelectedTabFees] = useState('Citizen');
  const [selectedTabNotes, setSelectedTabNotes] = useState('Citizen');
  const [selectedTabTransaction, setSelectedTabTransaction] = useState('Citizen');
  const [staffData, setStaffData] = useState<Staff[]>([]);
  const [dataCitizenFees, setDataCitizenFees] = useState<citizensFee[]>([]);
  const [dataCitizenNotes, setDataCitizenNotes] = useState<CitizenNote[]>([]);
  const [dataBusinessNotes, setDataBusinessNotes] = useState<BusinessNote[]>([]);
  const [dataBusinessTransaction, setDataBusinessTransaction] = useState<BusinessTransaction[]>([]);
  const [dataCitizenTransaction, setDataCitizenTransaction] = useState<CitizenTransaction[]>([]);
  const router = useRouter();

  useEffect(() => {
    const checkUserAndFetchData = async () => {
      if (isLocalStorageKeyEmptyOrExpired('username')) {
        router.push('http://localhost:3000/');
      } else {
        const username = getWithExpiry('username');
        const accessLevel = await fetchAccessLevel(username);
        if (accessLevel == 3) {
          const fetchedBusinessFeesData = await fetchBusinessFees();
          const barangayNo = await fetchBarangayNoByUserName(username);
          const fetchedStaffData = await fetchStaffs(barangayNo);
          const fetchedBusinessNotesData = await fetchBusinessNotes();
          const fetchedCitizenNotesData = await fetchCitizenNotes();
          const fetchedBusinessTransaction = await fetchBusinessTransactions();
          const fetchedCitizenFeesData = await fetchCitizensFees();
          const fetchedCitizenTransaction = await fetchCitizenTransactions();
          setDataCitizenTransaction(fetchedCitizenTransaction);
          setStaffData(fetchedStaffData);
          setDataBusinessNotes(fetchedBusinessNotesData);
          setDataCitizenNotes(fetchedCitizenNotesData);
          setDataCitizenFees(fetchedCitizenFeesData);
          setDataBusinessFees(fetchedBusinessFeesData);
          setDataBusinessTransaction(fetchedBusinessTransaction);
        } else if (accessLevel == 1 || accessLevel == 4 || accessLevel == 2) {
          router.push('http://localhost:3000/');
        }
      }
    };

    checkUserAndFetchData();
  }, [router]);
  const renderTableFees = () => {
    switch (selectedTabFees) {
      case 'Business':
        return <><GenericDataTable columns={feesBusinessColumns} data={dataBusinessFees} /></>;
      case 'Citizen':
        return <><GenericDataTable columns={feesCitizenColumns} data={dataCitizenFees}/></>;
    }
  } 

  const renderTableNotes = () => {
    switch (selectedTabNotes) {
      case 'Business':
        return <GenericDataTable columns={BusinessNotesColumns} data={dataBusinessNotes} />;
      case 'Citizen':
        return <GenericDataTable columns={CitizenNotesColumns} data={dataCitizenNotes}/>;
    }
  } 
  const renderTableTransactions = () => {
    switch (selectedTabTransaction) {
      case 'Business':
        return <><GenericDataTable columns={transactionsColumnsBusiness} data={dataBusinessTransaction}/> </>;
      case 'Citizen':
        return <><GenericDataTable columns={transactionsColumnsCitizen} data={dataCitizenTransaction} /></>;
    }
  } 

  const renderTable = () => {
    switch (selectedTab) {
      case 'Staffs':
        return <GenericDataTable columns={staffsColumns} data={staffData} />;
      case 'Transactions':
        return <><NavLinksFees selectedTab={selectedTabTransaction} onSelect={setSelectedTabTransaction} /><div>{renderTableTransactions()}</div></>;
      case 'Fees':
        return <><NavLinksFees selectedTab={selectedTabFees} onSelect={setSelectedTabFees} /><div>{renderTableFees()}</div></>
        ;
      case 'Complaints':
        return <div>Complaints Table</div>;
      case 'Notes':
        return <><NavLinksFees selectedTab={selectedTabNotes} onSelect={setSelectedTabNotes} /><div>{renderTableNotes()}</div></>;
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
        <NavLinks selectedTab={selectedTab} onSelect={setSelectedTab} />
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
