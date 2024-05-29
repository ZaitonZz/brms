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
import { BusinessNote, CitizenNote, citizensFee, PersonalInformation, Staff, Transaction } from '../types/types';
import { fetchAccessLevel } from '../util/fetch-access-level';
import { CitizenDataTable } from '../components/tables/citizen-table';
import NavLinksFees from './navlinkfees';
import { businessFee } from '../types/types';
import { fetchBusinessFee } from '../util/fetch-business-fees';
import { BusinessFeesTable } from '../components/tables/fees-table-business';
import { feesBusinessColumns } from '../components/tables/fees-column-business';
import { fetchStaffs } from '../util/fetch-staffs';
import { fetchBarangayNo } from '../util/fetch-barangay-no';
import { StaffsTable } from '../components/tables/staffs-table';
import { staffsColumns } from '../components/tables/staffs-column';
import { fetchCitizensFee } from '../util/fetch-citizen-fees';
import { CitizensFeesTable } from '../components/tables/fees-table-citizen';
import { feesCitizenColumns } from '../components/tables/fees-column-citizen';
import BusinessNotesTable from '../components/tables/notes-table-business';
import CitizenNotesTable from '../components/tables/notes-table-citizen';
import { BusinessNotesColumns } from '../components/tables/notes-column-business';
import { CitizenNotesColumns } from '../components/tables/notes-column-citizen';
import { fetchBusinessNotes } from '../util/fetch-business-notes';
import { fetchCitizenNotes } from '../util/fetch-citizen-notes';
import { fetchBusinessTransaction } from '../util/fetch-business-transactions';
import { TransactionsTable } from '../components/tables/transaction-table';
import { transactionsColumns } from '../components/tables/transaction-column';

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
  const [selectedTabTransaction, setSelectedTabTransaction] = useState('Business');
  const [staffData, setStaffData] = useState<Staff[]>([]);
  const [dataCitizenFees, setDataCitizenFees] = useState<citizensFee[]>([]);
  const [dataCitizenNotes, setDataCitizenNotes] = useState<CitizenNote[]>([]);
  const [dataBusinessNotes, setDataBusinessNotes] = useState<BusinessNote[]>([]);
  const [dataBusinessTransaction, setDataBusinessTransaction] = useState<Transaction[]>([]);
  const router = useRouter();

  useEffect(() => {
    const checkUserAndFetchData = async () => {
      if (isLocalStorageKeyEmptyOrExpired('username')) {
        router.push('http://localhost:3000/');
      } else {
        const username = getWithExpiry('username');
        const accessLevel = await fetchAccessLevel(username);
        if (accessLevel == 3) {
          const fetchedBusinessFeesData = await fetchBusinessFee();
          const barangayNo = await fetchBarangayNo(username);
          const fetchedStaffData = await fetchStaffs(barangayNo);
          const fetchedBusinessNotesData = await fetchBusinessNotes();
          const fetchedCitizenNotesData = await fetchCitizenNotes();
          const fetchedBusinessTransaction = await fetchBusinessTransaction();
          const fetchedCitizenFeesData = await fetchCitizensFee();
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
        return <><BusinessFeesTable columns={feesBusinessColumns} data={dataBusinessFees} /></>;
      case 'Citizen':
        return <><CitizensFeesTable columns={feesCitizenColumns} data={dataCitizenFees}/></>;
    }
  } 

  const renderTableNotes = () => {
    switch (selectedTabNotes) {
      case 'Business':
        return <BusinessNotesTable columns={BusinessNotesColumns} data={dataBusinessNotes} />;
      case 'Citizen':
        return <CitizenNotesTable columns={CitizenNotesColumns} data={dataCitizenNotes}/>;
    }
  } 
  const renderTableTransactions = () => {
    switch (selectedTabTransaction) {
      case 'Business':
        return <><TransactionsTable columns={transactionsColumns} data={dataBusinessTransaction}/> </>;
      case 'Citizen':
        return <div>Citizen</div>;
    }
  } 

  const renderTable = () => {
    switch (selectedTab) {
      case 'Staffs':
        return <StaffsTable columns={staffsColumns} data={staffData} />;
      case 'Transactions':
        return <><NavLinksFees onSelect={setSelectedTabTransaction} /><div>{renderTableTransactions()}</div></>;
      case 'Fees':
        return <><div>Fees Table</div><NavLinksFees onSelect={setSelectedTabFees} /><div>{renderTableFees()}</div></>
        ;
      case 'Complaints':
        return <div>Complaints Table</div>;
      case 'Notes':
        return <><NavLinksFees onSelect={setSelectedTabNotes} /><div>{renderTableNotes()}</div></>;
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
