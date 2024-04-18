import React from 'react';
import type { Metadata } from 'next';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

export const metadata: Metadata = {
  title: 'VerbalScripts | Services',
};

export default function Page() {
  const solutions: Array<NavLabel> = [
    {
      name: 'Court reporting & Legal',
      description:
        'We convert audio/video content into transcripts quickly and securing to save law firms, investigators, police force, or research firms time and money.',
      href: '/solutions/legal',
      imgUrl: '/icons/legal-document.png',
    },
    {
      name: 'Corporate & general business',
      description:
        'Customized for your large volume needs, including a variety of enterprise security requirements.',
      href: '/solutions/enterprise',
      imgUrl: '/icons/paper.png',
    },
    {
      name: 'Media production',
      description:
        'The very best in human intelligence requires top quality training data for speech NLP and computer vision models.',
      href: '/solutions/ai',
      imgUrl: '/icons/video-editor.png',
    },
    {
      name: 'Digital & online learning',
      description:
        'Fast, easy lecture and dissertation transcripts for students or faculty, compatible with NVivo and other research platforms.',
      href: '/solutions/education',
      imgUrl: '/icons/online-learning.png',
    },

    {
      name: 'Government',
      description:
        'Making live events, meetings, ad campaigns and press briefings more accessible and actionable.',
      href: '/solutions/government',
      imgUrl: '/icons/policy.png',
    },
  ];

  const features = [
    {
      name: 'First Draft',
      features: [
        '-98% accuracy',
        'Average next day delivery',
        'Speaker IDs available',
        'Timestamps available',
      ],
      price: '0.79$ per minute',
    },
    {
      name: 'Standard',
      features: [
        '99% accuracy guaranteed',
        '1-3 business day delivery',
        'Speaker IDs available',
        'Timestamps available',
      ],
      price: '1.25$ per minute',
    },
    {
      name: 'Verbatin',
      features: [
        'Every utterance captured',
        '2-5  business day delivery',
        'Speaker IDs available',
        'Timestamps available',
      ],
      price: '2.00$ per minute',
    },
  ];

  return (
    <div className='bg-zinc-800 max-h-screen overflow-y-scroll relative'>
      <AppHeader />

      <div className='relative bg-teal-600 h-auto isolate px-6 pt-14 lg:px-8'>
        <div className='landing-page-video-wrapper'></div>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='max-w-3xl pb-60 pt-0 md:py-32 lg:py-32 md:mx-20 lg:mx-40'>
          <div className='text-left'>
            <h1 className='text-5xl font-bold tracking-tight text-white sm:text-6xl'>
              Transcription Solutions
            </h1>

            <p className='mt-6 text-3xl leading-8 text-gray-100'>
              99%+ Accuracy, fast and secure
            </p>
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* transcription process */}
      <div className='bg-white py-14 md:py-24 -mt-40'>
        <dl className=' mx-auto grid max-w-none px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:max-w-7xl xl:max-w-7xl '>
          {[...features].map((feature) => (
            <div
              key={feature.name}
              className='relative shadow-md bg-white pl-4 md:pl-6 transition  p-5  border-r border-gray-300'
            >
              <dt className='text-xl font-semibold leading-7 text-gray-800'>
                {feature.name}
              </dt>
              <dd className='mt-1 text-lg leading-7 text-gray-700'>
                <ul className='list-disc ml-5'>
                  {feature.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
              <p className='mt-5 bg-orange-100 rounded-md px-4 py-3 text-orange-500 font-semibold text-lg'>
                {'Starting at '} {feature.price}
              </p>
            </div>
          ))}
        </dl>
      </div>

      <div className='bg-white py-14 md:py-24'>
        <div className='mx-auto max-w-2xl lg:text-center '>
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">What we do</h2> */}
          <p className='text-3xl font-bold  text-gray-800 sm:text-4xl'>
            Popular Industries We Serve
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>

        <div className='mx-auto pt-16 max-w-3xl sm:pt-20 lg:pt-24 lg:max-w-5xl'>
          <dl className='mx-auto grid max-w-none px-6 grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-7xl xl:max-w-7xl lg:grid-cols-2 lg:gap-y-16'>
            {[...solutions].map((feature) => (
              <a
                href={'/solutions' + feature.href}
                key={feature.name}
                className='relative pl-16 transition  hover:bg-white/5 hover:-translate-y-5 hover:ring-1 hover:ring-white/10 rounded-lg p-4'
              >
                <dt className='text-xl font-semibold leading-7 text-gray-800'>
                  <div className='absolute left-2 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    {feature.icon != undefined ? (
                      <feature.icon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    ) : feature.imgUrl != undefined ? (
                      <img
                        src={feature.imgUrl}
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    ) : null}
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-1 text-lg leading-7 text-gray-700'>
                  {feature.description}
                </dd>
                <p className='text-orange-500 font-semibold text-lg underline underline-offset-4'>
                  Learn More
                </p>
              </a>
            ))}
          </dl>
        </div>
      </div>
      {/* validation section */}

      <div className='bg-white'>
        <div className='bg-indigo-800 relative overflow-hidden transition transform-gpu'>
          <svg
            viewBox='0 0 1024 1024'
            className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
            aria-hidden='true'
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                <stop stopColor='#7775D6' />
                <stop offset={1} stopColor='#E935C1' />
              </radialGradient>
            </defs>
          </svg>
          <div className='mx-auto  py-24  sm:px-6  lg:px-8'>
            <div className='relative isolate    px-6 pt-16   sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0'>
              <div className='mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto  lg:text-left'>
                <h2 className='text-3xl  leading-10 md:text-3xl font-bold  text-white '>
                  Ready to succeed with our Transcription Solutions
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-100'>
                  Click the order now button to get started today or request a
                  quote if your project is complex.
                </p>
                <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
                  <a
                    href='#'
                    className='text-lg font-semibold leading-6 text-white px-6 py-3.5 ring-2 ring-inset ring-white rounded-md transition hover:-translate-y-1 hover:shadow-2xl'
                  >
                    Order Now
                  </a>
                  <a
                    href='#'
                    className='rounded-md bg-orange-500 px-6 py-3.5 text-lg font-semibold text-white transition hover:-translate-y-1 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                  >
                    Get a Qoute
                  </a>
                </div>
              </div>
              <div className='hidden md:block relative mt-16 h-80 lg:mt-8 pr-10'>
                <img
                  className=' w-[28rem] max-w-none'
                  src='freelancer-work-from-home-image.webp'
                  alt='App screenshot'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white  py-32 md:py-24'>
        <div className='mx-auto max-w-7xl xl:max-w-6xl px-6 lg:px-8 xl:px-22'>
          <h2 className='text-center text-4xl font-semibold leading-8 text-gray-800'>
            Trusted Partner to Hundreds of Brands Worldwide…
          </h2>
          <div className='mx-auto mt-10 grid  grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 '>
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg'
              alt='Transistor'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg'
              alt='Reform'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg'
              alt='Tuple'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg'
              alt='SavvyCal'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg'
              alt='Statamic'
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
