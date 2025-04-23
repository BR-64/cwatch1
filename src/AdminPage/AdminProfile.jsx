// AdminProfile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminProfile = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/admin/users',
          {
            headers: {
              // Add authorization token if using JWT for authentication
              Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
          }
        );
        setUsers(response.data);
      } catch (error) {
        setError('Error fetching user data.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    console.log(users);
  }, []);

  return (
    <div className='container'>
      <h1 className='text-3xl font-bold'>Admin Profile</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className='text-red-500'>{error}</p>
      ) : (
        <div className='overflow-x-auto mt-4'>
          <table className='min-w-full bg-white border border-gray-200'>
            <thead>
              <tr>
                <th className='px-4 py-2 border-b'>ID</th>
                <th className='px-4 py-2 border-b'>Email</th>
                <th className='px-4 py-2 border-b'>Is Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className='px-4 py-2 border-b'>{user._id}</td>
                  <td className='px-4 py-2 border-b'>{user.email}</td>
                  <td className='px-4 py-2 border-b'>
                    {user.isAdmin ? 'Yes' : 'No'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
