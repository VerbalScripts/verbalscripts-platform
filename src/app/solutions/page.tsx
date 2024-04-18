import React from 'react';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import SolutionsLanding from '@/components/SolutionsLanding';
import PopularPartner from '@/components/PopularPartner';

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

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />
      {/* landing page */}
      <SolutionsLanding
        title={'Legal transcription built for scale'}
        imgUrl={'/affordable.jpg'}
        content={
          ' Verbit’s legal transcription solutions were designed by legal experts who understand the reliability, accuracy and customization that the industry requires. We support everything from legal proceedings like depositions, hearings and examinations to digital evidence like dash cam footage and 911 calls.'
        }
        href={'/upload-files?type=legal'}
      />
      {/* industries */}
      <PopularPartner />
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
      ;{/* validation section */}
      {/* <CallToActionBanner fn={setOpen} /> */}
      <AppFooter />
    </div>
  );
}
