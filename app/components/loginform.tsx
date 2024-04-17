'use client'
import React, { useState, FormEvent } from 'react';

type LoginFormState = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormState>({ email: '', password: '' });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Here you would handle the form submission directly,
    // for example, calling an API to authenticate the user.
    console.log('Logging in', formData);
    // Insert your API call or other login logic here.

    // After successful login, you may want to do something,
    // like redirecting to another page or updating the app state.
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-neutral-700 text-4xl font-bold poppins">Login</h1>
        <div className="input-group">
          <label className="text-neutral-700 text-sm font-normal poppins" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label className="text-neutral-700 text-sm font-normal poppins" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="sign-in-button fontFamily: 'Poppins', fontWeight: 700">Sign in</button>
      </form>
  );
};

export default LoginForm;
