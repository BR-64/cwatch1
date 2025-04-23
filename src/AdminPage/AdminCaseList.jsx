import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminCaseList = () => {
  const [cases, setCases] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/case/caselist',
          {
            header: {
              Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
          }
        );
        setCases(response.data);
        console.log(cases);
      } catch (error) {
        setError('Error fetching Case data.');
        console.error(error);
      }
    };

    fetchCases();
  }, []);

  return (
    <div className='container'>
      <h2>Case List section</h2>
      <div className='overflow-x-auto mt-4'>
        <table className='min-w-full bg-white border border-gray-200'>
          <thead>
            <tr>
              <th className='px-4 py-2 border-b'>topic</th>
              <th className='px-4 py-2 border-b'>province</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default AdminCaseList;
