'use client'
import { useState } from 'react';

const AccountForm = () => {
  const [formData, setFormData] = useState({
    Username: '',
    Email: '',
    Password: '',
    AccessLevel: 0,
    AdminID: null, 
    citizenID: null, 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/createAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data); // Handle response as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="Username">Username:</label>
        <input
          type="text"
          id="Username"
          name="Username"
          value={formData.Username}
          onChange={handleChange}
          className="border border-gray-400 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          id="Email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          className="border border-gray-400 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Password">Password:</label>
        <input
          type="password"
          id="Password"
          name="Password"
          value={formData.Password}
          onChange={handleChange}
          className="border border-gray-400 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="AccessLevel">Access Level:</label>
        <input
          type="number"
          id="AccessLevel"
          name="AccessLevel"
          value={formData.AccessLevel}
          onChange={handleChange}
          className="border border-gray-400 rounded-md px-3 py-2 w-full"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default AccountForm;
