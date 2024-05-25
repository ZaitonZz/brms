import React from 'react';
import CertificationTemplate from './CertificationTemplate';
import NavBar from '../components/navbar';
import Footer from '../components/footer';



const CertTempPage: React.FC = () => {
  return (
    <main>
      <div className="TopBarStaff">
        <NavBar/>
  </div>
    <div>
      <CertificationTemplate/>
      
    </div>
    <div className="Footer">
        <Footer />
      </div>
    </main>
  );
};
 export default CertTempPage;