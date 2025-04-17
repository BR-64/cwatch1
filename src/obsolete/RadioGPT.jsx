import React, { useState } from 'react';

const RadioGroupExample = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  return (
    <div>
      <p>Choose an option:</p>
      <label>
        <input
          type='radio'
          name='options'
          value='option1'
          checked={selectedOption === 'option1'}
          onChange={handleChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type='radio'
          name='options'
          value='option2'
          checked={selectedOption === 'option2'}
          onChange={handleChange}
        />
        Option 2
      </label>
      <br />
      <label>
        <input
          type='radio'
          name='options'
          value='option3'
          checked={selectedOption === 'option3'}
          onChange={handleChange}
        />
        Option 3
      </label>

      <p>Selected: {selectedOption || 'None'}</p>
    </div>
  );
};

export default RadioGroupExample;
