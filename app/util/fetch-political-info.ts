
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
  } catch (error) {
    console.error('Error updating political info:', error);
    throw error;
  }
};
