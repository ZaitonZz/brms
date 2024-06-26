import NavBar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import React from 'react'

function Note() {
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
                    <h1 className='text-4xl font-bold mb-12 bg-[#68a762] text-center inline-block py-2 px-4 rounded'>Notes</h1>
                    <div className='mt-[-20px]'>
                        <input placeholder="Search 10 Recent Notes" type="text" id="search" name="search" className="w-[500px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762]" />
                    </div>
                </div>
            </div>
            
        </div>

       
        <Footer/>
    </div>
     
  )
}

export default Note