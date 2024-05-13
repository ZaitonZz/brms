
'use client'
import React, { useState, FormEvent } from 'react';

interface PurokFormProps {
  existingPurok?: {
    purokID?: number;
    PurokName: string;
    BarangayNo: number;
    PurokLeader: string;
    population: number;
  };
}

const PurokForm: React.FC<PurokFormProps> = ({ existingPurok }) => {
  const [purokName, setPurokName] = useState(existingPurok?.PurokName || '');
  const [barangayNo, setBarangayNo] = useState(existingPurok?.BarangayNo || 0);
  const [purokLeader, setPurokLeader] = useState(existingPurok?.PurokLeader || '');
  const [population, setPopulation] = useState(existingPurok?.population || 0);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const purokData = {
      PurokName: purokName,
      BarangayNo: Number(barangayNo),
      PurokLeader: purokLeader,
      population: Number(population)
    };

    const url = `/api/puroks/${existingPurok?.purokID || ''}`;
    const method = existingPurok?.purokID ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(purokData),
      });
      if (response.ok) {
        alert('Purok saved successfully!');
      } else {
        alert('Failed to save purok.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit purok data');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm rounded-lg">
        <h2 className="text-lg font-semibold mb-6">{existingPurok ? 'Update Purok' : 'Add New Purok'}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="purokName">
            Purok Name
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="purokName"
            value={purokName}
            onChange={(e) => setPurokName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="barangayNo">
            Barangay Number
          </label>
          <input
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="barangayNo"
            value={barangayNo}
            onChange={(e) => setBarangayNo(Number(e.target.value))}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="purokLeader">
            Purok Leader
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="purokLeader"
            value={purokLeader}
            onChange={(e) => setPurokLeader(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="population">
            Population
          </label>
          <input
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="population"
            value={population}
            onChange={(e) => setPopulation(Number(e.target.value))}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            {existingPurok ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PurokForm;
