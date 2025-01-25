'use client';
import Image from 'next/image';
import Card from './_components/Card';
import ButtonNumber from './_components/ButtonNumber';
import HeadingBig from './_components/HeadingBig';
import ImageSlider from './_components/ImageSlider';
import PhoneNumberSection from './_components/PhoneNumberSection';

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
      <Card>
        <div className="card-header flex flex-col items-center">
          <ImageSlider images={images} />

          <p className="text-xl font-medium">
            Experience the two <span className="block">teacher advantage</span>
          </p>
        </div>

        <PhoneNumberSection />
      </Card>
    </div>
  );
}
