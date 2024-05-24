"use client"
import React, { useState } from 'react';
import LogoutButton from './logout';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ChevronDown, PlusCircle } from 'lucide-react';

function NavbarAdmin() {
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);

  // Toggle dropdown visibility for Barangay Admin
  const toggleAdminDropdown = () => setShowAdminDropdown(!showAdminDropdown);

  // Toggle dropdown visibility for Add
  const toggleAddDropdown = () => setShowAddDropdown(!showAddDropdown);

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
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem>Change Password</DropdownMenuItem>
            <DropdownMenuItem>
              <LogoutButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <a href="adminpage" className="mr-12 hover:text-gray-200">Home</a>
      <a href="/" className="mr-12 hover:text-gray-200">Report</a>


      <div className="relative inline">
         {/* Toggle Link for Add */}
         <DropdownMenu>
          <DropdownMenuTrigger>
            <a className="cursor-pointer hover:text-gray-200 flex items-center">
              Create <PlusCircle size={16} className="ml-2" />
            </a>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => window.location.href = '../AddCitizenAdmin'} className="flex">
              Citizen <PlusCircle size={16} className="ml-2" />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.location.href = '../AddAdmin'} className="flex">
              Admin <PlusCircle size={16} className="ml-2" />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.location.href = '../AddPurokAdmin'} className="flex">
              Purok <PlusCircle size={16} className="ml-2" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default NavbarAdmin;