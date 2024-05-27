import { Staff } from "../types/types";

const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export async function fetchStaffs(barangayNo: number|null) : Promise<Staff[]> {
    const res = await fetch(`${host}/api/staff/all/${barangayNo}`);
    if (!res.ok) throw new Error('Failed to fetch staff');
    const data = await res.json();
    console.log(data)
    return data;
  }