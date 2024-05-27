import { BloodTypeColumns } from "@/app/components/tables/bloodtype-column";
import { BloodTypeTable } from "@/app/components/tables/bloodtype-table";
import React, { useState } from "react";

interface BloodType{

}

function BloodType() {
    const [bloodtypes, setbloodtypes] = useState<BloodType[]>([]);
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
      <BloodTypeTable data={bloodtypes} columns={BloodTypeColumns}/>
      </div>
    </div>
  );
}

export default BloodType;
