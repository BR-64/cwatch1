import React, { useState } from 'react';
import CaseReport from './CaseReport';
import LocationForm from './locationForm';
import FileUpload from '../ReportPage/FileUpload';
import TwoOptionRadio from './TwoOptionRadio';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    alert(`Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div className='p-4 max-w-md mx-auto border rounded shadow'>
      {step === 1 && (
        <div>
          <h2 className='text-xl font-bold mb-2'>Step 1: Enter Name</h2>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='border p-2 w-full'
            placeholder='Your name'
          />
          <button
            onClick={nextStep}
            className='mt-4 bg-blue-600 text-white px-4 py-2 rounded'>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className='text-xl font-bold mb-2'>Step 2: Enter Email</h2>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='border p-2 w-full'
            placeholder='you@example.com'
          />
          <div className='mt-4 flex justify-between'>
            <button
              onClick={prevStep}
              className='bg-gray-500 text-white px-4 py-2 rounded'>
              Back
            </button>
            <button
              onClick={nextStep}
              className='bg-blue-600 text-white px-4 py-2 rounded'>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className='text-xl font-bold mb-2'>Step 3: Confirm</h2>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <div className='mt-4 flex justify-between'>
            <button
              onClick={prevStep}
              className='bg-gray-500 text-white px-4 py-2 rounded'>
              Back
            </button>
            <button
              onClick={nextStep}
              className='bg-blue-600 text-white px-4 py-2 rounded'>
              Next
            </button>

            {/* <button
              onClick={handleSubmit}
              className='bg-green-600 text-white px-4 py-2 rounded'>
              Submit
            </button> */}
          </div>
        </div>
      )}
      {step === 4 && (
        <>
          <LocationForm />
          <div>
            <h2>โปรดระบุผู้ที่สงสัยเกี่ยวข้อง *</h2>
            <input type='text' placeholder='ชื่อ ตำแหน่ง หน่วยงาน สังกัด' />
          </div>
          <div>
            <h2>ถ้าเป็นไปได้โปรดระบุรายละเอียดของการสงสัยทุจริต</h2>
            <input
              type='text'
              placeholder='โปรดอธิบาย รายละเอียด สาเหตุ ที่ท่านพบเห็น ถ้าเป็นไปได้ โปรดระบุ วัน เวลาและสถานที่'
            />
          </div>
          <FileUpload />
          <TwoOptionRadio header='ประเภทผู้รายงาน *' />
        </>
      )}
    </div>
  );
};

export default MultiStepForm;
