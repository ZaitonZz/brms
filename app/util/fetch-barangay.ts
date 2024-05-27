import { Barangay } from "../types/types";


const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export async function fetchBarangay(): Promise<Barangay[]> {
  const res = await fetch(`${host}/api/barangay/list/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch barangay');
  }

  const data = await res.json();
  return data;
}

export async function fetchBarangayByNo(barangayNo: number | null) {
  const response = await fetch(`/api/barangay/${barangayNo}`);
  if (!response.ok) {
    throw new Error('Failed to fetch barangay data');
  }
  return response.json();
}

export async function updateBarangay(barangayNo: number | null, data: any) {
  const response = await fetch(`/api/barangay/${barangayNo}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to update barangay data');
  }
  return response.json();
}
