import { LogOut } from 'lucide-react'
import React from 'react'
import LogoutButton from './logout'
import Link from 'next/link'

function NavbarCitizen() {
  return (
    <div className='pr-20 space-x-8'>
    <Link href="profile" className='text-[#FFFF] hover:bg-gray-700 hover:text-[#FFFF] hover:font-bold hover:rounded px-2 py-1'>Profile</Link> 
    <Link href="transactions" className='text-[#FFFF] hover:bg-gray-700 hover:text-[#FFFF] hover:font-bold hover:rounded px-2 py-1'>Transaction</Link> 
    <Link href="fees" className='text-[#FFFF] hover:bg-gray-700 hover:text-[#FFFF] hover:font-bold hover:rounded px-2 py-1'>Fees</Link> 
    <Link href="complaints" className='text-[#FFFF] hover:bg-gray-700 hover:text-[#FFFF] hover:font-bold hover:rounded px-2 py-1'>Complaints</Link>
    <Link href="notes" className='text-[#FFFF] hover:bg-gray-700 hover:text-[#FFFF] hover:font-bold hover:rounded px-2 py-1'>Notes</Link> 
    <LogoutButton className='text-[#FFFF] hover:bg-gray-700 hover:text-[#FFFF] hover:font-bold hover:rounded px-2 py-1'/>
    </div>
    
  )
}

export default NavbarCitizen