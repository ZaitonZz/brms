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
  const response = await fetch(`/api/profiling/barangayinfo/${barangayNo}`);
  if (!response.ok) {
    throw new Error('Failed to fetch barangay data');
  }
  return response.json();
}

export async function updateBarangay(barangayNo: number | null, data: any) {
  const response = await fetch(`/api/profiling/barangayinfo/${barangayNo}`, {
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

export async function fetchBarangayNoByUserName(username: string) : Promise<number | null> {
    const res = await fetch(`${host}/api/Account/barangaynum/${username}`);

    if (!res.ok) {
        throw new Error('Failed to fetch barangay number');
    }

    const data = await res.json();
    return data.barangayNo;
}


export const fetchFiscalInfo = async (barangayNo: number) => {
  const response = await fetch(`/api/profiling/fiscal/${barangayNo}`);
  if (!response.ok) {
      throw new Error('Failed to fetch fiscal information');
  }
  return response.json();
};

export const updateFiscalInfo = async (barangayNo: number, data: any) => {
  const response = await fetch(`/api/profiling/fiscal/${barangayNo}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });

  if (!response.ok) {
      throw new Error('Failed to update fiscal information');
  }

  return response.json();
};



export const fetchPoliticalInfo = async (barangayNo: number) => {
  try {
    const response = await fetch(`/api/profiling/political/${barangayNo}`);
    if (!response.ok) {
        throw new Error('Failed to fetch political information');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching political info:', error);
    throw error;
  }
};

export const updatePoliticalInfo = async (barangayNo: number, formData: any) => {
  try {
    const response = await fetch(`/api/profiling/political/${barangayNo}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });


    if (!response.ok) {
        throw new Error('Failed to update political information');
    }
    return response;
  } catch (error) {
    console.error('Error updating political info:', error);
    throw error;
  }
};

export const fetchPhysicalInfo = async (barangayNo: number) => {
  const response = await fetch(`/api/profiling/physical/${barangayNo}`);
  if (!response.ok) {
      throw new Error('Failed to fetch physical information');
  }
  return response.json();
};


export const updatePhysicalInfo = async (barangayNo: number, data: any) => {
  const response = await fetch(`/api/profiling/physical/${barangayNo}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });

  if (!response.ok) {
      throw new Error('Failed to update physical information');
  }

  return response.json();
};


export async function fetchSocioEconomicInfo(barangayNo: number) {
  const res = await fetch(`/api/profiling/social/${barangayNo}`);
  if (!res.ok) {
      throw new Error('Failed to fetch socio-economic information');
  }
  return res.json();
}

export async function updateSocioEconomicInfo(barangayNo: number, formData: any) {
  const res = await fetch(`/api/profiling/social/${barangayNo}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, barangayNo: barangayNo }),
  });
  if (!res.ok) {
      throw new Error('Failed to update socio-economic information');
  }
  return res;
}
