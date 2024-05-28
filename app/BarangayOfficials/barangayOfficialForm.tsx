'use client'
import { useState, useEffect } from 'react';

interface BarangayOfficial {
  role: string;
  name: string;
}

const initialOfficials: BarangayOfficial[] = [
  { role: 'PunongBarangay', name: '' },
  { role: 'Kagawad1', name: '' },
  { role: 'Kagawad2', name: '' },
  { role: 'Kagawad3', name: '' },
  { role: 'Kagawad4', name: '' },
  { role: 'Kagawad5', name: '' },
  { role: 'Kagawad6', name: '' },
  { role: 'Kagawad7', name: '' },
  { role: 'PangkatSecretary', name: '' },
];

const BarangayForm = () => {
  const [barangayNo, setBarangayNo] = useState<string>('');
  const [officials, setOfficials] = useState<BarangayOfficial[]>(initialOfficials);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/brgyOfficial');
      if (response.ok) {
        const data = await response.json();
        setBarangayNo(data.barangayNo);
        setOfficials(initialOfficials.map((official) => ({
          ...official,
          name: data[official.role] || ''
        })));
      }
    };

    fetchData();
  }, []);

  const handleChange = (index: number, value: string) => {
    const updatedOfficials = officials.map((official, i) =>
      i === index ? { ...official, name: value } : official
    );
    setOfficials(updatedOfficials);
  };

  const handleClear = (index: number) => {
    const updatedOfficials = officials.map((official, i) =>
      i === index ? { ...official, name: '' } : official
    );
    setOfficials(updatedOfficials);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = officials.reduce((acc, official) => {
      acc[official.role] = official.name;
      return acc;
    }, {} as Record<string, string>);
    data['barangayNo'] = barangayNo;

    console.log('Sending data:', data);  // Log the data being sent

    try {
      const response = await fetch('/api/brgyOfficial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setNotification('Data submitted successfully.');
        setOfficials(initialOfficials);
        setBarangayNo('');
        window.location.reload(); // Reload the page
      } else {
        const result = await response.json();
        setNotification(result.error || 'Failed to submit data.');
      }
    } catch (error) {
      setNotification('An error occurred. Please try again.');
    }

    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {notification && (
        <div className="mb-4 p-4 text-white bg-blue-500 rounded-md">
          {notification}
        </div>
      )}
      <div className="mb-4 flex items-center">
        <label className="w-1/3 text-gray-700 font-semibold mr-2">
          Barangay Number
        </label>
        <input
          type="text"
          value={barangayNo}
          onChange={(e) => setBarangayNo(e.target.value)}
          className="w-2/3 px-3 py-2 border border-gray-300 rounded-md mr-2"
        />
      </div>
      {officials.map((official, index) => (
        <div key={index} className="mb-4 flex items-center">
          <label className="w-1/3 text-gray-700 font-semibold mr-2">
            {official.role}
          </label>
          <input
            type="text"
            value={official.name}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-2/3 px-3 py-2 border border-gray-300 rounded-md mr-2"
          />
          <button
            type="button"
            onClick={() => handleClear(index)}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md"
          >
            Clear
          </button>
        </div>
      ))}
      <div className="flex justify-between">
        <button type="button" onClick={() => setOfficials(initialOfficials)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Back</button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
      </div>
    </form>
  );
};

export default BarangayForm;
