'use client'
import React, { useEffect, useState } from 'react'

import Footer from '@/app/components/footer'
import SearchBar from '@/app/components/searchbar'
import { useRouter } from 'next/navigation'
import { getWithExpiry, isLocalStorageKeyEmptyOrExpired } from '@/app/util/session'
import { BusinessFeesTable } from '@/app/components/tables/fees-table-business'
import { feesBusinessColumns } from '@/app/components/tables/fees-column-business'
import NavBar from '@/app/components/navbar'
import { businessFee } from '@/app/types/types'
import { fetchAccessLevel } from '@/app/util/fetch-access-level'
import { fetchBusinessFees } from '@/app/util/fetch-business'

function Fee() {
   
    const [data, setData] = useState<businessFee[]>([]);
    const router = useRouter();

    useEffect(() => {
      const checkUserAndFetchData = async () => {
        if (isLocalStorageKeyEmptyOrExpired('username')) {
          router.push('http://localhost:3000/');
        } else {
          const username = getWithExpiry('username');
          const accessLevel = await fetchAccessLevel(username);
          if (accessLevel == 3) {
            const fetchedData = await fetchBusinessFees();
            console.log(typeof fetchedData)
            setData(fetchedData);
          } else if(accessLevel == 4 || accessLevel == 1 || accessLevel == 2){
            router.push('http://localhost:3000/');
          }
        }
      };
  
      checkUserAndFetchData();
    }, [router]);
  
  
 
  return (
    <div>
        <NavBar/>
        
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh'}}>
            <div className="py-10 flex">

                <div className='mr-24 mt-12'>
                <img src={`http://localhost:3000/img/lOGO.jpg`} alt="Logo" className='size-36'/>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-center mt-3">Citizen Name</h1>
                    </div>
                </div>
                

            <div className='mr-60'>
                    <h1 className='text-4xl font-bold mb-12 bg-[#68a762] text-center inline-block py-2 px-4 rounded'>Fees</h1>
                    <div className='mt-[-20px]'>
                        <input placeholder="Search 10 Recent Fees" type="text" id="search" name="search" className="w-[500px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                        <BusinessFeesTable columns={feesBusinessColumns} data={data} />
                    </div>
                </div>
            </div>
            
        </div>

       
    



        <Footer/>
    </div>
  )
}

export default Fee