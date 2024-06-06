import { PersonalInformation } from "../types/types";


const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export async function fetchCitizens(): Promise<PersonalInformation[]> {
  const res = await fetch(`${host}/api/citizen/list/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch citizens');
  }

  const data = await res.json();
  return data;
}


export async function deleteCitizen(citizenID:number) {
  try {
    const res = await fetch(`https://6620bff93bf790e070b084e4.mockapi.io/Citizen/${citizenID}`, {
      method: 'DELETE'
    });
    if (!res.ok) {
      throw new Error(`Error deleting citizen with ID ${citizenID}: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

import { citizensFee } from "../types/types";

export async function fetchCitizensFees(): Promise<citizensFee[]> {
    
  const res = await fetch(`${host}/api/fee/list/citizen/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch business fee');
  }

  const data = await res.json();

  
  return data;
}


import { CitizenNote } from "../types/types";


export async function fetchCitizenNotes(): Promise<CitizenNote[]> {
    
  const res = await fetch(`${host}/api/reports/citizen/getCitizenNotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch citizen note');
  }

  const data = await res.json();
  console.log(data)
  
  return data;
}
