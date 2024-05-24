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
