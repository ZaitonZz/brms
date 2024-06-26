import { businessFee } from "../types/types";


const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export async function fetchBusinessFees(): Promise<businessFee[]> {
    
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

import { BusinessTransaction } from "../types/types";

export async function fetchBusinessTransactions(): Promise<BusinessTransaction[]> {
    
  const res = await fetch(`${host}/api/transaction/list/business/all`, {
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
  return data;
}

import { BusinessNote } from "../types/types";

export async function fetchBusinessNotes(): Promise<BusinessNote[]> {
    const res = await fetch(`${host}/api/note/list/business/all`, {
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
  return data;
}

