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
import { ResidencetypeColumns } from '@/app/components/tables/residencetype-column';
import { ResidencetypeTable } from '@/app/components/tables/residencetype-table';
import { SeniorcitizenColumns } from '@/app/components/tables/seniorcitizen-column';
import { SeniorcitizenTable } from '@/app/components/tables/seniorcitizen-table';
import { VoterColumn } from '@/app/components/tables/voter-column';
import { VoterTable } from '@/app/components/tables/voter-table';
import React, { useState } from 'react'


interface Seniorcitizen{

}

function Seniorcitizen() {
    const [seniortcitizens, setseniorcitizens] = useState<Seniorcitizen[]>([]);

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
      <SeniorcitizenTable data={seniortcitizens} columns={SeniorcitizenColumns}/>
      </div>
    </div>
  )
}

export default Seniorcitizen