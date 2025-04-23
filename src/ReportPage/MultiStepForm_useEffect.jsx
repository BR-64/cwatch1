import React, { useState, useEffect } from 'react';
import Step1 from './Step1.jsx';
import Step2 from './Step2.jsx';
import Step3 from './Step3.jsx';
import ThaiAddressForm from './GPT/thaiad.jsx';
import FileUpload from './FileUpload.jsx';
import submitCase from '../api/submitCase.js';
import { useNavigate } from 'react-router-dom';

const MultiStepForm = () => {
  const navigate = useNavigate();
  const [currentComponent, setCurrentComponent] = useState(null);
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
    file: [],
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeFile = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
    console.log(e.target.files[0]);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      await submitCase(formData);
      navigate('/thank-you');
    } catch (err) {
      alert('Something went wrong. Try again.');
    }
  };

  useEffect(() => {
    // Whenever step changes, update the visible component
    switch (step) {
      case 1:
        setCurrentComponent(<Step1 handleChang={handleChange} />);
        break;
      case 2:
        // setCurrentComponent(<Step2 handleChange={handleChange} />);
        setCurrentComponent(
          <Step2
            formData={formData}
            handleChange={handleChange}
            handleChangeFile={handleChangeFile}
          />
        );
        break;
      default:
        setCurrentComponent(null);
    }

    console.log(`Now at step ${step}`);
  }, [step]);

  return (
    <div className='max-w-md mx-auto mt-10 p-6 border rounded-lg shadow'>
      <h2 className='text-xl font-bold mb-4'>Step {step}</h2>
      {currentComponent}

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
