import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  //   const handleLogin = () => {
  //     console.log('Email:', email, 'Password:', password);
  //     // TODO: Add login logic here
  //   };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      alert('Login successful!');
      navigate('/admin');
      console.log('User ID:', res.data.userId);

      const token = res.data.token;
      localStorage.setItem('authToken', token);

      // You can store token or navigate to another page here
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(error.response.data.message || 'Login failed');
      } else {
        alert('Network error');
      }
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/signup',
        {
          email,
          password,
        }
      );

      alert('Singup success!!!');
      window.location.reload();
      // navigate('/login');
      console.log('User ID:', response.data.userId);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || 'Signup failed');
      } else {
        alert('Network error');
      }
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>

        <div className='space-y-4'>
          <div>
            <label className='block mb-1 text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          <div>
            <label className='block mb-1 text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          <div>
            <button
              onClick={handleLogin}
              className='w-full  py-2 rounded-lg hover:bg-blue-700 transition-colors bg-green-500'>
              Sign In
            </button>
          </div>
        </div>

        {/* <p className='mt-4 text-sm text-center text-gray-500'>
          Don’t have an account?{' '}
          <a href='/register' className='text-blue-600 hover:underline'>
            Sign up
          </a>
        </p> */}
        <button
          onClick={handleSignup}
          className='w-full bg-red-600 hover:bg-red-700 transition-colors mt-2'>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
