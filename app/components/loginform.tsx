'use client'
import React, { useState, FormEvent } from 'react';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/navigation';


var bcrypt = require('bcryptjs');

// Action function to handle the login POST request

type LoginFormState = {
  username: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const prisma = new PrismaClient();
  const [formData, setFormData] = useState<LoginFormState>({ username: '', password: '' });
  const router = useRouter();

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();  // Prevent the form from actually submitting
    const response = await fetch('api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Login successful', data);
      router.push('/landingpage');
      // Redirect or handle successful login here
    } else {
      console.error('Failed to login', data.error);
    }
};

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
      <form onSubmit={handleFormSubmit}>
        <p className="text-neutral-700 text-4xl poppins-bold">Login</p>
        <div className="input-group">
          <p className="text-neutral-700 text-sm poppins mt-5 mb-1">Username</p>
          <input
            className='bg-stone-100 rounded w-80 h-12'
            type="username"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <p className="text-neutral-700 text-sm font-normal poppins mt-5 mb-1" >Password</p>
          <input
            className='bg-stone-100 rounded w-80 h-12'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="sign-in-button w-80 h-12 bg-[#558750] rounded poppins-bold text-white mt-8">Sign in</button>
      </form>
  );
};

export default LoginForm;
