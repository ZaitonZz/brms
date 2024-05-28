'use client'
import { useState, useEffect } from 'react';

interface BarangayOfficial {
  brgyOffID: number;
  PunongBarangay: string;
  Kagawad1: string;
  Kagawad2: string;
  Kagawad3: string;
  Kagawad4: string;
  Kagawad5: string;
  Kagawad6: string;
  Kagawad7: string;
  PangkatSecretary: string;
}

const BarangayOfficialsPage: React.FC = () => {
  const [barangayOfficials, setBarangayOfficials] = useState<BarangayOfficial[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('app/api/brgyOfficial/get');
        if (response.ok) {
          const data = await response.json();
          setBarangayOfficials(data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Barangay Officials</h1>
      <ul>
        {barangayOfficials.map((official) => (
          <li key={official.brgyOffID}>
            <p>Role: {official.PunongBarangay}</p>
            <p>Kagawad 1: {official.Kagawad1}</p>
            <p>Kagawad 2: {official.Kagawad2}</p>
            <p>Kagawad 3: {official.Kagawad3}</p>
            <p>Kagawad 4: {official.Kagawad4}</p>
            <p>Kagawad 5: {official.Kagawad5}</p>
            <p>Kagawad 6: {official.Kagawad6}</p>
            <p>Kagawad 7: {official.Kagawad7}</p>
            <p>PangkatSecretary: {official.PangkatSecretary}</p>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BarangayOfficialsPage;
