import { citizensFee } from "../types/types";


const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export async function fetchCitizensFee(): Promise<citizensFee[]> {
    
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
