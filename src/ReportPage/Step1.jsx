const Step1 = ({ formData, handleChang }) => (
  //   <div>
  //     <label className='block mb-2'>
  //       Name:
  //       <input
  //         type='text'
  //         name='name'
  //         value={formData.name}
  //         onChange={handleChange}
  //         className='w-full border p-2 rounded'
  //       />
  //     </label>
  //   </div>

  <div id='lead_type' class='flex flex-col space-y-6'>
    <h2 class='text-center'>คุณต้องการเล่าเบาะแสเรื่องอะไร</h2>
    <label class=' items-center space-x-2 cursor-pointer'>
      <input
        onClick={handleChang}
        value='เหตุสงสัยการทุจริตในสถานศึกษา'
        type='radio'
        name='topic'
        class='peer hidden'
      />
      <span class='text-gray-700'>เหตุสงสัยการทุจริตในสถานศึกษา</span>
      <div class='inline-flex w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center'></div>
    </label>

    <label class=' items-center space-x-2 cursor-pointer'>
      <input
        onClick={handleChang}
        value='เหตุสงสัยการทุจริตที่เกี่ยวข้องกับโควิด-19'
        type='radio'
        name='topic'
        class='peer hidden'
      />
      <span class='text-gray-700'>
        เหตุสงสัยการทุจริตที่เกี่ยวข้องกับโควิด-19
      </span>
      <div class='inline-flex w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center'></div>
    </label>

    <label class='inline-flex items-center space-x-2 cursor-pointer'>
      <input
        onClick={handleChang}
        value='เหตุสงสัยการทุจริตภาครัฐ'
        type='radio'
        name='topic'
        class='peer hidden'
      />
      <span class='text-gray-700'> เหตุสงสัยการทุจริตภาครัฐ</span>
      <div class='inline-flex w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center'></div>
    </label>
  </div>
);

export default Step1;
