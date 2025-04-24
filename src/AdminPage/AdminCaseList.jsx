import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminCaseList = () => {
  const [casesReport, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
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
        console.log(casesReport);
      } catch (error) {
        setError('Error fetching Case data.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, []);

  return (
    <div className='container'>
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className='text-red-500'>{error}</p>
      ) : (
        <div className='overflow-x-auto mt-4'>
          <table className='min-w-full bg-white border border-gray-200'>
            <thead>
              <tr>
                <th className='px-4 py-2 border-b'>Case Number</th>
                <th className='px-4 py-2 border-b'>Owner</th>
                <th className='px-4 py-2 border-b'>Report submitted time</th>
                <th className='px-4 py-2 border-b'>Topic</th>
                <th className='px-4 py-2 border-b'>Scope</th>
                <th className='px-4 py-2 border-b'>Location</th>
                <th className='px-4 py-2 border-b'>Case Status</th>
                <th className='px-4 py-2 border-b'>Published Status</th>
              </tr>
            </thead>
            <tbody>
              {casesReport.map((caser) => (
                <tr key={caser._id}>
                  {/* <td className='px-4 py-2 border-b'>
                    <Link to={`case/${caser.casenum}`}>{caser.casenum}</Link>
                  </td> */}
                  <td className='px-4 py-2 border-b'>
                    <Link to={`case/${caser._id}`}>{caser._id}</Link>
                  </td>
                  <td className='px-4 py-2 border-b'>{caser.owner}</td>
                  <td className='px-4 py-2 border-b'>{caser.createdAt}</td>
                  <td className='px-4 py-2 border-b'>{caser.topic}</td>
                  <td className='px-4 py-2 border-b'>{caser.scope}</td>
                  <td className='px-4 py-2 border-b'>{caser.province}</td>
                  <td className='px-4 py-2 border-b'>{caser.status}</td>
                  <td className='px-4 py-2 border-b'>{caser.publishstatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminCaseList;
