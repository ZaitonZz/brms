"use client"
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ChevronDown, PlusCircle } from 'lucide-react';
import LogoutButton from './logout';

function NavbarAdmin() {
  
  return (
    <div className="flex items-center text-white">
      <div className="relative mr-12">
        {/* Toggle Link for Barangay Admin */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <a className="cursor-pointer hover:text-gray-200 flex">
              Barangay Admin(Captain)<ChevronDown></ChevronDown>
            </a>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className='cursor-pointer'>View Profile</DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>Change Password</DropdownMenuItem>
            <DropdownMenuItem>
              <LogoutButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <a href="http://localhost:3000/admin" className="mr-12 hover:text-gray-200">Home</a>
      <a href="/admin/reports" className="mr-12 hover:text-gray-200">Report</a>
      <a href="/admin/barangay" className="mr-12 hover:text-gray-200">Barangay</a>



      <div className="relative inline">
         {/* Toggle Link for Add */}
         <DropdownMenu>
          <DropdownMenuTrigger>
            <a className="cursor-pointer hover:text-gray-200 flex items-center">
              Create <PlusCircle size={16} className="ml-2" />
            </a>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => window.location.href = '../AddCitizenAdmin'} className="flex cursor-pointer">
              Citizen <PlusCircle size={16} className="ml-2" />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.location.href = '../AddAdmin'} className="flex cursor-pointer">
              Admin <PlusCircle size={16} className="ml-2" />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.location.href = '../AddPurokAdmin'} className="flex cursor-pointer">
              Purok <PlusCircle size={16} className="ml-2" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default NavbarAdmin;