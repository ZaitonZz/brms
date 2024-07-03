import { GenderColumns } from '@/app/components/tables/gender-columns';
import { GenericDataTable } from '@/app/components/tables/generic-data-table';
import { fetchAccessLevel } from '@/app/util/fetch-access-level';
import { fetchBarangayNoByUserName } from '@/app/util/fetch-barangay';
import { fetchBloodtypes, fetchGender } from '@/app/util/fetch-reports';
import { isLocalStorageKeyEmptyOrExpired, getWithExpiry } from '@/app/util/session';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


interface Gender{

}

function Gender() {
    const [genders, setgenders] = useState<Gender[]>([]);
    const router = useRouter();

    useEffect(() => {
      const checkUserAndFetchData = async () => {
        if (isLocalStorageKeyEmptyOrExpired('username')) {
          router.push('http://localhost:3000/');
        } else {
          const username = getWithExpiry('username');
          const accessLevel = await fetchAccessLevel(username);
          if (accessLevel === 3) {
            const barangayNo = await fetchBarangayNoByUserName(username);
            if (barangayNo) {
              const data = await fetchGender(barangayNo);
              setgenders(data);
            }
          } else if ([1, 2, 4].includes(accessLevel)) {
            router.push('http://localhost:3000/');
          }
        }
      };
  
      checkUserAndFetchData();
    }, [router]);

  return (
    <div className=" mt-32">
      <input
        placeholder="Enter Purok"
        type="text"
        id="search"
        name="search"
        className="w-[700px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762] mr-1"
      />

      <a
        href="#"
        className=" text-base font-bold mb-10 bg-[#68a762] text-center inline-block py-1 px-2 rounded"
      >
        Print
      </a>
        <div className="">
      <GenericDataTable data={genders} columns={GenderColumns}/>
      </div>
    </div>
  )
}

export default Gender