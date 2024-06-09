import React from 'react';
import type { Metadata } from 'next';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import PopularPartner from '@/components/PopularPartner';

export const metadata: Metadata = {
  title: 'VerbalScripts | Industry Solutions',
};

export default function Page() {
  const industry_solutions = [
    {
      imgUrl: '/medical_transcription/patientnotes.svg',
      title: 'Court Reporting & Legal',
      description:
        'Navigate the legal landscape with confidence. From courtroom proceedings to legal dictations, our meticulous transcripts support legal professionals in their pursuit of justice.',
    },
    {
      imgUrl: '/medical_transcription/operativereport.svg',

      title: 'Corporate & General Business',
      description:
        'Streamline your business operations with efficient transcription solutions. From boardroom meetings to client presentations, our accurate transcripts keep your business communication crystal clear.',
    },
    {
      imgUrl: '/medical_transcription/consultation.svg',

      title: 'Media Production',
      description:
        'Amplify your online presence with our transcription services. Whether it"s podcasts, interviews, or social media content, we transform audio and video into engaging, searchable text that captivates audiences.',
    },
    {
      imgUrl: '/medical_transcription/dischargesummary.svg',

      title: 'Discharge Summaries',
      description:
        'Revolutionize education with accessible transcripts. Our e-learning transcription services ensure that educational content is inclusive and easy to digest, fostering a dynamic learning environment for students worldwide.',
    },
    {
      imgUrl: '/medical_transcription/progressreport.svg',

      title: 'Education',
      description:
        'Safeguard patient information with our HIPAA-compliant transcription services. From medical notes to telemedicine consultations, our transcripts ensure accuracy and confidentiality in healthcare communication.',
    },
    {
      imgUrl: '/medical_transcription/medicalhistory.svg',
      title: 'Government',
      description:
        'Uphold transparency and accountability with reliable documentation. From public hearings to policy discussions, our transcripts serve as a cornerstone of governmental integrity and public trust.',
    },
    
  ];

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative   h-auto  px-6 py-20 md:pt-0 pb-10 md:pb-30 md:py-24 lg:py-24 md:px-20 lg:px-28'>
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
        {/* <div className='absolute -z-[1] blur-sm bottom-0 right-0 -rotate-180 left-0 why_industry_bg'></div> */}
        <div className='flex flex-wrap  lg:flex-nowrap items-center lg:space-x-10  space-y-10'>
          <div className='max-w-2xl lg:max-w-4xl'>
            <h1 className='text-4xl font-bold capitalize  text-white sm:text-5xl'>
              Popular Industry Solutions
            </h1>

            <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-100'>
              Explore The Best Solutions For The Betterment of Your Industries
            </p>

            <div className='mt-10'>
              <a
                href='/upload-files'
                className='inline-flex rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
              >
                <span className='flex'>Request a Quote</span>
              </a>
            </div>
          </div>
          <div className='md:min-w-[20rem] lg:max-w-[30rem]'>
            <img src='/industry/industry-landing.jpg' className='' alt='' />
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

      <div className='bg-gray-100 py-0'>
        <PopularPartner />
      </div>

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap md:flex-nowrap items-center gap-x-6'>
            <div className='md:min-w-[25rem] lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                What Makes Our Transcription Services Stand Out?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                <span className='relative z-10'>
                  Crafting Clarity{' '}
                  <span className='z-10 absolute -bottom-2.5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>
                for Every Sector: Your Industry, Our Expertise.
              </p>
            </div>
            <div>
              <p className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-600'>
                At VerbalScripts, we believe in the power of tailored solutions
                to transform industries. Explore how our transcription services
                cater to diverse sectors, empowering businesses and
                professionals with accurate and accessible documentation.
              </p>
              <div className='mt-10'>
                <a
                  href='/request-a-quote'
                  className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span>Get a Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white py-14 md:py-24'>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='mx-auto max-w-2xl lg:text-center '>
            <h2 className='text-base font-semibold leading-7 text-indigo-600'>
              What are the Industries Offered?
            </h2>
            <p className='text-3xl font-bold  text-gray-800 sm:text-4xl'>
              Tailored Solutions for your Industry
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
          </div>
        </div>
        <div className='mx-auto max-w-7xl py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid justify-evenly grid-cols-1 md:grid-cols-2   lg:gap-x-8 gap-y-16  lg:grid-cols-2 lg:gap-y-5  pb-12'>
            {industry_solutions.map((content) => (
              <div key={content.title}>
                <div className='max-h-[18rem]'>
                  <img
                    src={content.imgUrl}
                    className='rounded-sm object-cover'
                    alt=''
                  />
                </div>
                <div className='px-8'>
                  <div className='mb-5 text-center text-3xl md:text-3xl text-gray-900 capitalize font-bold mt-5'>
                    {content.title}
                  </div>

                  <div className='text-gray-600 text-center capitalize'>
                    {content.description}
                  </div>
                  <div className='mt-5 text-center'>
                    <a
                      href='/upload-files'
                      className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-5 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                    >
                      <span>Order Now</span>
                      <FontAwesomeIcon
                        className='ml-4 w-5'
                        icon={faLongArrowRight}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-6'>
            <div className='md:min-w-[25rem] lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Dont Know Where to Start?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                Experience the {}
                <span className='relative z-10'>
                  difference{' '}
                  <span className='z-10 absolute -bottom-2.5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>
                our solutions can make for your industry.
              </p>
              <div className='mt-10'>
                <a
                  href='/contact-us'
                  className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
            <div>
              <div className='px-6 bg-red-100 md:mt-10 lg:mt-0 z-[15] relative w-full after:rounded-xl after:transition-all after:duration-100 after:absolute after:-z-[5] after:left-5  after:top-5 after:md:w-[70%] after:lg:w-[85%] after:h-full hover:after:top-10 hover:after:left-10 after:bg-orange-300'>
                <img
                  src='/industry/why-industry.jpg'
                  className='  w-[90vw] -ml-7 object-contain lg:-ml-0 md:w-[28rem] max-w-none bg-white/5 ring-1 ring-white/10'
                  alt=''
                />
              </div>

              <p className='mx-auto max-w-2xl mt-20 text-lg leading-8 text-gray-700'>
                From legal firms, media agency, corporation, educational
                institution, government entity to healthcare providers, we{"'"}
                re here to tackle your transcription needs with precision and
                efficiency. Reach out today to transform your industry with
                VerbalScripts!
              </p>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
