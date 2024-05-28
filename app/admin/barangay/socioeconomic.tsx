'use client'
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { fetchSocioEconomicInfo, postSocioEconomicInfo } from '@/app/util/fetch-socioeconomic-info';

interface SocioEconomicFormData {
  brgyHall: string;
  MultiPurposeHall: string;
  Library: string;
  brgyHealthstation: string;
  dayCareCenter: string;
  satelliteMarket: string;
  sportsCenter: string;
  materialsRecoveryFacility: string;
  wasteManagementCollectSystem: string;
  rainWaterCollectionSystem: string;
  plaza: string;
  waterSupplySystem: string;
  PlantingMaterialsDistributionSystem: string;
  FarmProduceStation: string;
}

const initialFormData: SocioEconomicFormData = {
  brgyHall: '',
  MultiPurposeHall: '',
  Library: '',
  brgyHealthstation: '',
  dayCareCenter: '',
  satelliteMarket: '',
  sportsCenter: '',
  materialsRecoveryFacility: '',
  wasteManagementCollectSystem: '',
  rainWaterCollectionSystem: '',
  plaza: '',
  waterSupplySystem: '',
  PlantingMaterialsDistributionSystem: '',
  FarmProduceStation: '',
};

function Editsocioeconomic({ barangayNo }: { barangayNo: number | null | undefined }) {
    const bgNo = barangayNo ?? 0;
    const [formData, setFormData] = useState<SocioEconomicFormData>(initialFormData);

    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            if (barangayNo) {
                const data = await fetchSocioEconomicInfo(bgNo);
                if (data) {
                    setFormData(data);
                }
            }
        }
        fetchData();
    }, [barangayNo]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await postSocioEconomicInfo(bgNo, formData);
        if (res.ok) {
            router.push('/success-page');
        } else {
            console.error('Failed to update socio-economic information');
        }
    };

    return (
        <div className='flex h-screen justify-center'>
            <form className='flex' onSubmit={handleSubmit}>
                <div className='ml-28 mr-40 mt-[110px]'>
                    {['brgyHall', 'MultiPurposeHall', 'Library', 'brgyHealthstation', 'dayCareCenter', 'satelliteMarket'].map((field) => (
                        <div className=' mb-6' key={field}>
                            <h4>{field.replace(/([A-Z])/g, ' $1').trim()}</h4>
                            <input 
                                placeholder="Input" 
                                type="text" 
                                name={field} 
                                value={formData[field as keyof SocioEconomicFormData]} 
                                onChange={handleChange} 
                                className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" 
                            />
                        </div>
                    ))}
                </div>
                <div className='mt-[109px] mr-4'>
                    {['sportsCenter', 'materialsRecoveryFacility', 'wasteManagementCollectSystem', 'rainWaterCollectionSystem', 'plaza', 'waterSupplySystem', 'PlantingMaterialsDistributionSystem', 'FarmProduceStation'].map((field) => (
                        <div className='mb-6' key={field}>
                            <h4>{field.replace(/([A-Z])/g, ' $1').trim()}</h4>
                            <input 
                                placeholder="Input" 
                                type="text" 
                                name={field} 
                                value={formData[field as keyof SocioEconomicFormData]} 
                                onChange={handleChange} 
                                className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" 
                            />
                        </div>
                    ))}
                    <div className='pt-6'>
                        <button type="submit" className='text-xl font-bold mb-12 bg-[#68a762] text-center inline-block py-2 px-6 rounded'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Editsocioeconomic;
