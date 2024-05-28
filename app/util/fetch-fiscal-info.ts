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
