import React from 'react'

function Editpoliticalinfo() {
    return (


        <div className='flex h-screen justify-center '>
                <div className=' ml-28 mr-40'>
                    <div className='mt-[110px] mb-6'>
                        <h4>Basis of Creation</h4>
                        <input placeholder="Input" type="text" id="search" name="search" className=" text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>
                    <div className='mb-6'>
                        <h4>Number of Precints</h4>
                        <input placeholder="Inputl" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>
                    <div className='mb-6'>
                        <h4>Date of Plebiscite</h4>
                        <input placeholder="Input" type="text" id="search" name="search" className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>
                    <div className='mb-6'>
                        <h4>BDC Level</h4>
                        <input placeholder="Input" type="text" id="search" name="search" className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>

                </div>

                <div className='mt-[109px] mr-4 '>
                    <div>
                    <div className='mb-6'>
                        <h4>BPOC Level</h4>
                        <input placeholder="Input" type="text" id="search" name="search" className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>
                        <div className='mb-6'>
                            <h4>BCPC Level</h4>
                            <input placeholder="Input" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                        </div>

                        <div className='mb-6'>
                            <h4>VAW Level</h4>
                            <input placeholder="Input" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                        </div>

                        <div className='mb-6'>
                            <h4>BADAC Level</h4>
                            <input placeholder="Input" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                        </div>


                        <div className=' pt-6'>
                            <a href='#' className='text-xl font-bold mb-12 bg-[#68a762] text-center inline-block py-2 px-6 rounded'>Print</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Editpoliticalinfo