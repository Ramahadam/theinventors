import AvatarStack from '@/app/_components/AvatarStack';
import Button from '@/app/_components/Button';
import Card from '@/app/_components/Card';
import { faAnglesRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import TimeExpected from './TimeExpected';

export default function CardMission({ time }) {
  return (
    <Card className="relative mt-[4rem] py-4">
      <div className="card-header p-4">
        <h2 className="text-h4 font-semibold tracking-tighter">Project Name</h2>
        <p className="text-p-sm text-gray-custom">Mission 1</p>
      </div>
      <div className="card-body relative h-[200px]">
        <Image
          src="/mission-1.png"
          alt="Mission 1"
          fill
          className="w-full object-cover"
        />
      </div>
      <div className="mt-2 flex items-center justify-between px-4 py-2">
        <h3 className="text-h5 tracking-tighter">Win 2 Challenges</h3>
        <TimeExpected time={time} />
      </div>
      <p className="px-4 py-2 leading-8">
        Win 2 Sweat Hero Battles to complete the misssion and eatn 3 $SWEAT
      </p>

      <div className="mb-4 mt-7 flex items-center gap-2 px-4">
        <div className="h-[8px] w-[7rem] rounded-full bg-color-primary-linear"></div>
        <div className="h-[8px] w-[7rem] rounded-full bg-color-primary-linear"></div>
        <div className="h-[8px] w-[7rem] rounded-full bg-gray-200"></div>
        <div className="h-[8px] w-[7rem] rounded-full bg-gray-200"></div>
      </div>

      <div className="gap-2 px-4">
        <p className="text-p-md">Tools</p>
        <div className="flex justify-between gap-2">
          <div className="flex h-[5.9rem] w-[16rem] items-center gap-2 rounded-15 bg-black px-2 py-1 text-white">
            <AvatarStack />
            <span className="text-p-xs font-semibold">30+ </span>
            <span className="font-semibold">Challenge</span>
          </div>
          <Button className="flex !h-[5.9rem] items-center gap-2 rounded-[14px] bg-color-primary-linear px-8 py-4">
            <span className="text-p-base font-semibold">Start</span>
            <FontAwesomeIcon icon={faAnglesRight} className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
