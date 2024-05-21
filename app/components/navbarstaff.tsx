"use client"
import React, { useState } from 'react';

function NavbarStaff() {
  const [showStaffDropdown, setShowStaffDropdown] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  
  const toggleStaffDropdown = () => setShowStaffDropdown(!showStaffDropdown);
  const toggleAddDropdown = () => setShowAddDropdown(!showAddDropdown);
  const toggleSettingsDropdown = () => setShowSettingsDropdown(!showAddDropdown);

  return (
    <div className="flex items-center text-white">
      <div className="relative mr-4">
        {/* Toggle Link for Barangay Staff */}
        <a onClick={toggleStaffDropdown} className="cursor-pointer hover:text-gray-200">
          Barangay Staff(Staff)
        </a>
        {/* Dropdown Menu for Barangay Staff */}
        {showStaffDropdown && (
          <div className="absolute left-0 mt-1 bg-gray-800 text-white py-2">
            <a href="/" className="block px-4 py-2 hover:bg-gray-700">View Profile</a>
            <a href="../ChangePassword" className="block px-4 py-2 hover:bg-gray-700">Change Password</a>
            <a href="/" className="block px-4 py-2 hover:bg-gray-700">Log Out</a>
          </div>
        )}
      </div>

      <a href="StaffPage" className="mr-4 hover:text-gray-200">Home</a>
      <a href="/" className="mr-4 hover:text-gray-200">Report</a>
      <a href="/" className="mr-4 hover:text-gray-200">Barangay Case</a>
      
      <div className="relative inline pr-2">
        {/* Toggle Link for Add */}
        <a onClick={toggleSettingsDropdown} className="cursor-pointer hover:text-gray-200">
          Settings
        </a>
        {/* Dropdown Menu for Add */}
        {showSettingsDropdown && (
          <div className={`absolute left-0 mt-1 bg-gray-800 text-white py-2 transition-opacity duration-300 ${showSettingsDropdown ? 'opacity-100' : 'opacity-0'}`}>
            <a href="/" className="block px-2 py-2 hover:bg-gray-700">Barangay Offiicials</a>
            <a href="/" className="block px-2 py-2 hover:bg-gray-700">Barangay Profile</a>
            <a href="/" className="block px-2 py-2 hover:bg-gray-700">Certification Template</a>
            <a href="/" className="block px-2 py-2 hover:bg-gray-700">Purok</a>
          </div>
        )}
      </div>
      <div className="relative inline">
        {/* Toggle Link for Add */}
        <a onClick={toggleAddDropdown} className="cursor-pointer hover:text-gray-200">
          Add
        </a>
        {/* Dropdown Menu for Add */}
        {showAddDropdown && (
          <div className={`absolute left-0 mt-1 bg-gray-800 text-white py-2 transition-opacity duration-300 ${showAddDropdown ? 'opacity-100' : 'opacity-0'}`}>
            <a href="../AddCitizenStaff" className="block px-2 py-2 hover:bg-gray-700">Citizen</a>
            <a href="/" className="block px-2 py-2 hover:bg-gray-700">Business</a>
            <a href="/" className="block px-2 py-2 hover:bg-gray-700">Certification Template</a>
            <a href="../AddPurokStaff" className="block px-2 py-2 hover:bg-gray-700">Purok</a>
            <a href="/" className="block px-2 py-2 hover:bg-gray-700">Fee Type</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarStaff;