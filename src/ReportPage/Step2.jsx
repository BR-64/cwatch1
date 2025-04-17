const Step2 = ({ handleChange }) => (
  <div>
    <h2>ประเด็นสงสัยทุจริต</h2>
    <hr />
    <h2>Location</h2>
    <hr />
    <div>
      <h2>โปรดระบุผู้ที่สงสัยเกี่ยวข้อง *</h2>
      <input
        type='text'
        onChange={handleChange}
        name='suspect'
        placeholder='ชื่อ ตำแหน่ง หน่วยงาน สังกัด'
        className='w-64 box-content size-32 border-4 p-4'
      />
    </div>
    <div>
      <h2>ถ้าเป็นไปได้โปรดระบุรายละเอียดของการสงสัยทุจริต</h2>
      <input
        type='text'
        onChange={handleChange}
        name='details'
        placeholder='โปรดอธิบาย รายละเอียด สาเหตุ ที่ท่านพบเห็น ถ้าเป็นไปได้ โปรดระบุ วัน เวลาและสถานที่'
        className='w-full box-content size-32 border-4 p-4'
      />
    </div>
    <div>
      <h2>ประเภทผู้รายงาน</h2>
      <label className='block mb-2'>
        <input
          type='radio'
          name='reporter'
          value='ประชาชนทั่วไป'
          // checked={formData.preference === 'light'}
          onChange={handleChange}
          className='mr-2'
        />
        ประชาชนทั่วไป
      </label>

      <label className='block mb-2'>
        <input
          type='radio'
          name='reporter'
          value='บุคคลากรในหน่วยงานรัฐ'
          // checked={formData.preference === 'dark'}
          onChange={handleChange}
          className='mr-2'
        />
        บุคคลากรในหน่วยงานรัฐ
      </label>
    </div>

    {/* <label className='block mb-2'>
      Email:
      <input
        type='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        // className='w-full border p-2 rounded'
        className='w-full border p-2 rounded'
      />
    </label> */}
  </div>
);
export default Step2;
