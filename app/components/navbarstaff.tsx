"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React, { useState } from 'react';
import LogoutButton from './logout';
import { ChevronDown, PlusCircle } from 'lucide-react';

function NavbarStaff() {

  return (
    <div className="flex items-center text-white">
      <div className="relative mr-12">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <a className="cursor-pointer flex">
              Barangay Staff(Staff) <ChevronDown></ChevronDown>
            </a>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => window.location.href = '/staff/profile'} className="cursor-pointer">
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.location.href = '/staff/changepassword'} className="cursor-pointer">
              Change Password
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <LogoutButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <a href="/staff" className="mr-12 hover:text-gray-200">Home</a>
      <a href="/" className="mr-12 hover:text-gray-200">Report</a>
      <a href="/" className="mr-12 hover:text-gray-200">Barangay Case</a>

      <div className="relative inline mr-12">
      <DropdownMenu>
          <DropdownMenuTrigger>
            <a className="cursor-pointer flex">
              Settings <ChevronDown></ChevronDown>
            </a>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => window.location.href = '../BarangayOfficials'} className="flex">
              Barangay Officials
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.location.href = ''} className="flex">
              Barangay Profile
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.location.href = '../CertTemp'} className="flex">
              Cert. Template
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.location.href = ''} className="flex">
              Purok
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="relative inline">
      <DropdownMenu>
          <DropdownMenuTrigger>
            <a className="cursor-pointer flex items-center">
              Create <PlusCircle size={16} className="ml-2" />
            </a>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => window.location.href = '../AddCitizenStaff'} className="flex">
              Citizen <PlusCircle size={16} className="ml-2" />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.location.href = '../AddPurokStaff'} className="flex">
              Business <PlusCircle size={16} className="ml-2" />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.location.href = '/'} className="flex">
              Cert. Template <PlusCircle size={16} className="ml-2" />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.location.href = '/'} className="flex">
              Purok <PlusCircle size={16} className="ml-2" />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.location.href = '/'} className="flex">
              Fee Type <PlusCircle size={16} className="ml-2" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default NavbarStaff;