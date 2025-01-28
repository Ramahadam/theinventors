import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CloseButton({ onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 absolute top-10 right-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors ${
        className || ''
      }`}
    >
      <FontAwesomeIcon icon={faXmark} className="text-white text-xl" />
    </button>
  );
}

export default CloseButton;
