'use client'
import React, { useEffect, useState } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import NavLinks from './navlinks';
import SearchBar from '../components/searchbar';
import { useRouter } from 'next/navigation';
import { fetchAccessLevel } from '../util/fetch-access-level';
import { isLocalStorageKeyEmptyOrExpired, getWithExpiry } from '../util/session';


const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';



const LandingPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const checkUserAndFetchData = async () => {
      if (isLocalStorageKeyEmptyOrExpired('username')) {
        router.push('http://localhost:3000/');
      } else {
        const username = getWithExpiry('username');
        const accessLevel = await fetchAccessLevel(username);
        if (accessLevel === 1) {
        } else if (accessLevel === 2|| accessLevel === 3 || accessLevel === 4){
          router.push('http://localhost:3000/');
        }
      }
    };

    checkUserAndFetchData();
  }, [router]);

  return (
    <main>
      <div className="topBar">
        <NavBar />
      </div>


      <div className="Footer">
        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;
