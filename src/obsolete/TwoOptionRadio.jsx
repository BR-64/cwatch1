import React, { useState } from 'react';

const TwoOptionRadio = ({ header }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  const handleClick = () => {
    alert(`You selected: ${selectedOption || 'Nothing yet 😅'}`);
  };

  return (
    <div className='p-4 max-w-sm mx-auto space-y-4 border rounded shadow'>
      <p className='font-medium'>{header}</p>

      <label className='block'>
        <input
          type='radio'
          name='choice'
          value='ประชาชนทั่วไป'
          checked={selectedOption === 'ประชาชนทั่วไป'}
          onChange={handleChange}
          className='mr-2'
        />
        ประชาชนทั่วไป
      </label>

      <label className='block'>
        <input
          type='radio'
          name='choice'
          value='บุคคลากรในหน่วยงานรัฐ'
          checked={selectedOption === 'บุคคลากรในหน่วยงานรัฐ'}
          onChange={handleChange}
          className='mr-2'
        />
        บุคคลากรในหน่วยงานรัฐ
      </label>

      <button
        onClick={handleClick}
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
        Submit
      </button>
    </div>
  );
};

export default TwoOptionRadio;
