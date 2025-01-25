'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function SimpleSlider() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      navigation={false}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper  w-72"
    >
      <SwiperSlide>
        <img src="./robot-arm.png" alt="robotic arm" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./womanchats.png" alt="woman chats" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./people-search.png" alt="people search" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./puzzle-playing.png" alt="puzzle playing" />
      </SwiperSlide>
    </Swiper>
  );
}
