import React from 'react';
import type { Metadata } from 'next';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import PopularPartner from '@/components/PopularPartner';

import HowItWorks from '@/components/HowItWorks';

export const metadata: Metadata = {
  title: 'VerbalScripts | Services',
};

export default function Page() {
  const audio_video_theme = [
    {
      imgUrl: '/medical_transcription/patientnotes.svg',
      title: 'Patient Notes',
      description:
        'Capture patient encounters with precision, ensuring comprehensive documentation of medical histories and treatment plans.',
    },
    {
      imgUrl: '/medical_transcription/operativereport.svg',

      title: 'Operative Reports',
      description:
        'Detail surgical procedures with clarity, facilitating seamless communication among healthcare providers and accurate patient care.',
    },
    {
      imgUrl: '/medical_transcription/consultation.svg',

      title: 'Consultation Notes',
      description:
        'Record detailed assessments and recommendations from healthcare professionals, aiding in continuity of care and patient follow-up.',
    },
    {
      imgUrl: '/medical_transcription/dischargesummary.svg',

      title: 'Discharge Summaries',
      description:
        'Summarize patient treatment and post-discharge instructions effectively, enhancing patient understanding and compliance.',
    },
    {
      imgUrl: '/medical_transcription/progressreport.svg',

      title: 'Progress Reports',
      description:
        'Document patient progress over time, providing valuable insights for ongoing treatment adjustments and healthcare management.',
    },
    {
      imgUrl: '/medical_transcription/medicalhistory.svg',
      title: 'Medical History and Physical Exams',
      description:
        'Preserve detailed medical histories and examination findings, supporting comprehensive patient evaluations and treatment planning.',
    },
  ];

  // const audio_features = [
  //   {
  //     title: 'Enhanced Accessibility',
  //     description:
  //       'Make your content accessible to a wider audience, including those with hearing impairments and non-native speakers, improving inclusivity and engagement.',
  //   },
  //   {
  //     title: 'Content Purposing',
  //     description:
  //       ' Repurpose transcribed content into various formats for content marketing strategies, extending the reach of your original content.',
  //   },
  //   {
  //     title: 'Professional Image',
  //     description:
  //       'Enhance your brand image and professionalism by delivering high-quality transcriptions to your audience.',
  //   },
  //   {
  //     title: 'Time Savings',
  //     description:
  //       ' Save time and resources by outsourcing your transcription needs to professionals with quick turnaround times.',
  //   },
  // ];
  // const features = [
  //   {
  //     name: 'First Draft',
  //     features: [
  //       '-98% accuracy',
  //       'Average next day delivery',
  //       'Speaker IDs available',
  //       'Timestamps available',
  //     ],
  //     price: '0.79$ per minute',
  //   },
  //   {
  //     name: 'Standard',
  //     features: [
  //       '99% accuracy guaranteed',
  //       '1-3 business day delivery',
  //       'Speaker IDs available',
  //       'Timestamps available',
  //     ],
  //     price: '1.25$ per minute',
  //   },
  //   {
  //     name: 'Verbatin',
  //     features: [
  //       'Every utterance captured',
  //       '2-5  business day delivery',
  //       'Speaker IDs available',
  //       'Timestamps available',
  //     ],
  //     price: '2.00$ per minute',
  //   },
  // ];

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='landing-page-alt'>
        <div className='relative mx-auto max-w-7xl  h-auto  px-6 py-20   pb-40 md:py-20 lg:py-36 md:px-20 lg:px-28'>
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
          <div className='flex flex-wrap  lg:flex-nowrap items-center gap-x-10 '>
            <div className='max-w-2xl md:max-w-4xl'>
              <h1 className='text-4xl font-bold capitalize tracking-tight text-gray-800 sm:text-5xl'>
                Medical Transcription
              </h1>

              <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
                Welcome to VerbalScripts{'"'} Medical Transcription Services! We
                know how crucial accurate medical records are. With our
                dedicated team, expect precise transcriptions while we keep your
                information secure and confidential.
              </p>

              <div className='lg:hidden   py-5 px-5 max-w-[18rem]'>
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
              </div>

              <div className='lg:hidden mt-5'>
                <a
                  href='/upload-files'
                  className='inline-flex flex-nowrap  items-center space-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span className='flex'>Order Now</span>
                  <FontAwesomeIcon
                    className='ml-2 w-5'
                    icon={faLongArrowRight}
                  />
                </a>
              </div>

              <div className='lg:h-[3rem]'></div>

              <div
                className='hidden lg:block lg:absolute left-1/4 -bottom-10 rounded-xl shadow-xl py-5 px-5'
                style={{ background: '#E0E8F0' }}
              >
                <div className='px-4 pb-2 border-l-2 secondary-border'>
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
                <div className='px-4'>
                  <button className=' text-md font-semibold  px-5 py-1.5 bg-indigo-600 transition text-center  hover:-translate-y-1 hover:shadow-xl rounded-full text-gray-100'>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className='mt-10 lg:mt-0 relative   lg:min-w-[30rem]'>
              <img
                src='/medical_transcription/medicallandingIllustration.svg'
                className='max-w-[90%] lg:absolute object-cover -top-60'
                alt=''
              />
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

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center space-x-6'>
            <div className='lg:order-2 lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Medical Transcription?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                Tailored Medical Transcription Solutions{' '}
                <span className='relative z-10'>
                  Designed.{' '}
                  <span className='z-10 absolute -bottom-5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                for you.
              </p>

              <div className='px-6'>
                <ul className='lg:mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-800 list-disc flex flex-col space-y-2'>
                  <li>
                    From patient notes to operative reports, we transcribe
                    medical dictations with precision.
                  </li>
                  <li>
                    Our transcriptionists are well-versed in medical terminology
                    and adhere to industry standards.
                  </li>
                  <li>
                    Your patients{"'"} privacy is our priority. We strictly
                    comply with HIPAA regulations and maintain confidentiality.
                  </li>
                  <li>
                    Tailor our services to your specific needs, including
                    formatting preferences and turnaround times.
                  </li>
                </ul>
              </div>
              <div className='mt-10'>
                <a
                  href='/upload-files'
                  className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span>Order Now</span>
                </a>
              </div>
            </div>
            <div className=' order-1 mt-10 lg:mt-0 relative w-full'>
              <img
                src='/pics/598513718_huge.jpg'
                className='lg:absolute -top-24 -left-10 w-[90%] -ml-7 lg:-ml-0 md:w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 md:py-16 steps-section-bg '>
        <div className='mx-auto max-w-7xl    px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-6 rounded-md md:px-8 md:py-10 bg-white/30 ring-1 ring-white/10'>
            <div className='lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Why choose us?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                Rest assured, your medical transcription needs are in{' '}
                <span className='relative z-10'>
                  capable hands.{' '}
                  <span className='z-10 absolute -bottom-5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
              </p>
            </div>
            <div>
              <ul className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-800 list-disc flex flex-col gap-y-5'>
                <li>
                  Our team possesses in-depth knowledge of medical terminology,
                  ensuring accurate transcriptions.
                </li>
                <li>
                  We adhere to stringent HIPAA regulations, ensuring the utmost
                  confidentiality of patient information.
                </li>
                <li>
                  Your data is safe with us. We employ robust security measures
                  to protect sensitive information.
                </li>
                <li>
                  Receive dedicated customer support throughout your
                  transcription journey.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-3xl text-left md:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            What are Our Supported Contents?
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            Lets Get Straight To your Content
          </p>
        </div>

        <div className='mx-auto max-w-7xl py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid justify-evenly grid-cols-1 md:grid-cols-2   lg:gap-x-8 gap-y-5  lg:grid-cols-2 lg:gap-y-5  pb-12'>
            {audio_video_theme.map((content) => (
              <div key={content.title}>
                <div className='max-h-[18rem]'>
                  <img
                    src={content.imgUrl}
                    className='rounded-sm object-cover'
                    alt=''
                  />
                </div>
                <div className='px-8'>
                  <div className='mb-5 text-center text-2xl md:text-3xl text-gray-900 capitalize font-bold mt-5'>
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

      <HowItWorks />

      <AppFooter />
    </div>
  );
}