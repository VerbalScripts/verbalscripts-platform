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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [width, setWidth] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [load, setFirstLoad] = useState(true);

  function findMiddleNumber() {
    const middleIndex = Math.floor(itemsPerView / 2);
    const indexArr = Array(itemsPerView)
      .fill(0)
      .map((_, index) => index);
    if (indexArr.length % 2 === 0) {
      // Even number of elements
      const middle1 = indexArr[middleIndex];
      const middle2 = indexArr[middleIndex - 1];
      setActiveIndex(() => (middle1 + middle2) / 2);
    } else {
      // Odd number of elements

      setActiveIndex(() => indexArr[middleIndex]);
    }
  }

  useEffect(() => {
    if (swiper && load) {
      findMiddleNumber();
      setFirstLoad(false);
    } else {
      console.log(swiper);
      const timer = setTimeout(() => {
        swiper.slideTo(activeIndex);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [swiper]);

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const changeActive = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 699) {
        setItemsPerView(3);
      }
    }
  }, []);

  // useEffect(() => {
  // findMiddleNumber();
  // }, []);

  return (
    <section className='relative py-14 sm:py-20 bg-white'>
      <div className='mx-auto max-w-7xl'>
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

        <div className=''>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onSwiper={setSwiper}
            className='w-full h-96 flex justify-center-center '
          >
            {testimonials.map((testimony: Testimony, index: number) => (
              <SwiperSlide key={testimony.name + index}>
                <figure className='mt-10'>
                  <blockquote className='text-center text-base  leading-8 text-gray-600 sm:text-2xl sm:leading-9 px-6  md:px-24 lg:px-44'>
                    <p>{testimony.description}</p>
                  </blockquote>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='flex relative'>
          <div className='bg-white absolute -bottom-[3rem] z-[25] right-0 left-0 h-24'></div>
          {[...testimonials.slice(0, itemsPerView)].map(
            (testimony: Testimony, index: number) => (
              <div key={index} className='relative'>
                <div
                  className={classNames(
                    'mt-4 flex-col -top-52 rotate-12 z-[11] bg-white shadow-md secondary-border border rounded-xl py-2 px-3  absolute flex items-center justify-center space-x-3 text-base',

                    index == activeIndex ? '' : 'hidden',
                  )}
                >
                  <span className='absolute -bottom-5 w-10 h-10 -z-[1] -rotate-45 bg-white shadow-md secondary-border border-l border-b'></span>
                  <div className='font-semibold text-gray-700'>
                    {testimony.name}
                  </div>
                  {/* <svg
                    viewBox='0 0 2 2'
                    width={3}
                    height={3}
                    aria-hidden='true'
                    className='fill-gray-900'
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg> */}
                  <div className='text-gray-500'>{testimony.occupation}</div>
                </div>
                <div
                  onClick={() => changeActive(index)}
                  className={classNames(
                    'relative transition-all flex overflow-x-hidden justify-center items-center  border-8 border-white min-w-[35vw]  min-h-[35vw] md:min-h-[120px]  md:min-w-[120px] lg:min-h-[20vw] lg:min-w-[20vw] rounded-full',
                    `z-[${10 + index + 2}]`,
                    // index % 2 == 0 ? '-translate-x-10' : 'translate-x-10',
                    index == 0
                      ? 'translate-x-5 md:translate-x-5 lg:translate-x-10'
                      : '-translate-x-10',
                    index == itemsPerView - 1
                      ? '-translate-x-10 md:-translate-x-20'
                      : '',
                    index == activeIndex
                      ? 'bg-yellow-400 scale-150  z-[20]'
                      : ' testimonials-bg',
                    index <= activeIndex
                      ? `scale-[1.${index + 1}]`
                      : `scale-[1.${itemsPerView - index}]`,
                  )}
                  style={{}}
                >
                  <img className='h-40 w-40' src={testimony.imageUrl} alt='' />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
