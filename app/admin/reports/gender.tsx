import { GenderColumns } from '@/app/components/tables/gender-columns';
import { GenericDataTable } from '@/app/components/tables/generic-data-table';
import React, { useState } from 'react'


interface Gender{

}

function Gender() {
    const [genders, setgenders] = useState<Gender[]>([]);

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