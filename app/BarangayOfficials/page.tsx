import React from 'react';
import NavBar from '../components/navbar';
import BarangayForm from './barangayOfficialForm';
import Footer from '../components/footer';


const BarangayOfficial: React.FC = () => {
  return (
    <main>
    <div className="TopBarAdmin">
    <NavBar/>
  </div>
  <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-6 ml-80">Barangay Officials (Signatory)</h1>
      <BarangayForm />
    </div>
    <div className="Footer">
        <Footer />
      </div>
    </main>
  );
};

export default BarangayOfficial;