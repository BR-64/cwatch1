import LocationSelect from './LocationSelect';

const Step2 = ({ formData, handleChange, handleChangeFile }) => (
  <div class=' flex flex-col space-y-6'>
    <h2>ประเด็นสงสัยทุจริต</h2>
    <hr />
    <LocationSelect onSelectedProvince={handleChange} />
    <hr />
    <div>
      <h2>โปรดระบุผู้ที่สงสัยเกี่ยวข้อง *</h2>
      <input
        type='text'
        onChange={handleChange}
        name='suspect'
        placeholder='ชื่อ ตำแหน่ง หน่วยงาน สังกัด'
        className='w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
      />
    </div>
    <div>
      <h2>ถ้าเป็นไปได้โปรดระบุรายละเอียดของการสงสัยทุจริต</h2>
      <textarea
        onChange={handleChange}
        row='4'
        name='details'
        placeholder='โปรดอธิบาย รายละเอียด สาเหตุ ที่ท่านพบเห็น ถ้าเป็นไปได้ โปรดระบุ วัน เวลาและสถานที่'
        className='size-50 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
      />
    </div>
    {/* <div>
      <h2>ถ้าเป็นไปได้โปรดระบุรายละเอียดของการสงสัยทุจริต</h2>
      <input
        type='text'
        onChange={handleChange}
        name='details'
        placeholder='โปรดอธิบาย รายละเอียด สาเหตุ ที่ท่านพบเห็น ถ้าเป็นไปได้ โปรดระบุ วัน เวลาและสถานที่'
        className='w-full box-content p-4 line-clamp-4'
      />
    </div> */}

    <fieldset>
      <legend class='text-sm/6 font-semibold text-gray-900'>
        ประเภทผู้รายงาน
      </legend>
      <div class='mt-6 space-y-6'>
        <div class='flex items-center gap-x-3'>
          <label class='block text-sm/6 font-medium text-gray-900'>
            <input
              name='reporter'
              type='radio'
              value='ประชาชนทั่วไป'
              onChange={handleChange}
              class='mr-2 relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden'
            />
            ประชาชนทั่วไป
          </label>
        </div>
        <div class='flex items-center gap-x-3'>
          <label class='block text-sm/6 font-medium text-gray-900'>
            <input
              name='reporter'
              type='radio'
              value='บุคคลากรในหน่วยงานรัฐ'
              onChange={handleChange}
              class='mr-2 relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden'
            />
            บุคคลากรในหน่วยงานรัฐ
          </label>
        </div>
      </div>
    </fieldset>

    <input
      type='file'
      multiple='true'
      name='file'
      onChange={handleChangeFile}
    />

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
