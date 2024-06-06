import { BloodType } from '../types/types';

export async function fetchBloodtypes(barangayNo: number): Promise<BloodType[]> {
    const res = await fetch(`/api/reports/bloodtype/${barangayNo}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch blood types');
    }

    const data: BloodType[] = await res.json();
    console.log(data);
    return data;
}