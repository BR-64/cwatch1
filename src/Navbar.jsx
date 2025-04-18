// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('authToken');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav className='bg-gray-800 p-4 text-white flex justify-between items-center shadow-md'>
      <div className='text-xl font-bold'>
        <Link to='/' className='hover:text-gray-300'>
          MyApp
        </Link>
      </div>
      <div className='space-x-4'>
        {isLoggedIn ? (
          <>
            <Link to='/admin' className='hover:text-gray-300'>
              Dashboard
            </Link>
            <Link to='/admin/users' className='hover:text-gray-300'>
              Users
            </Link>
            <button
              onClick={handleLogout}
              className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded'>
              Logout
            </button>
          </>
        ) : (
          <Link
            to='/login'
            className='bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded'>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
