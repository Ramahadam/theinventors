'use client';
import Card from '@/app/_components/Card';
import RadioInput from '@/app/_components/RadioInput';
import { useState } from 'react';
import DotsSlider from '@/app/_components/DotsSlider';

const images = [
  { src: '/buildables-robot.png', alt: 'Image 1' },
  { src: '/buildables-robot.png', alt: 'Image 2' },
  { src: '/buildables-robot.png', alt: 'Image 3' },
];

export default function Page() {
  const [selected, setSelected] = useState('yes');
  return (
    <div className="">
      <Card className="!rounded-[19px] !py-[2rem] px-[2.4rem]">
        <div className="flex items-center justify-between text-p-sm font-medium">
          <p>Project Name</p>
          <p>Mission1</p>
        </div>
      </Card>

      <Card className="mt-8 !py-[2rem] px-[2.4rem]">
        <h2 className="text-h3 font-medium">Do you have the kit?</h2>

        <div className="m mt-[5rem] flex flex-row gap-4">
          <RadioInput
            label="Yes"
            name="answer"
            checked={selected === 'yes'}
            onChange={() => setSelected('yes')}
          />
          <RadioInput
            label="No"
            name="answer"
            checked={selected === 'no'}
            onChange={() => setSelected('no')}
          />
        </div>

        <div className="mb-[2rem] mt-[6rem]">
          <DotsSlider images={images} />
        </div>
      </Card>
    </div>
  );
}
