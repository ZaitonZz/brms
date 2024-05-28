
'use client'
import { useState, useEffect } from 'react';

interface BarangayOfficial {
  brgyOffID: number;
  barangayNo: number;
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

const BarangayForm = () => {
  const [official, setOfficial] = useState<BarangayOfficial | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/brgyOfficial/get');
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const latestEntry = data[data.length - 1]; // Get the last entry
            setOfficial(latestEntry);
          } else {
            setNotification('No data found.');
          }
        } else {
          setNotification('Failed to fetch data.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setNotification('An error occurred. Please try again.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {notification && (
        <div className="mb-4 p-4 text-white bg-blue-500 rounded-md">
          {notification}
        </div>
      )}
      {official && (
        <>
          <h2 className="text-xl font-semibold mb-4">Barangay Officials</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Punong Barangay</th>
                <th className="border border-gray-300 px-4 py-2">Kagawad 1</th>
                <th className="border border-gray-300 px-4 py-2">Kagawad 2</th>
                <th className="border border-gray-300 px-4 py-2">Kagawad 3</th>
                <th className="border border-gray-300 px-4 py-2">Kagawad 4</th>
                <th className="border border-gray-300 px-4 py-2">Kagawad 5</th>
                <th className="border border-gray-300 px-4 py-2">Kagawad 6</th>
                <th className="border border-gray-300 px-4 py-2">Kagawad 7</th>
                <th className="border border-gray-300 px-4 py-2">Pangkat Secretary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">{official.PunongBarangay}</td>
                <td className="border border-gray-300 px-4 py-2">{official.Kagawad1}</td>
                <td className="border border-gray-300 px-4 py-2">{official.Kagawad2}</td>
                <td className="border border-gray-300 px-4 py-2">{official.Kagawad3}</td>
                <td className="border border-gray-300 px-4 py-2">{official.Kagawad4}</td>
                <td className="border border-gray-300 px-4 py-2">{official.Kagawad5}</td>
                <td className="border border-gray-300 px-4 py-2">{official.Kagawad6}</td>
                <td className="border border-gray-300 px-4 py-2">{official.Kagawad7}</td>
                <td className="border border-gray-300 px-4 py-2">{official.PangkatSecretary}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default BarangayForm;
