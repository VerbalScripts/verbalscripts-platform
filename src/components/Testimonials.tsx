

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Pagination, Navigation } from 'swiper/modules';



export default function Testimonials({testimonials}: TestimonyProp ) {
  return (
      <section className="relative px-6 py-14 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute  right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-2xl lg:text-center">
         
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Trusted by over 4,000 clients worldwide
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
       
          <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-96"
      >
        { testimonials.map((testimony:any, index: number) =>  <SwiperSlide
            key={testimony.name + index}

        >
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-300 sm:text-2xl sm:leading-9">
            <p>
              {testimony.description}
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src={testimony.imageUrl}
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                        <div className="font-semibold text-gray-200">{ testimony.name}</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
                        <div className="text-gray-300">{ testimony.occupation }</div>
            </div>
          </figcaption>
        </figure>

        </SwiperSlide>) }
      </Swiper>
            
      </div>
    </section>
  )
}
