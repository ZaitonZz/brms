export async function fetchSocioEconomicInfo(barangayNo: number) {
    const res = await fetch(`/api/profiling/social/${barangayNo}`);
    if (!res.ok) {
        throw new Error('Failed to fetch socio-economic information');
    }
    return res.json();
}

export async function postSocioEconomicInfo(barangayNo: number, formData: any) {
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
