import React, { useState } from 'react';
import Step1 from '../ReportPage/Step1.jsx';
import Step2 from '../ReportPage/Step2.jsx';
import Step3 from '../ReportPage/Step3.jsx';
import ThaiAddressForm from '../ReportPage/GPT/thaiad.jsx';
import FileUpload from '../ReportPage/FileUpload.jsx';
import submitCase from '../api/submitCase.js';
import { useNavigate } from 'react-router-dom';

const MultiStepForm = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // name: '',
    topic: '',
    scope: '',
    suspect: '',
    details: '',
    province: '',
    district: '',
    subdistrict: '',
    reporter: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   navigate('/thank-you');
  // };

  const handleSubmit = async () => {
    try {
      await submitCase(formData);
      navigate('/thank-you');
    } catch (err) {
      alert('Something went wrong. Try again.');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 handleChange={handleChange} />;
      case 2:
        // return <ThaiAddressForm handleChange={handleChange} />;
        return (
          <>
            <Step2 handleChange={handleChange} />
            <FileUpload />
          </>
        );
      // case 3:
      //   return <Step3 formData={formData} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 border rounded-lg shadow'>
      <h2 className='text-xl font-bold mb-4'>Step {step}</h2>
      {/* <form onSubmit={handleSubmit}> */}
      {renderStep()}

      <div className='flex justify-between mt-4'>
        {step > 1 && (
          <button
            type='button'
            onClick={prevStep}
            className='bg-blue-500 px-4 py-2 rounded my-3'>
            Back
          </button>
        )}
        {step < 2 ? (
          <button
            type='button'
            onClick={nextStep}
            className='text-center bg-blue-500 px-4 py-2 rounded my-3'>
            Next
          </button>
        ) : (
          <>
            <br />
            <button
              onClick={handleSubmit}
              className='bg-green-500 px-4 py-2 rounded'>
              Submit
            </button>
          </>
        )}
      </div>
      {/* </form> */}
    </div>
  );
};

export default MultiStepForm;
