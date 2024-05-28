import { fetchPoliticalInfo, updatePoliticalInfo } from '@/app/util/fetch-political-info';
import React, { useEffect, useState } from 'react';

function EditPoliticalInfo({ barangayNo }: { barangayNo: number | null | undefined }) {
    const bgNo = barangayNo ?? 0;
  const [formData, setFormData] = useState({
    basisOfCreation: '',
    numOfPrecints: '',
    dateOfPlebiscite: '',
    BDCLevel: '',
    BPOCLevel: '',
    BCPCLevel: '',
    VAWLevel: '',
    BADACLevel: '',
  });


  useEffect(() => {
    async function loadPoliticalInfo() {
      const data = await fetchPoliticalInfo(bgNo);
      setFormData(data);
    }
    loadPoliticalInfo();
  }, [barangayNo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updatePoliticalInfo(bgNo, formData);
  };

  return (
    <form onSubmit={handleSubmit} className='flex h-screen justify-center'>
      <div className='ml-28 mr-40'>
        <div className='mt-[110px] mb-6'>
          <h4>Basis of Creation</h4>
          <input
            name="basisOfCreation"
            value={formData.basisOfCreation}
            onChange={handleChange}
            placeholder="Input"
            type="text"
            className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
          />
        </div>
        <div className='mb-6'>
          <h4>Number of Precints</h4>
          <input
            name="numOfPrecints"
            value={formData.numOfPrecints}
            onChange={handleChange}
            placeholder="Input"
            type="text"
            className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
          />
        </div>
        <div className='mb-6'>
          <h4>Date of Plebiscite</h4>
          <input
            name="dateOfPlebiscite"
            value={formData.dateOfPlebiscite}
            onChange={handleChange}
            placeholder="Input"
            type="text"
            className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
          />
        </div>
        <div className='mb-6'>
          <h4>BDC Level</h4>
          <input
            name="BDCLevel"
            value={formData.BDCLevel}
            onChange={handleChange}
            placeholder="Input"
            type="text"
            className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
          />
        </div>
      </div>

      <div className='mt-[109px] mr-4'>
        <div>
          <div className='mb-6'>
            <h4>BPOC Level</h4>
            <input
              name="BPOCLevel"
              value={formData.BPOCLevel}
              onChange={handleChange}
              placeholder="Input"
              type="text"
              className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
            />
          </div>
          <div className='mb-6'>
            <h4>BCPC Level</h4>
            <input
              name="BCPCLevel"
              value={formData.BCPCLevel}
              onChange={handleChange}
              placeholder="Input"
              type="text"
              className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
            />
          </div>
          <div className='mb-6'>
            <h4>VAW Level</h4>
            <input
              name="VAWLevel"
              value={formData.VAWLevel}
              onChange={handleChange}
              placeholder="Input"
              type="text"
              className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
            />
          </div>
          <div className='mb-6'>
            <h4>BADAC Level</h4>
            <input
              name="BADACLevel"
              value={formData.BADACLevel}
              onChange={handleChange}
              placeholder="Input"
              type="text"
              className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]"
            />
          </div>

          <div className='pt-6'>
            <button
              type="submit"
              className='text-xl font-bold mb-12 bg-[#68a762] text-center inline-block py-2 px-6 rounded'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditPoliticalInfo;
