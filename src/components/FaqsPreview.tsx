import React from 'react';

import Faqs from './Faqs';

export default function FaqsPreview() {
  const faqs: FaqsProp[] = [
    {
      title:
        'Can Verbit produce transcripts from audio featuring different accents, dialects and ‘quick talkers’?',
      content:
        'Yes. Verbit trains its AI using more challenging audio files so that it works in the real world where recordings aren’t always optimal. Although clear, high-quality audio files work best, we can produce strong results even if there are audio-related difficulties, accents or unique terminology. In addition, Verbit’s human transcribers provide an extra layer of transcript proofreading and support so that your transcripts meet the requirements of the demanding legal industry.',
    },
    {
      title: 'Can digital court reporters be certified? ',
      content:
        'Yes, a digital court reporter or certified electronic reporter (CER) has a certification through the American Association of Electronic Reporters and Transcribers (AAERT).',
    },
    {
      title:
        'What makes GoTranscript"s court proceedings transcription services stand out?',
      content:
        'A notable instance is a high-profile trial where our transcription played a crucial role in the appellate process. The comprehensive and accurate transcripts allowed appellate lawyers to effectively argue their points, leading to a successful appeal, highlighting the significance of our services in legal victories. ',
    },
  ];

  return (
    <section className=' py-14 sm:py-12 bg-gray-100'>
      <div className='mx-auto max-w-7xl relative'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
        <div className='absolute  right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />

        <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
          <p className='mt-2 text-4xl font-bold  section-title text-gray-900 md:text-5xl'>
            Frequently asked questions
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>

        <div className='py-10'>
          <Faqs faqs={faqs} />
        </div>

        <div className='mx-auto px-6 md:px-0 py-10 md:max-w-2xl text-left lg:text-center'>
          <p className='mt-2 text-2xl font-bold  section-title text-gray-900 md:text-3xl'>
            Need more Help ?
          </p>
          <div className='my-4'>
            <button className='text-white bg-indigo-500 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-indigo-400 me-2 mb-2'>
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
