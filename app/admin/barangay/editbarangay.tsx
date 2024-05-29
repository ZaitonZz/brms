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
            alert('barangay information updated successfully');
        } catch (error) {
            alert(`Failed to update barangay data, ${error}`);
        }
    };

    return (
        <div className="flex h-screen justify-center">
            <form onSubmit={handleSubmit} className="flex mt-28">
                <div className='ml-28 mr-40 '>
                    <div className="mb-6">
                        <h4>Barangay Name</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="BarangayName"
                            value={formData.BarangayName}
                            onChange={handleChange}
                            className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>

                    <div className="mb-6">
                        <h4>Address</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="Address"
                            value={formData.Address}
                            onChange={handleChange}
                            className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>

                    <div className="mb-6">
                        <h4>Telefax</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="Telefax"
                            value={formData.Telefax}
                            onChange={handleChange}
                            className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>

                    <div className="mb-6">
                        <h4>Email</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="Email"
                            value={formData.Email}
                            onChange={handleChange}
                            className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>

                    <div className="mb-6">
                        <h4>Website</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="Website"
                            value={formData.Website}
                            onChange={handleChange}
                            className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>
                </div>

                <div>
                    <div className="mb-6">
                        <h4>Icon</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="Icon"
                            value={formData.Icon}
                            onChange={handleChange}
                            className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>

                    <div className="mb-6">
                        <h4>Province</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="Province"
                            value={formData.Province}
                            onChange={handleChange}
                            className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>

                    <div className="mb-6">
                        <h4>City/Municipality</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="City_municipality"
                            value={formData.City_municipality}
                            onChange={handleChange}
                            className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>

                    <div className="mb-6">
                        <h4>Region</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="Region"
                            value={formData.Region}
                            onChange={handleChange}
                            className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>

                    <div className="pt-6">
                        <button type="submit" className="text-xl font-bold mb-12 bg-[#68a762] text-center inline-block py-2 px-6 rounded">
                            Submit
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default EditBarangay;
