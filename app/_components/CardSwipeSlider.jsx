'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '@/app/globals.css';
// import required modules
import { EffectCards } from 'swiper/modules';
import CardMission from './CardMission';

export default function CardSwipeSlider({ children }) {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        cardsEffect={{
          slideShadows: false,
          perSlideOffset: 8,
          perSlideRotate: 0,
          rotate: false,
        }}
        direction="horizontal"
        initialSlide={0}
        preventInteractionOnTransition={true}
        speed={400}
      >
        <SwiperSlide>
          <CardMission time="10 Min" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMission time="10 Min" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMission time="10 Min" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMission time="10 Min" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
