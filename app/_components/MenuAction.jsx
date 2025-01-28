import CaptureIcon from './CaptureIcon';
import LabIcon from './LabIcon';
import LiveIcon from './LiveIcon';

export default function MenuAction() {
  return (
    <div className="bg-dark-meduim relative mt-5 flex h-[7.4rem] items-center justify-between rounded-15 py-2">
      <div className="flex items-center justify-start">
        <div className="relative">
          <LabIcon />
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-semibold text-white">
            Lab
          </span>
        </div>
      </div>

      <div className="absolute -top-8 left-1/2 flex h-[7rem] w-[7rem] -translate-x-1/2 items-center justify-center rounded-full border-4 border-black bg-color-primary-linear">
        <button className="bg-color flex h-20 w-20 items-center justify-center rounded-full bg-color-primary-linear">
          <CaptureIcon />
        </button>
      </div>

      <div className="flex h-full flex-1 items-center justify-end rounded-r-2xl">
        <div className="relative mt-[1.9rem] flex flex-col items-center pr-[2.6rem]">
          <LiveIcon />
          <span className="mt-1 font-light text-white">Live</span>
        </div>
      </div>
    </div>
  );
}
