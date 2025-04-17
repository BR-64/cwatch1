import { useState } from 'react';
import AppButton from '../components/Button';

function CaseReport() {
  const [leadType, setleadType] = useState('');
  const [isVisible1, setIsVisible1] = useState(true);
  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleLead = (e) => {
    setleadType(e.target.value);
    console.log(leadType);
  };

  const nextStep1 = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible1 && (
        <div id='recordsubmit_p1'>
          <div id='lead_type' class='flex space-x-6'>
            <h2>คุณต้องการเล่าเบาะแสเรื่องอะไร</h2>
            <label class='inline-flex items-center space-x-2 cursor-pointer'>
              <span class='text-gray-700'>
                <input
                  onClick={handleLead}
                  value='เหตุสงสัยการทุจริตในสถานศึกษา'
                  type='radio'
                  name='option'
                  class='peer hidden'
                />
                เหตุสงสัยการทุจริตในสถานศึกษา
              </span>
              <div class='w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center'></div>
            </label>

            <label class='inline-flex items-center space-x-2 cursor-pointer'>
              <input
                onClick={handleLead}
                value='เหตุสงสัยการทุจริตที่เกี่ยวข้องกับโควิด-19'
                type='radio'
                name='option'
                class='peer hidden'
              />
              <span class='text-gray-700'>
                เหตุสงสัยการทุจริตที่เกี่ยวข้องกับโควิด-19
              </span>
              <div class='w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center'></div>
            </label>

            <label class='inline-flex items-center space-x-2 cursor-pointer'>
              <input
                onClick={handleLead}
                value='เหตุสงสัยการทุจริตภาครัฐ'
                type='radio'
                name='option'
                class='peer hidden'
              />
              <span class='text-gray-700'> เหตุสงสัยการทุจริตภาครัฐ</span>
              <div class='w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center'></div>
            </label>
          </div>
          <AppButton label='next' onClick={nextStep1} />
        </div>
      )}
    </>
  );
}

export default CaseReport;
