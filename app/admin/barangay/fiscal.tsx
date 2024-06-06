'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { fetchFiscalInfo, updateFiscalInfo } from '@/app/util/fetch-barangay';

const initialFormData = {
    internalRevenue: '',
    donation: '',
    shareFromNationalWealth: '',
    externalSubsidy: '',
    generalFund: '',
    skFund: '',
    RPTShare: '',
    feesAndCharges: '',
    other: '',
};

function EditFiscal({ barangayNo }: { barangayNo: number | null | undefined }) {
    const bgNo = barangayNo ?? 0;
    const [formData, setFormData] = useState(initialFormData);
    const router = useRouter();

    useEffect(() => {
        if (bgNo) {
            fetchFiscalInfo(bgNo)
                .then((data) => setFormData(data))
                .catch((err) => console.error('Error fetching fiscal information:', err));
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
                const res = await updateFiscalInfo(bgNo, formData);
                alert('Fiscal information updated successfully');
            } catch (error) {
                console.error('Error updating fiscal information:', error);
                alert('An error occurred while updating fiscal information');
            }
        }
    };

    return (
        <div className='flex h-screen justify-center'>
            <form onSubmit={handleSubmit} className='mt-28 flex'>
                <div className='ml-28 mr-40'>
                    <div className='mb-6'>
                        <h4>Internal Revenue</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="internalRevenue"
                            value={formData.internalRevenue}
                            onChange={handleChange}
                            className="text-sm w-[180px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>
                    <div className='mb-6'>
                        <h4>Donation</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="donation"
                            value={formData.donation}
                            onChange={handleChange}
                            className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>
                    <div className='mb-6'>
                        <h4>Share from National Wealth</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="shareFromNationalWealth"
                            value={formData.shareFromNationalWealth}
                            onChange={handleChange}
                            className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>
                    <div className='mb-6'>
                        <h4>External Subsidy</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="externalSubsidy"
                            value={formData.externalSubsidy}
                            onChange={handleChange}
                            className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>
                    <div className='mb-6'>
                        <h4>General Fund</h4>
                        <input
                            placeholder="Input"
                            type="text"
                            name="generalFund"
                            value={formData.generalFund}
                            onChange={handleChange}
                            className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                        />
                    </div>
                </div>

                <div>
                    <div className='mr-4'>
                        <div className='mb-6'>
                            <h4>SK Fund</h4>
                            <input
                                placeholder="Input"
                                type="text"
                                name="skFund"
                                value={formData.skFund}
                                onChange={handleChange}
                                className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                            />
                        </div>
                        <div className='mb-6'>
                            <h4>RPT Share</h4>
                            <input
                                placeholder="Input"
                                type="text"
                                name="RPTShare"
                                value={formData.RPTShare}
                                onChange={handleChange}
                                className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                            />
                        </div>
                        <div className='mb-6'>
                            <h4>Fees and Charges</h4>
                            <input
                                placeholder="Input"
                                type="text"
                                name="feesAndCharges"
                                value={formData.feesAndCharges}
                                onChange={handleChange}
                                className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                            />
                        </div>
                        <div className='mb-6'>
                            <h4>Other</h4>
                            <input
                                placeholder="Input"
                                type="text"
                                name="other"
                                value={formData.other}
                                onChange={handleChange}
                                className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
                            />
                        </div>
                        <div className='pt-6'>
                            <button type="submit" className='text-xl font-bold mb-12 bg-[#68a762] text-center inline-block py-2 px-6 rounded'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default EditFiscal;