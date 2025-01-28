import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../_components/Card';
import TimeExpected from '../_components/TimeExpected';

export default function Page() {
  return (
    <div className="">
      <div className="absolute top-0 flex h-[14.5rem] w-full items-center justify-between rounded-bl-[1.5rem] rounded-br-[1.5rem] bg-color-primary-linear px-4">
        {/* Left arrow placeholder */}
        <div className="h-8 w-8">
          <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
        </div>

        <h2 className="text-center text-h4 font-bold text-white">
          3D Illustration Course
        </h2>

        {/* Bookmark placeholder */}
        <div className="h-10 w-10">
          <img src="/bookmark.svg" alt="bookmark" />
        </div>
      </div>

      <Card className="absolute top-[10.5rem]">
        <div className="flex h-[16.7rem] items-center justify-between gap-2 px-[2rem] py-[2.5rem]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-p-lg font-semibold tracking-tighter">
                Lorem ipsum
              </p>
              <TimeExpected time="10 Min" />
            </div>
            <p className="w-[90%] text-balance leading-7 tracking-tighter">
              Win 2 Sweat Hero Battles to complete the misssion and eatn 3
              $SWEAT
            </p>
          </div>

          <div className="w-[16rem]">
            <img src="/gift.png" alt="gift image" />
          </div>
        </div>
      </Card>
    </div>
  );
}
