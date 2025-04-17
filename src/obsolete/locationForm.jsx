import React, { useState } from 'react';

const ThreeDropdowns = () => {
  const [fruit, setFruit] = useState('');
  const [color, setColor] = useState('');
  const [animal, setAnimal] = useState('');

  return (
    <div className='p-4 space-y-6 max-w-md mx-auto'>
      <h2>โปรดระบุสถานที่สงสัยทุจริต *</h2>
      {/* Fruit Dropdown */}
      <div>
        <label className='block mb-1 font-medium'>จังหวัด : </label>
        <select
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
          className='border p-2 rounded w-full'>
          <option value=''>-- Select --</option>
          <option value='apple'>🍎 Apple</option>
          <option value='banana'>🍌 Banana</option>
          <option value='cherry'>🍒 Cherry</option>
        </select>
      </div>

      {/* Color Dropdown */}
      <div>
        <label className='block mb-1 font-medium'>อำเภอ : </label>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className='border p-2 rounded w-full'>
          <option value=''>-- Select --</option>
          <option value='red'>🔴 Red</option>
          <option value='green'>🟢 Green</option>
          <option value='blue'>🔵 Blue</option>
        </select>
      </div>

      {/* Animal Dropdown */}
      <div>
        <label className='block mb-1 font-medium'>ตำบล : </label>
        <select
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          className='border p-2 rounded w-full'>
          <option value=''>-- Select --</option>
          <option value='cat'>🐱 Cat</option>
          <option value='dog'>🐶 Dog</option>
          <option value='bird'>🐦 Bird</option>
        </select>
      </div>
    </div>
  );
};

export default ThreeDropdowns;
