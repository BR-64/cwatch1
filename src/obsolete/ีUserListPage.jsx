// src/pages/UserListPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/admin/users',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [navigate]);

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>User List</h1>

      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>{error}</p>}

      {!loading && users.length === 0 && <p>No users found.</p>}

      {!loading && users.length > 0 && (
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white border border-gray-300 shadow-md rounded-xl'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-4 py-2 border'>ID</th>
                <th className='px-4 py-2 border'>Email</th>
                <th className='px-4 py-2 border'>Is Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className='text-center'>
                  <td className='px-4 py-2 border'>{user._id}</td>
                  <td className='px-4 py-2 border'>{user.email}</td>
                  <td className='px-4 py-2 border'>
                    {user.isAdmin ? '✅ Yes' : '❌ No'}
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

export default UserListPage;
