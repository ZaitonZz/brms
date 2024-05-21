"use client"
import React, { useState } from 'react';

function NavbarAdmin() {
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);

  // Toggle dropdown visibility for Barangay Admin
  const toggleAdminDropdown = () => setShowAdminDropdown(!showAdminDropdown);

  // Toggle dropdown visibility for Add
  const toggleAddDropdown = () => setShowAddDropdown(!showAddDropdown);

  return (
    <div className="flex items-center text-white">
      <div className="relative mr-4">
        {/* Toggle Link for Barangay Admin */}
        <a onClick={toggleAdminDropdown} className="cursor-pointer hover:text-gray-200">
          Barangay Admin(Captain)
        </a>
        {/* Dropdown Menu for Barangay Admin */}
        {showAdminDropdown && (
          <div className="absolute left-0 mt-1 bg-gray-800 text-white py-2">
            <a href="/" className="block px-4 py-2 hover:bg-gray-700">View Profile</a>
            <a href="app/ChangePasswordAdmin" className="block px-4 py-2 hover:bg-gray-700">Change Password</a>
            <a href="../Logout" className="block px-4 py-2 hover:bg-gray-700">Log Out</a>
          </div>
        )}
      </div>

      <a href="adminpage" className="mr-4 hover:text-gray-200">Home</a>
      <a href="/" className="mr-4 hover:text-gray-200">Report</a>

 
      <div className="relative inline">
  {/* Toggle Link for Add */}
  <a onClick={toggleAddDropdown} className="cursor-pointer hover:text-gray-200">
    Add
  </a>
  {/* Dropdown Menu for Add */}
  {showAddDropdown && (
    <div className="absolute left-0 mt-1 bg-gray-800 text-white py-2 transition-opacity duration-300 opacity-100">
      <button onClick={() => window.location.href = '../AddCitizenAdmin'} className="block px-2 py-2 hover:bg-gray-700">Citizen</button>
      <button onClick={() => window.location.href = '../AddAdmin'} className="block px-2 py-2 hover:bg-gray-700">Admin</button>
      <button onClick={() => window.location.href = '../AddPurokAdmin'} className="block px-2 py-2 hover:bg-gray-700">Purok</button>
    </div>
  )}

      </div>
    </div>
  );
}

export default NavbarAdmin;