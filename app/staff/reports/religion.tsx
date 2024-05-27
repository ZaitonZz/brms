import { EmployedColumns } from '@/app/components/tables/employed-column';
import { EnrolledColumns } from '@/app/components/tables/enrolled-column';
import { EnrolledTable } from '@/app/components/tables/enrolled-table';
import { EstablishmentColumns } from '@/app/components/tables/establishment-column'
import { EstablishmentTable } from '@/app/components/tables/establishment-table'
import { GenderColumns } from '@/app/components/tables/gender-columns';
import { GenderTable } from '@/app/components/tables/gender-table';
import { MinorColumns } from '@/app/components/tables/minor-column';
import { MinorTable } from '@/app/components/tables/minor-table';
import { PwdColumns } from '@/app/components/tables/pwd-column';
import { PwdTable } from '@/app/components/tables/pwd-table';
import { ReligionColumns } from '@/app/components/tables/religion-column';
import { ReligionTable } from '@/app/components/tables/religion-table';
import { ResidencetypeColumns } from '@/app/components/tables/residencetype-column';
import { ResidencetypeTable } from '@/app/components/tables/residencetype-table';
import { SeniorcitizenColumns } from '@/app/components/tables/seniorcitizen-column';
import { SeniorcitizenTable } from '@/app/components/tables/seniorcitizen-table';
import { VoterColumn } from '@/app/components/tables/voter-column';
import { VoterTable } from '@/app/components/tables/voter-table';
import React, { useState } from 'react'


interface Religion{

}

function Religion() {
    const [religions, setreligions] = useState<Religion[]>([]);

  return (
    <div className='mt-20'>

    <div className='flex'>
    <div className=' mr-32'>
    <h1 className='mb-2 font-bold'>A<span className='font-normal'> = Roman Catholic</span></h1>
    <h1 className='mb-2 font-bold'>B<span className='font-normal'> = Islam</span></h1>
    <h1 className='mb-2 font-bold'>C<span className='font-normal'> = Protestant</span></h1>
    <h1 className='mb-2 font-bold'>D<span className='font-normal'> = Iglesia ni Cristo</span></h1>
    <h1 className='mb-2 font-bold'>E<span className='font-normal'> = Jesus Miracle Crusade International Ministry</span></h1>
    <h1 className='mb-2 font-bold'>F<span className='font-normal'> = Members Church of God International</span></h1>
    <h1 className='mb-2 font-bold'>G<span className='font-normal'> = Most Holy Church of God in Christ Jesus</span></h1>
    </div>
    <div className=''>
    <h1 className='mb-2 font-bold'>H<span className='font-normal'> = Philippine Independent Church</span></h1>
    <h1 className='mb-2 font-bold'>I<span className='font-normal'> = Orthodoxy</span></h1>
    <h1 className='mb-2 font-bold'>J<span className='font-normal'> = Judaism</span></h1>
    <h1 className='mb-2 font-bold'>K<span className='font-normal'> = Hinduism</span></h1>
    <h1 className='mb-2 font-bold'>L<span className='font-normal'> = Atheism</span></h1>
    <h1 className='mb-2 font-bold'>M<span className='font-normal'> = Others</span></h1>
    </div>
    </div>

   

  

    <div className="mt-4">
       
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
      <ReligionTable data={religions} columns={ReligionColumns}/>
      </div>
    </div>
    </div>
  )
}

export default Religion