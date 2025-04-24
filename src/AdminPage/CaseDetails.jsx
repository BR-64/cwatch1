import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CaseDetails = () => {
  const { id } = useParams();
  const [caseD, setCaseD] = useState('');
  const [error, setError] = useState('');

  console.log(id);

  useEffect(() => {
    const fetchCase = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/case/${id}`);
        setCaseD(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'sthing went wrong');
      }
    };
    fetchCase();
    console.log(caseD);
  }, []);

  return (
    <div>
      <h1>{caseD._id}</h1>
      <h3>{caseD.topic}</h3>
    </div>
  );
};

export default CaseDetails;
