// components/ui/Button.tsx
import React from 'react';

const AppButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>
      {label}
    </button>
  );
};

export default AppButton;
