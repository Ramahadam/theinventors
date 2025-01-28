'use client';
import Card from './_components/Card';
import ImageSlider from './_components/ImageSlider';
import PhoneNumberSection from './_components/PhoneNumberSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const images = [
  {
    src: './robot-arm.png',
    alt: 'robotic arm',
  },
  {
    src: './womanchats.png',
    alt: 'woman chats',
  },
  {
    src: './people-search.png',
    alt: 'people search',
  },
  {
    src: './puzzle-playing.png',
    alt: 'puzzle playing',
  },
];

export default function Home() {
  return (
    <div>
      <Card className="mt-[2rem]">
        <div className="card-header flex flex-col items-center">
          <ImageSlider images={images} />

          <p className="text-p-lg font-medium">
            Experience the two <span className="block">teacher advantage</span>
          </p>
        </div>

        <PhoneNumberSection icon={<FontAwesomeIcon icon={faInfoCircle} />} />
      </Card>
    </div>
  );
}
