'use client';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RadioInput({ label, checked, onChange, name }) {
  console.log(checked);
  return (
    <label
      className={`flex h-[5rem] w-[31.6rem] cursor-pointer items-center justify-between rounded-[1.5rem] border border-black px-6 hover:bg-gray-50 ${
        checked ? 'opacity-100' : 'opacity-45'
      }`}
    >
      <span className="text-p-sm">{label}</span>
      <div className="relative flex items-center justify-center">
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange}
          className="relative h-8 w-8 appearance-none rounded-full border-2 border-gray-300 checked:border-black"
        />
        {checked && (
          <FontAwesomeIcon icon={faCheck} className="absolute text-p-xs" />
        )}
      </div>
    </label>
  );
}
