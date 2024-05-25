'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchAccessLevel } from '../util/fetch-access-level';
import { isLocalStorageKeyEmptyOrExpired, getWithExpiry, setWithExpiry } from '../util/session';

type LoginFormState = {
  username: string;
  password: string;
};



const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormState>({ username: '', password: '' });
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      if (!isLocalStorageKeyEmptyOrExpired('username')) {
        const username = getWithExpiry('username');
        const accessLevel = await fetchAccessLevel(username);
        if (accessLevel === 1) {
          router.push('/citizen/profile');
        } else if (accessLevel === 2 || accessLevel === 3) {
          router.push('/admin');
        } else if (accessLevel === 4) {
          router.push('/superadmin');
        } else{
          console.log('gay')
        }
      }
    };

    checkUser();
  }, [router]);

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      toast.success('Login successful!');
      setWithExpiry('username', formData.username, 2 * 60 * 60 * 1000); // 2 hour expiry
      const username = getWithExpiry('username');
        const accessLevel = await fetchAccessLevel(username);
        if (accessLevel === 1) {
          router.push('/citizen/profile');
        } else if (accessLevel === 2) {
          router.push('/staff');
        } else if (accessLevel === 3){
          router.push('/admin');
        }else if (accessLevel === 4) {
          router.push('/superadmin');
        } else{
          console.log('gay')
        }
    } else {
      toast.error('Credentials incorrect!');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleFormSubmit}>
        <p className="text-neutral-700 text-4xl poppins-bold">Login</p>
        <div className="input-group">
          <p className="text-neutral-700 text-sm poppins mt-5 mb-1">Username</p>
          <input
            className="bg-stone-100 rounded w-80 h-12"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <p className="text-neutral-700 text-sm font-normal poppins mt-5 mb-1">Password</p>
          <input
            className="bg-stone-100 rounded w-80 h-12"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="sign-in-button w-80 h-12 bg-[#558750] rounded poppins-bold text-white mt-8"
        >
          Sign in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
