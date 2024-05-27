import React from 'react'

function AllContent() {
    return (


        <div className='flex h-screen justify-center '>
                <div className=' ml-28 mr-40'>
                    <div className='mt-[110px] mb-6'>
                        <h4>INPUT AGE</h4>
                        <input placeholder="INPUT AGE" type="text" id="search" name="search" className=" text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>
                    <div className='mb-6'>
                        <h4>BLOOD TYPE</h4>
                        <input placeholder="BLOOD TYPE" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>
                    <div className='mb-6'>
                        <h4>CURRENTLY ENROLLED</h4>
                        <input placeholder="CURRENTLY ENROLLED" type="text" id="search" name="search" className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>
                    <div className='mb-6'>
                        <h4>CURRENTLY EMPLOYED</h4>
                        <input placeholder="CURRENTLY EMPLOYED" type="text" id="search" name="search" className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>

                    <div className='mb-6'>
                        <h4>Gender</h4>
                        <input placeholder="CURRENTLY EMPLOYED" type="text" id="search" name="search" className="text-sm w-[200px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>
                </div>

                <div className='mt-[109px] mr-4 '>
                    <div>
                        <div className='mb-6'>
                            <h4>PWD</h4>
                            <input placeholder="PWD" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                        </div>

                        <div className='mb-6'>
                            <h4>REGISTER VOTER</h4>
                            <input placeholder="REGISTER VOTER" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                        </div>

                        <div className='mb-6'>
                            <h4>RESIDENCE TYPE</h4>
                            <input placeholder="RESIDENCE TYPE" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                        </div>

                        <div className='mb-6'>
                            <h4>SENIOR CITIZEN</h4>
                            <input placeholder="SENIOR CITIZEN" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                        </div>

                        <div className='mb-6'>
                            <h4>RELIGION</h4>
                            <input placeholder="RELIGION" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                        </div>

                        <div className=' pt-6'>
                            <a href='#' className='text-xl font-bold mb-12 bg-[#68a762] text-center inline-block py-2 px-6 rounded'>Print</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default AllContent