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

function NavbarSuperAdmin() {
  const [showSuperAdminDropdown, setShowSuperAdminDropdown] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);

  // Toggle dropdown visibility for Barangay Admin
  const toggleSuperAdminDropdown = () => setShowSuperAdminDropdown(!showSuperAdminDropdown);

  // Toggle dropdown visibility for Add
  const toggleAddDropdown = () => setShowAddDropdown(!showAddDropdown);

  return (
    <div className="flex items-center text-white">
      <div className="relative mr-12">
        {/* Toggle Link for Barangay Admin */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <a className="cursor-pointer hover:text-gray-200 flex">
              (viewing as Superadmin)<ChevronDown></ChevronDown>
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

      <a href="superadmin" className="mr-12 hover:text-gray-200">Home</a>
      <a href="" className="mr-12 hover:text-gray-200">Logs</a>



    </div>
  );
}

export default NavbarSuperAdmin;