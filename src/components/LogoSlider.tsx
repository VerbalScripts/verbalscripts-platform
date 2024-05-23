'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

export default function LogoSlider({ partners }: LogoComponentProp) {
  return (
    <> 
      <div className='hidden md:flex items-start flex-wrap md:flex-nowrap my-0 md:my-4 gap-x-10 swiper-container'>
        <div className='w-full md:max-w-full'>
          <div className='block'>
            <Swiper
              watchSlidesProgress={true}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
              spaceBetween={20}
              modules={[Autoplay]}
              slidesPerView={5}
              className='mySwiper md:hidden py-10'
            >
              {partners.map((item: ParterLogo) => (
                <SwiperSlide key={item.name}>
                  <img
                    key={item.name}
                    className='max-h-16 md:min-w-[40rem]  lg:min-w-[30rem] object-contain'
                    src={item.imgUrl}
                    alt={item.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className='flex md:hidden items-start flex-wrap md:flex-nowrap my-0 md:my-8 gap-x-10 swiper-container'>
        <div className='w-full md:max-w-full'>
          <div className='block'>
            <Swiper
              watchSlidesProgress={true}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={10}
              modules={[Autoplay]}
              slidesPerView={2}
              className='mySwiper md:hidden py-10'
            >
              {partners.map((item: ParterLogo) => (
                <SwiperSlide key={item.name}>
                  <img
                    key={item.name}
                    className='max-h-10 min-w-[25rem] object-contain'
                    src={item.imgUrl}
                    alt={item.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
