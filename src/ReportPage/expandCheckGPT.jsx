import React, { useState } from 'react';

const NestedCheckboxForm = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showExperimental, setShowExperimental] = useState(false);

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-4'>
      <h2 className='text-xl font-bold'>Settings</h2>

      {/* Main checkbox */}
      <div className='flex items-center space-x-3'>
        <input
          type='checkbox'
          id='advanced'
          checked={showAdvanced}
          onChange={(e) => {
            setShowAdvanced(e.target.checked);
            if (!e.target.checked) setShowExperimental(false); // Reset nested
          }}
          className='w-4 h-4'
        />
        <label htmlFor='advanced' className='text-sm font-medium'>
          Enable advanced options
        </label>
      </div>

      {/* Advanced options */}
      {showAdvanced && (
        <div className='ml-6 space-y-4 animate-fade-in'>
          <div className='flex items-center space-x-3'>
            <input
              type='checkbox'
              id='experimental'
              checked={showExperimental}
              onChange={(e) => setShowExperimental(e.target.checked)}
              className='w-4 h-4'
            />
            <label htmlFor='experimental' className='text-sm font-medium'>
              Enable experimental features
            </label>
          </div>

          {/* Optional: more inputs if experimental is on */}
          {showExperimental && (
            <div className='ml-6 space-y-3 animate-fade-in'>
              <div>
                <label className='block text-sm font-medium'>
                  Experiment Code
                </label>
                <input
                  type='text'
                  className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  placeholder='Enter code'
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NestedCheckboxForm;
