const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export async function fetchBarangayNo(username: string) : Promise<number | null> {
    const res = await fetch(`${host}/api/Account/barangaynum/${username}`);

    if (!res.ok) {
        throw new Error('Failed to fetch barangay number');
    }

    const data = await res.json();
    return data.barangayNo;
}
