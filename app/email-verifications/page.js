'use client';
import Card from '../_components/Card';
import CloseButton from '../_components/CloseButton';
import Input from '../_components/Input';
import HeadingMedium from '../_components/HeadingMeduim';
import Button from '../_components/Button';
import { useState } from 'react';
import RadioInput from '../_components/RadioInput';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [selected, setSelected] = useState('yes');

  return (
    <div className="h-[100%]">
      <Card className="!justify-normal gap-8 px-[2rem] !pt-[7rem]">
        <CloseButton />
        <HeadingMedium className="mt-[10rem]">
          Lorem ipsum dolor sit adipiscing elit?
        </HeadingMedium>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <Input
            placeholder="Enter your email"
            className="bg-black px-6 text-white placeholder:text-white"
          />
          <p className="mt-[2.8rem] text-p-xs leading-7 text-gray-500">
            By verifying you agree to our{' '}
            <Link href="#" className="text-color-blue">
              terms and conditions and privacy policy
            </Link>
          </p>

          <div>
            <Button className="mt-[2.8rem] flex h-[5.3rem] w-[15rem] items-center justify-center">
              Verify
            </Button>
          </div>

          <div className="divider mt-[2.8rem] flex w-[12.4rem] items-center justify-center gap-2">
            <div className="bg-light-gray-custom h-[1px] flex-1"></div>
            <p className="text-p-xs text-gray-custom">OR</p>
            <div className="bg-light-gray-custom h-[1px] flex-1"></div>
          </div>

          <div>
            <Button
              variant="outline"
              className="bg-very-light-gray-custom flex items-center gap-4 rounded-37 border-gray-custom"
            >
              <Image
                width="18"
                height="18"
                src="/google-logo.png"
                alt="google logo"
              />
              Continue with Google
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
