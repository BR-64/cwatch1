import React, { useState, useEffect } from 'react';

export default function LoginGPT() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const validate = (email, password) => {
    if (email === 'user@example.com' && password === 'password123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError(`Invalidat email, or password`);
      //   console.log(data);
    }
  };

  useEffect(() => {
    validate(email, password);
  }, [email, password]);

  const handleLogin = (e) => {
    let data = { email, password };
    // e.preventDefault();

    // Fake login check
    if (email === 'user@example.com' && password === 'password123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError(`Invalidat email, or password ${data}`);
      console.log(data);
    }
  };

  if (isLoggedIn) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-green-100'>
        <h2 className='text-2xl font-bold text-green-800'>
          Welcome back, {email}!
        </h2>
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div
        onSubmit={handleLogin}
        className='bg-white p-6 rounded-xl shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-4 text-center'>LoginGPT</h2>

        <div className='mb-4'>
          <label
            onClick={handleLogin}
            className='block text-sm font-medium mb-1'>
            Email
          </label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // onChange={(e) =>  { setPassword(e.target.value) validate(email, password)}}
            required
            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}

        <button
          onClick={handleLogin}
          className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200'>
          Login
        </button>
      </div>
      <h3>{email}</h3>
      <h3>{password}</h3>
    </div>
  );
}
