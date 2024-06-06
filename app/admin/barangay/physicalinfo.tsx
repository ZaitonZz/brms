'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { fetchPhysicalInfo, updatePhysicalInfo } from '@/app/util/fetch-barangay';

const initialFormData = {
    totalLandArea: '',
    barangayLocation: '',
    LandClassification: '',
    economicSource: '',
};

function EditPhysicalInfo({ barangayNo }: { barangayNo: number | null | undefined }) {
    const bgNo = barangayNo ?? 0;
    const [formData, setFormData] = useState(initialFormData);
    const router = useRouter();

    useEffect(() => {
        if (barangayNo) {
            fetchPhysicalInfo(bgNo)
                .then((data) => setFormData(data))
                .catch((err) => console.error('Error fetching physical information:', err));
        }
    }, [barangayNo]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (barangayNo) {
            try {
                const res = await updatePhysicalInfo(bgNo, formData);
                alert('Physical information updated successfully');
            } catch (error) {
                console.error('Error updating physical information:', error);
                alert('An error occurred while updating physical information');
            }
        }
    };

    return (
        <div className='flex h-screen justify-center'>
            <form onSubmit={handleSubmit} className='ml-28 mr-40'>
                <div className='mt-[110px] mb-6'>
                    <h4>Total Land Area</h4>
                    <input 
                        placeholder="Input" 
                        type="text" 
                        name="totalLandArea"
                        value={formData.totalLandArea} 
                        onChange={handleChange}
                        className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" 
                    />
                </div>
                <div className='mb-6'>
                    <h4>Barangay Location</h4>
                    <input 
                        placeholder="Input" 
                        type="text" 
                        name="barangayLocation"
                        value={formData.barangayLocation} 
                        onChange={handleChange}
                        className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" 
                    />
                </div>
                <div className='mb-6'>
                    <h4>Land Classification</h4>
                    <input 
                        placeholder="Input" 
                        type="text" 
                        name="LandClassification"
                        value={formData.LandClassification} 
                        onChange={handleChange}
                        className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" 
                    />
                </div>
                <div className='mb-6'>
                    <h4>Economic Source</h4>
                    <input 
                        placeholder="Input" 
                        type="text" 
                        name="economicSource"
                        value={formData.economicSource} 
                        onChange={handleChange}
                        className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" 
                    />
                </div>
                <div className='pt-6'>
                    <button type="submit" className='text-xl font-bold mb-12 bg-[#68a762] text-center inline-block py-2 px-6 rounded'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditPhysicalInfo;
