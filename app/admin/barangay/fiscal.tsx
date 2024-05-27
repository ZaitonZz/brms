import React from 'react'

function Editfiscal() {
    return (


        <div className='flex h-screen justify-center '>
                <div className=' ml-28 mr-40'>
                    <div className='mt-[110px] mb-6'>
                        <h4>Internal Revenue</h4>
                        <input placeholder="Input" type="text" id="search" name="search" className=" text-sm w-[180px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>
                    <div className='mb-6'>
                        <h4>Donation</h4>
                        <input placeholder="Input" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>
                    <div className='mb-6'>
                        <h4>Share from Nation Wealth</h4>
                        <input placeholder="Input" type="text" id="search" name="search" className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>
                    <div className='mb-6'>
                        <h4>External Subsidy</h4>
                        <input placeholder="Input" type="text" id="search" name="search" className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>

                    <div className='mb-6'>
                        <h4>General Fund</h4>
                        <input placeholder="Input" type="text" id="search" name="search" className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>
                </div>

                <div className='mt-[109px] mr-4 '>
                    <div>
                        <div className='mb-6'>
                            <h4>SK Fund</h4>
                            <input placeholder="Input" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                        </div>

                        <div className='mb-6'>
                            <h4>RPT Share</h4>
                            <input placeholder="Input" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                        </div>

                        <div className='mb-6'>
                            <h4>Fees and Charges</h4>
                            <input placeholder="Input" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                        </div>

                        <div className='mb-6'>
                            <h4>Other</h4>
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

export default Editfiscal