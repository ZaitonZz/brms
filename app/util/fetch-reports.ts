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
    return data;
}


export async function fetchEmployed(barangayNo: number) {
    const res = await fetch(`/api/reports/employment/${barangayNo}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    cache: 'no-store',
});
    if (!res.ok) {
      throw new Error('Failed to fetch employed data');
    }
    const data = await res.json();
    return data;
  }

export async function fetchEstablishments(barangayNo: number) {
    const res = await fetch(`/api/reports/establishment/${barangayNo}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    cache: 'no-store',
});
    if (!res.ok) {
      throw new Error('Failed to fetch employed data');
    }
    const data = await res.json();
    return data;
  }

export async function fetchEnrolled(barangayNo: number) {
    const res = await fetch(`/api/reports/enrolled/${barangayNo}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    cache: 'no-store',
});
    if (!res.ok) {
      throw new Error('Failed to fetch employed data');
    }
    const data = await res.json();
    return data;
  }

export async function fetchGender(barangayNo: number) {
    const res = await fetch(`/api/reports/gender/${barangayNo}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    cache: 'no-store',
});
    if (!res.ok) {
      throw new Error('Failed to fetch employed data');
    }
    const data = await res.json();
    return data;
  }

export async function fetchMinor(barangayNo: number) {
    const res = await fetch(`/api/reports/minorpopulation/${barangayNo}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    cache: 'no-store',
});
    if (!res.ok) {
      throw new Error('Failed to fetch employed data');
    }
    const data = await res.json();
    return data;
  }