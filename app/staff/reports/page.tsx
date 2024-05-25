import NavBar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import React from 'react'
import Link from 'next/link';

function Report() {
  return (

    <div>
        <NavBar/>
      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh'}}>
        <div className="mx-auto  gap-1 mt-28 ml-[380px] pb-10">
          <nav className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
            <Link href="#" className="font-semibold text-primary">All </Link>
            <Link href="#">BloodType</Link>
            <Link href="#">Establishment</Link>
            <Link href="#">Employed</Link>
            <Link href="#">Enrolled</Link>
            <Link href="#">Gender</Link>
            <Link href="#">Minor</Link>
            <Link href="#">PWD</Link>
            <Link href="#">Voter</Link>
            <Link href="#">Religion</Link>
            <Link href="#">Residence Type</Link>
            <Link href="#">Senior Citizen</Link>
          </nav>
        </div>

    
        <div className='mr-16'>

                <div className='mt-[120px] mb-6 mr-16'>
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

                <div className='mb-4'>
                    <h4>GENDER</h4>
                    <input placeholder="GENDER" type="text" id="search" name="search" className="text-sm w-[150px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                </div>
          </div>


          <div className='mt-[120px] mr-28'>
            <div className='pr-96'>
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

        <Footer/>
    </div>
  )
}

export default Report