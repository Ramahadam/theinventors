'use client';
import Card from '../_components/Card';
import CloseButton from '../_components/CloseButton';
// import Input from '../_components/Input';
import HeadingMedium from '../_components/HeadingMeduim';
// import Button from '../_components/Button';
import { useState } from 'react';
import RadioInput from '../_components/RadioInput';

export default function Home() {
  const [selected, setSelected] = useState('yes');

  return (
    <div className="h-[95%]">
      <Card className="!justify-normal gap-8 px-[2rem] !pt-[7rem]">
        <CloseButton />
        <HeadingMedium className="mt-[10rem]">
          Lorem ipsum dolor sit adipiscing elit?
        </HeadingMedium>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <RadioInput
            label="Yes"
            name="answer"
            checked={selected === 'yes'}
            onChange={() => setSelected('yes')}
          />
          <RadioInput
            label="No"
            name="answer"
            checked={selected === 'no1'}
            onChange={() => setSelected('no1')}
          />
          <RadioInput
            label="No"
            name="answer"
            checked={selected === 'no2'}
            onChange={() => setSelected('no2')}
          />
          <RadioInput
            label="No"
            name="answer"
            checked={selected === 'no3'}
            onChange={() => setSelected('no3')}
          />
        </div>
      </Card>
    </div>
  );
}
