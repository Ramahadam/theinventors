'use client';
import Card from '../_components/Card';
import CloseButton from '../_components/CloseButton';
import Input from '../_components/Input';
import HeadingMedium from '../_components/HeadingMeduim';
import Button from '../_components/Button';

export default function Home() {
  return (
    <div className="h-[95%]">
      <Card className="!pt-[7rem] px-[2rem] !justify-normal gap-8">
        <CloseButton />
        <HeadingMedium className="mt-[10rem]">
          Lorem ipsum dolor sit adipiscing elit?
        </HeadingMedium>
        <Input />
        <div className="flex w-full items-center justify-center">
          <Button
            variant="linear"
            className="mt-[4rem] w-[19rem] rounded-37 text-[2rem]"
          >
            Continue
          </Button>
        </div>
      </Card>
    </div>
  );
}
