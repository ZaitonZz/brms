import { businessFee } from "../types/types";


const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export async function fetchBusinessFee(): Promise<businessFee[]> {
    
  const res = await fetch(`${host}/api/fee/list/business/all`, {
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
  console.log(data)
  
  return data;
}
