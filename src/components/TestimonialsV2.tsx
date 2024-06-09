'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';

export default function TestimonialsV2({ testimonials }: TestimonyProp) {
  return (
    <section className=' py-14 sm:py-32' style={{ background: '#f9f8f2' }}>
      <div className='mx-auto max-w-7xl relative'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
        <div className='absolute  right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />

        <div className='flex flex-wrap lg:flex-nowrap items-start space-y-16 lg:space-x-6 lg:space-y-0 px-6 md:px-16 lg:px-24'>
          <div className='w-full'>
            <h2 className='text-xl font-bold leading-7 capitalize footer-title'>
              What our customers say
            </h2>
            <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
              What people are saying about{' '}
              <span className='text-orange-400'>VerbalScripts</span>
            </p>
          </div>
          <div className='lg:order-2 lg:min-w-[40rem] w-full text-left'>
            <div className=''>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                pagination={{
                  clickable: true,
                }}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                className='py-16'
              >
                {testimonials.map((testimony: Testimony, index: number) => (
                  <SwiperSlide key={testimony.name + index}>
                    <div className='flex flex-col items-start relative'>
                      <img
                        src={testimony.imageUrl}
                        className='object-cover w-[10rem] h-[10rem] rounded-full'
                        alt=''
                      />
                      <figure className='mt-10'>
                        <blockquote className='text-left text-2xl leading-7  md:leading-8 text-gray-600 md:text-2xl'>
                          <p>{testimony.description}</p>
                        </blockquote>
                      </figure>
                      <div className='mt-10'>
                        <div className='text-gray-700 text-md md:text-xl font-semibold'>
                          {testimony.name}
                        </div>
                        <div className='text-gray-500 text-md md:text-xl'>
                          {testimony.occupation}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
