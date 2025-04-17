const Step3 = ({ formData, handleChange }) => (
  <div>
    <label className='block mb-2'>
      Age:
      <input
        type='number'
        name='age'
        value={formData.age}
        onChange={handleChange}
        className='w-full border p-2 rounded'
      />
    </label>
  </div>
);

export default Step3;
