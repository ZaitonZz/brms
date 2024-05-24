import { LogOut } from 'lucide-react'
import React from 'react'
import LogoutButton from './logout'

function NavbarCitizen() {
  return (
    <div className='pr-20 space-x-8'>
    <a href="profile" className='text-[#FFFF] hover:bg-gray-700 hover:text-[#FFFF] hover:font-bold hover:rounded px-2 py-1'>Profile</a> 
    <a href="transactions" className='text-[#FFFF] hover:bg-gray-700 hover:text-[#FFFF] hover:font-bold hover:rounded px-2 py-1'>Transaction</a> 
    <a href="fees" className='text-[#FFFF] hover:bg-gray-700 hover:text-[#FFFF] hover:font-bold hover:rounded px-2 py-1'>Fees</a> 
    <a href="complaints" className='text-[#FFFF] hover:bg-gray-700 hover:text-[#FFFF] hover:font-bold hover:rounded px-2 py-1'>Complaints</a> 
    <a href="notes" className='text-[#FFFF] hover:bg-gray-700 hover:text-[#FFFF] hover:font-bold hover:rounded px-2 py-1'>Notes</a> 
    <LogoutButton className='text-[#FFFF] hover:bg-gray-700 hover:text-[#FFFF] hover:font-bold hover:rounded px-2 py-1'/>
    </div>
    
  )
}

export default NavbarCitizen