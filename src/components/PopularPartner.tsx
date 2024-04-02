import React from 'react';
import LogoSlider from './LogoSlider';

export default function PopularPartner() {
  const TrustedClients = [
    {
      name: 'Kaltura',
      imgUrl: 'https://verbit.ai/wp-content/uploads/2022/08/kaltura-logo.svg',
    },
    {
      name: 'Transistor',
      imgUrl:
        'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg',
    },
    {
      name: 'Udacity',
      imgUrl: 'https://verbit.ai/wp-content/uploads/2022/08/udacity-logo-.svg',
    },
    {
      name: 'Sphere',
      imgUrl:
        'https://verbit.ai/wp-content/uploads/2024/01/Sphere2023-horizontal-wordmark-tm-black-300x80-1.webp',
    },
    {
      name: 'Udacity',
      imgUrl: 'https://verbit.ai/wp-content/uploads/2022/08/udacity-logo-.svg',
    },
    {
      name: 'Fox',
      imgUrl: 'https://verbit.ai/wp-content/uploads/2022/08/fox-logo.svg',
    },
    {
      name: 'Google',
      imgUrl: 'https://verbit.ai/wp-content/uploads/2022/08/google-logo.svg',
    },
    {
      name: 'Reform',
      imgUrl:
        'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg',
    },
    {
      name: 'Tuple',
      imgUrl: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
    },
    {
      name: 'Savvycal',
      imgUrl:
        'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg',
    },
    {
      name: 'Statamic',
      imgUrl:
        'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg',
    },
    {
      name: 'Reform',
      imgUrl:
        'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg',
    },
    {
      name: 'Tuple',
      imgUrl: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
    },
  ];

  return (
    <div className=' py-10 md:py-5' style={{ backgroundColor: '#f9f8f2' }}>
      <div className='mx-auto max-w-full xl:max-w-8xl px-6 lg:px-8 xl:px-10'>
        {/* <h2 className='text-center text-lg font-semibold leading-8 text-gray-900'>
            Trusted by the world’s most innovative teams
          </h2> */}
        <div className='mx-auto   sm:max-w-xl  lg:mx-0 lg:max-w-none'>
          <LogoSlider partners={TrustedClients} />
        </div>
        {/* <div className='mx-auto mt-10 grid  grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 '>
           
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg'
              alt='Tuple'
              width={158}
              height={48}
            />
          
          </div> */}
      </div>
    </div>
  );
}
