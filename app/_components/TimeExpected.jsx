import { faAnglesRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function TimeExpected({ time }) {
  return (
    <p className="flex items-center gap-1 rounded-[4px] border-[1px] border-black px-2 py-1">
      <FontAwesomeIcon
        icon={faClock}
        className="h-[1.9rem] w-[1.9rem] rounded-full border-[1px] border-black bg-black text-white"
      />
      <span className="font-semibold">{time} </span>game
    </p>
  );
}
