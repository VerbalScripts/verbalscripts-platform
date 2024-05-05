'use client';

import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper as SwiperType } from 'swiper/types';
import { classNames } from '@/utils/classNames';

export default function Testimonials({ testimonials }: TestimonyProp) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [swiper, setSwiper] = useState<ReturnType<SwiperType>>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  function findMiddleNumber() {
    const middleIndex = Math.floor(testimonials.length / 2);
    const indexArr = Array(testimonials.length)
      .fill(0)
      .map((_, index) => index);
    if (indexArr.length % 2 === 0) {
      // Even number of elements
      const middle1 = indexArr[middleIndex];
      const middle2 = indexArr[middleIndex - 1];
      setActiveIndex(() => (middle1 + middle2) / 2);
    } else {
      // Odd number of elements
      console.log('ssss number ', indexArr[middleIndex]);

      setActiveIndex(() => indexArr[middleIndex]);
    }
  }

  useEffect(() => {
    if (swiper) {
      console.log('logginf index');
      findMiddleNumber();

      const timer = setTimeout(() => {
        swiper.slideTo(4);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [swiper]);

  useEffect(() => {
    console.log('change akin');
    if (swiper) {
      console.log('package index ', activeIndex);
      swiper.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const changeActive = (index: number) => {
    setActiveIndex(index);
  };

  // useEffect(() => {
  // findMiddleNumber();
  // }, []);

  return (
    <section className='relative py-14 sm:py-20 bg-white'>
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
      <div className='absolute  right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />

      <div className='mx-auto max-w-2xl text-left lg:text-center'>
        <p className='mt-2 text-5xl font-bold  section-title text-gray-900 sm:text-5xl'>
          What people are saying about{' '}
          <span className='text-orange-400'>VerbalScripts</span>
        </p>
        {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
      </div>

      <div className='max-auto max-w-4xl'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onSwiper={setSwiper}
          className='w-full h-96 flex justify-center-center'
        >
          {testimonials.map((testimony: Testimony, index: number) => (
            <SwiperSlide key={testimony.name + index}>
              <figure className='mt-10'>
                <blockquote className='text-center text-xl font-semibold leading-8 text-gray-700 sm:text-2xl sm:leading-9'>
                  <p>{testimony.description}</p>
                </blockquote>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
   <div className='flex overflow-x-hidden'>
   {testimonials.map((testimony: Testimony, index: number) => (
        <div
          key={index}
          onClick={() => changeActive(index)}
          className={classNames(
            'relative  flex overflow-x-hidden justify-center items-center  border-8 border-white  min-h-[15rem] min-w-[15rem] rounded-full',
            `z-[${10 + index + 2}]`,
            index % 2 == 0 ? '-translate-x-10': ''
          )}
          style={{ background: '#8468F5'}}
        >
          <img className='h-40 w-40' src={testimony.imageUrl} alt='' />
          <div className='mt-4 -top-24   absolute flex items-center justify-center space-x-3 text-base'>
            <div className='font-semibold text-gray-700'>{testimony.name}</div>
            <svg
              viewBox='0 0 2 2'
              width={3}
              height={3}
              aria-hidden='true'
              className='fill-gray-900'
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className='text-gray-500'>{testimony.occupation}</div>
          </div>
        </div>
      ))}
   </div>
    </section>
  );
}
