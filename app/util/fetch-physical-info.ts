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
