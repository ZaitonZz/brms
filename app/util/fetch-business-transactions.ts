import { Transaction } from "../types/types";


const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export async function fetchBusinessTransaction(): Promise<Transaction[]> {
    
  const res = await fetch(`${host}/api/transaction/list/business/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  console.log(res)
  if (!res.ok) {
    throw new Error('Failed to fetch business note');
  }

  const data = await res.json();
  
  
  
  return data;
}
