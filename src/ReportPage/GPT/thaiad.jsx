import React, { useState, useEffect } from 'react';

const thaiAddressData = {
  Bangkok: {
    'Phra Nakhon': ['Chana Songkhram', 'Bang Khun Phrom'],
    Dusit: ['Dusit', 'Wachiraphayaban'],
  },
  'Chiang Mai': {
    'Mueang Chiang Mai': ['Si Phum', 'Phra Sing'],
    'Hang Dong': ['Nam Phrae', 'Ban Waen'],
  },
};

export default function ThaiAddressForm() {
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [subdistrict, setSubdistrict] = useState('');

  const [districts, setDistricts] = useState([]);
  const [subdistricts, setSubdistricts] = useState([]);

  useEffect(() => {
    if (province) {
      const districtsList = Object.keys(thaiAddressData[province]);
      setDistricts(districtsList);
      setDistrict(''); // Reset district and subdistrict when province changes
      setSubdistrict('');
      setSubdistricts([]);
    }
  }, [province]);

  useEffect(() => {
    if (province && district) {
      const subdistrictsList = thaiAddressData[province][district];
      setSubdistricts(subdistrictsList);
      setSubdistrict('');
    }
  }, [district, province]);

  return (
    <div className='p-4 max-w-md mx-auto'>
      <h2 className='text-xl font-semibold mb-4'>Thailand Address Form</h2>

      <div className='mb-4'>
        <label className='block mb-1'>Province</label>
        <select
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className='w-full p-2 border rounded'>
          <option value=''>-- Select Province --</option>
          {Object.keys(thaiAddressData).map((prov) => (
            <option key={prov} value={prov}>
              {prov}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-4'>
        <label className='block mb-1'>District</label>
        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          disabled={!province}
          className='w-full p-2 border rounded'>
          <option value=''>-- Select District --</option>
          {districts.map((dist) => (
            <option key={dist} value={dist}>
              {dist}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-4'>
        <label className='block mb-1'>Sub-district</label>
        <select
          value={subdistrict}
          onChange={(e) => setSubdistrict(e.target.value)}
          disabled={!district}
          className='w-full p-2 border rounded'>
          <option value=''>-- Select Sub-district --</option>
          {subdistricts.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
