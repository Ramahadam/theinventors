'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ButtonBack({ href }) {
  return (
    <Link href={href} className="absolute top-2">
      <span className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center">
        <FontAwesomeIcon icon={faArrowLeft} className="text-black" />
      </span>
    </Link>
  );
}
