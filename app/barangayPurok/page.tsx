import NavBar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import React from 'react';
import SearchBar from '../components/searchbar';

function PurokDisp() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800">
        <NavBar />
      </header>
      <main className="flex-grow p-16 ml-16">
        <h1 className="text-3xl mb-4">Purok (Cluster)</h1>
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
}

export default PurokDisp;
