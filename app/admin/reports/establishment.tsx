import { EstablishmentColumns } from '@/app/components/tables/establishment-column'
import { GenericDataTable } from '@/app/components/tables/generic-data-table';
import React, { useState } from 'react'


interface Establishment{

}

function Establishment() {
    const [establishments, setestablishments] = useState<Establishment[]>([]);

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
      <GenericDataTable data={establishments} columns={EstablishmentColumns}/>
      </div>
    </div>
  )
}

export default Establishment