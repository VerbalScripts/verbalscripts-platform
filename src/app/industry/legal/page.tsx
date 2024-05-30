import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import PopularPartner from '@/components/PopularPartner';

import HowItWorks from '@/components/HowItWorks';
import { classNames } from '@/utils/classNames';

export const metadata: Metadata = {
  title: 'VerbalScripts | Services',
};

export default function Page() {
  const audio_video_theme = [
    {
      imgUrl: '/legal_industry/courtproceeding.svg',
      title: 'Courtroom Proceedings',
      description:
        'Capture every detail of courtroom sessions with our accurate and timely transcriptions, ensuring a reliable record of trials and hearings.',
    },
    {
      imgUrl: '/legal_industry/depositions.svg',

      title: 'Legal Briefs & Summaries',
      description:
        'Streamline your legal documentation with clear and concise transcriptions of briefs and summaries, aiding in effective case management.',
    },
    {
      imgUrl: '/legal_industry/policeinterview.svg',

      title: 'Police Interviews',
      description:
        'Get accurate transcriptions of police interviews, essential for investigations and legal proceedings.',
    },
    {
      imgUrl: '/legal_industry/depositions.svg',

      title: 'Depositions',
      description:
        'Rely on our experienced team to transcribe depositions meticulously, providing precise records for legal review and case preparation.',
    },
    {
      imgUrl: '/legal_industry/minutesmemo.svg',

      title: 'Meeting Minutes & Memos',
      description:
        'Keep track of key points and decisions from legal meetings with our detailed and reliable transcriptions.',
    },
    {
      imgUrl: '/legal_industry/dictation.png',

      title: 'Dictations',
      description:
        'Simplify your workflow with precise transcriptions of dictations, enabling you to focus more on your legal practice.',
    },
    {
      imgUrl: '/legal_industry/arbitration.svg',
      title: 'Arbitration Hearings',
      description:
        'Ensure every word of arbitration proceedings is documented accurately, facilitating fair and transparent resolutions.',
    },
    {
      imgUrl: '/legal_industry/witness.svg',
      title: 'Expert Witness Testimonies',
      description:
        'Ensure accurate documentation of expert witness statements, critical for case development and courtroom presentations.',
    },
    {
      imgUrl: '/legal_industry/affidavit.svg',
      title: 'Affidavits & Legal Statements',
      description:
        'Trust us to provide accurate transcriptions of affidavits and legal statements, crucial for legal documentation and proceedings.',
    },
  ];

  const features = [
    {
      name: 'Confidentiality.',
      description:
        'With stringent confidentiality measures and compliance with GDPR and HIPAA regulations, your sensitive legal information is always protected.',

      imgUrl: '/legal/expertise.svg',
    },
    {
      name: 'Accuracy.',
      description:
        'Our commitment to precision ensures that every legal document is transcribed with meticulous attention to detail.',

      imgUrl: '/legal/assurance.svg',
    },
    {
      name: 'Expert Support.',
      description:
        'Our dedicated team of transcription experts is always available to provide support and assistance, ensuring a seamless experience from start to finish.',
      imgUrl: '/legal/time.svg',
    },
    {
      name: 'Flexibility.',
      description:
        'We offer flexible transcription solutions tailored to your specific needs, deadlines, and budget, ensuring you get the best service possible.',

      imgUrl: '/legal/solutions.svg',
    },
  ];

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='landing-page-alt'>
        <div className='relative mx-auto max-w-7xl  h-auto  px-0 py-0   md:pb-40 lg:py-14  lg:px-20'>
          <div className='landing-page-video-wrapper'></div>
          <div
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className='bg-gray-100  px-6 py-20   pb-40 md:px-10 md:py-20 rounded-xl'>
            <div className='flex flex-wrap  lg:flex-nowrap items-center gap-x-10 '>
              <div className='max-w-2xl md:max-w-4xl'>
                <h1 className='text-4xl font-bold capitalize tracking-tight text-gray-800 sm:text-5xl'>
                  Court and Legal Reporting Industry
                </h1>

                <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
                  Welcome to Verbalscripts your Trusted Partner for Solutions in
                  the legal Industry
                </p>
                <div className='mt-10 flex flex-wrap space-y-5 justify-start lg:flex-nowrap lg:items-center space-x-5'>
                  <a
                    href='/contact-us'
                    className=' rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                  >
                    <span className='flex'>Contect Sales</span>
                  </a>

                  <a
                    href='/contact-us'
                    className='inline-flex flex-nowrap lg:space-x-4  text-xl underline underline-offset-4 transition font-semibold text-indigo-500  hover:text-indigo-300 focus-visible:outline focus-visible:outline-2 '
                  >
                    <span className='flex'>Request a Quote</span>
                    <FontAwesomeIcon
                      className='ml-2 w-5'
                      icon={faLongArrowRight}
                    />
                  </a>
                </div>
                {/* <div className='lg:hidden   py-5 px-5 max-w-[18rem]'>
                <div className='px-4 border-l-4 secondary-border'>
                  <div className='text-gray-700 font-semibold '></div>
                  <div className='text-gray-700 font-semibold mb-3'>
                    From{' '}
                    <span className='py-1.5 px-2 bg-gray-300 rounded-full'>
                      Human Transcripted
                    </span>
                    <br></br>
                    <span className='footer-title text-3xl font-bold'>$1</span>
                    <br></br> per minute 98% accuracy
                  </div>
                </div>
              </div> */}
              </div>
              <div className='mt-10 lg:mt-0 relative   lg:min-w-[30rem]'>
                <img
                  src='/legal/landingedited.svg'
                  className='max-w-[90%] lg:absolute object-cover -top-60'
                  alt=''
                />
              </div>
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
      </div>

      <div className='bg-gray-100 py-0 '>
        <PopularPartner />
      </div>

      <div className='why-legal-section-bg '>
        <div className='mx-auto max-w-7xl py-5 md:py-10     px-5 md:px-16 lg:px-10'>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-6   rounded-md md:px-8 md:py-24 bg-white/50 ring-1 ring-white/10'>
            <div className='lg:min-w-[25rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Why choose us?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                <span className='relative z-10'>
                  Addressing{' '}
                  <span className='z-10 absolute -bottom-2.5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                the Specific Needs of The Legal Industry
              </p>
              <div className='mt-10'>
                <a
                  href='/upload-files'
                  className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span>Order Now</span>
                  <FontAwesomeIcon
                    className='ml-4 w-6'
                    icon={faLongArrowRight}
                  />
                </a>
              </div>
            </div>
            <div>
              <dl className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
                {features.map((feature, index) => (
                  <div
                    key={feature.name}
                    className={classNames(
                      'relative py-8 px-4  shadow-sm bg-gray-50 rounded-xl',
                      index % 2 == 0 ? '' : 'md:-mt-16 md:mb-16',
                    )}
                  >
                    <dt className='flex flex-col items-center text-base font-semibold leading-7 text-gray-900'>
                      <Image
                        className='mb-5'
                        alt={feature.name}
                        src={feature.imgUrl}
                        height={110}
                        width={110}
                      />
                      <span className='text-[1.35rem] text-center'>
                        {feature.name}
                      </span>
                    </dt>
                    <dd className='text-lg text-center mt-2 text-md leading-6 text-gray-500'>
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div
        className='relative z-[15] py-10 md:py-16'
        style={{ background: '#FAFAFA' }}
      >
        <div className='mx-auto max-w-6xl text-left md:text-center px-6 md:px-16 lg:px-16 xl:px-28'>
          <h2 className='text-base font-semibold leading-7 text-white'>
            What we can offer you?
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            Discover the VerbalScripts Advantage for Legal Professionals
          </p>
        </div>

        <div style={{background: '#8468f5'}} className='absolute -z-[1] top-0 left-0 right-0 bg-indigo-500 h-[15rem]'></div>

        <div className='absolute top-[14rem] -z-[1]'>
          <img
            src='/legal_industry/background pattern.svg'
            className='object-contain '
            alt=''
          />
        </div>

        <div className='absolute bottom-0 -rotate-180 -z-[1]'>
          <img
            src='/legal_industry/background pattern.svg'
            className='object-contain '
            alt=''
          />
        </div>

        <div className='mx-auto  max-w-7xl py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10'>
            {audio_video_theme.map((content) => (
              <div
                key={content.title}
                className='flex flex-col shadow-2xl bg-white  items-center gap-y-6 px-5 py-5 md:px-5 md:py-5'
              >
                <div className='relative bg-red-100 max-h-[10rem] w-full min-h-[10rem]'>
                  <img
                    src={content.imgUrl}
                    className='absolute left-0 top-0 w-full h-full object-cover'
                    alt={content.title}
                  />
                </div>
                <div className=''>
                  <div className='mb-5 text-center text-xl md:text-2xl text-gray-900 capitalize font-semibold'>
                    {content.title}
                  </div>

                  <div className='text-gray-600 text-center text-sm capitalize'>
                    {content.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HowItWorks custom_class='legal-how-it-works' />

      <AppFooter />
    </div>
  );
}
