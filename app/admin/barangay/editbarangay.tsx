'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchBarangayByNo, updateBarangay } from '@/app/util/fetch-barangay';
import { BarangayData } from '@/app/types/types';



function EditBarangay({ barangayNo }: { barangayNo: number | null | undefined }) {
    const bgNo = barangayNo ?? 0;
    const [formData, setFormData] = useState<BarangayData>({
        BarangayName: '',
        Address: '',
        Telefax: '',
        Email: '',
        Website: '',
        Icon: '',
        Province: '',
        City_municipality: '',
        Region: '',
    });
    const router = useRouter();

    useEffect(() => {
        const getBarangayData = async () => {
            try {
                const data = await fetchBarangayByNo(bgNo);
                setFormData(data);
            } catch (error) {
                console.error('Failed to fetch barangay data', error);
            }
        };
        getBarangayData();
    }, [barangayNo]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await updateBarangay(bgNo, formData);
            router.push('/success'); // redirect to success page or display a success message
        } catch (error) {
            console.error('Failed to update barangay data', error);
        }
    };

    return (
        <div className="flex h-screen justify-center">
            <form onSubmit={handleSubmit} className="ml-28 mr-40">
                {(['BarangayName', 'Address', 'Telefax', 'Email', 'Website', 'Icon', 'Province', 'City_municipality', 'Region'] as (keyof BarangayData)[]).map((field) => (
                    <div key={field} className="mb-6">
                        <h4>{field.replace('_', ' ')}</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>
                ))}
                <div className="pt-6">
                    <button type="submit" className="text-xl font-bold mb-12 bg-[#68a762] text-center inline-block py-2 px-6 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditBarangay;
