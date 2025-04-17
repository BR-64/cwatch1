const Step1 = ({ formData, handleChange }) => (
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

  <div id='lead_type' class='flex space-x-6'>
    <h2>คุณต้องการเล่าเบาะแสเรื่องอะไร</h2>
    <label class='inline-flex items-center space-x-2 cursor-pointer'>
      <span class='text-gray-700'>
        <input
          onClick={handleChange}
          value='เหตุสงสัยการทุจริตในสถานศึกษา'
          type='radio'
          name='topic'
          class='peer hidden'
        />
        เหตุสงสัยการทุจริตในสถานศึกษา
      </span>
      <div class='w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center'></div>
    </label>

    <label class='inline-flex items-center space-x-2 cursor-pointer'>
      <input
        onClick={handleChange}
        value='เหตุสงสัยการทุจริตที่เกี่ยวข้องกับโควิด-19'
        type='radio'
        name='topic'
        class='peer hidden'
      />
      <span class='text-gray-700'>
        เหตุสงสัยการทุจริตที่เกี่ยวข้องกับโควิด-19
      </span>
      <div class='w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center'></div>
    </label>

    <label class='inline-flex items-center space-x-2 cursor-pointer'>
      <input
        onClick={handleChange}
        value='เหตุสงสัยการทุจริตภาครัฐ'
        type='radio'
        name='topic'
        class='peer hidden'
      />
      <span class='text-gray-700'> เหตุสงสัยการทุจริตภาครัฐ</span>
      <div class='w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center'></div>
    </label>
  </div>
);

export default Step1;
