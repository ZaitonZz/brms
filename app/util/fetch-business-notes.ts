import { BusinessNote } from "../types/types";


const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export async function fetchBusinessNotes(): Promise<BusinessNote[]> {
    
  const res = await fetch(`${host}/api/reports/business/getBusinessNotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch business note');
  }

  const data = await res.json();
  console.log(data)
  
  return data;
}
