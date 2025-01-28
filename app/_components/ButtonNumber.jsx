'use client';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function ButtonNumber({ icon = '' }) {
  const [phone, setPhone] = useState('+81(123)456-78-90');

  return (
    <div className="bg-black text-white rounded-[1.5rem] px-[2rem] py-[1.6rem] flex items-center">
      <PhoneInput
        country={'jp'}
        value={phone}
        onChange={setPhone}
        inputProps={{
          placeholder: '+81(123)456-78-90',
          className:
            'bg-black text-white border-none outline-none text-center text-p-sm px-2 py-1',
        }}
      />
      {icon}
    </div>
  );
}
