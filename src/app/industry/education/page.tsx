import React from 'react';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import SolutionsLanding from '@/components/SolutionsLanding';
import PopularPartner from '@/components/PopularPartner';
import Faqs from '@/components/Faqs';

export default function Page() {
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
    {
      title: '',
      content:
        'A notable instance is a high-profile trial where our transcription played a crucial role in the appellate process. The comprehensive and accurate transcripts allowed appellate lawyers to effectively argue their points, leading to a successful appeal, highlighting the significance of our services in legal victories. ',
    },
    {
      title:
        'Are the transcriptions provided by GoTranscript admissible in court',
      content:
        'Yes, our transcriptions are meticulously prepared to meet legal standards, making them admissible in court. We ensure that every transcript is a true and accurate representation of the court proceedings, thereby holding up to the scrutiny of legal processes. ',
    },
    {
      title:
        'What measures does GoTranscript take to ensure confidentiality and security in handling sensitive legal information?',
      content:
        'GoTranscript prioritizes confidentiality and security in handling all legal transcriptions. We employ strict data protection protocols and ensure that all our transcriptionists adhere to stringent confidentiality agreements, safeguarding sensitive information throughout the transcription process. ',
    },
  ];

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      {/* landing page */}
      <SolutionsLanding
        title={'eLearning and online course accessibility'}
        imgUrl={'/education.jpg'}
        content={
          ' Verbit’s expertise in eLearning is being used to enhance online courses globally. Our professional transcribers and technologies are trained to deliver access in online course environments. You’ll find Verbit’s professional captioning, transcription, translation and audio description easy to use with integrations into your LMS, web conferencing and media hosting platforms.'
        }
        href={'/upload-files?type=legal'}
      />

      {/* industries */}
      <PopularPartner />

      <div className='bg-white'>
        <div className='py-24 px-6 md:py-20 lg:px-8'>
          <div className='mx-auto max-w-8xl '>
            <div className='relative isolate  pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0'>
              <div className='mx-auto max-w-xl  lg:mx-0 lg:flex-auto lg:py-32'>
                <h2 className='text-2xl font-bold  text-gray-800 sm:text-4xl'>
                  Designed to support online learners
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-700'>
                  Our solutions increase student engagement and information
                  retention. Verbit offers a suite of accessibility solutions,
                  including transcription and captioning, which are built for
                  online learning needs. Start leveraging our seamless
                  integrations and live services without compromising on
                  accuracy or your budget.
                </p>

                <div className='mt-5'>
                  <a
                    href='#'
                    className='text-orange-500 font-semibold text-lg underline underline-offset-4'
                  >
                    Order Now
                  </a>
                </div>
              </div>
              <div className='relative mt-16 h-80 lg:mt-8'>
                <img
                  className='absolute left-0 top-0 w-[20rem] md:w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                  src='/learning.jpg'
                  alt='App screenshot'
                />
              </div>
            </div>
          </div>

          {/* <div className='mx-auto mt-16 max-w-8xl '>
            <div className='relative isolate  sm:rounded-3xl sm:px-16  lg:flex lg:items-center lg:gap-x-20 lg:px-14 lg:pt-0'>
              <div className=' relative max-w-md mt-16 h-80 lg:mt-8'>
                <img
                  className=' w-[20rem] md:w-[32rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                  src='/solutions_legal-min.webp'
                  alt='App screenshot'
                />
              </div>

              <div className='lg:mx-0 lg:flex-auto  text-left'>
                <h2 className='text-2xl mt-20 lg:mt-0 font-bold  text-gray-800 sm:text-4xl'>
                  Legal tech & rigorously trained transcribers
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-700'>
                  Our specialized ASR boosts the efficiency of the transcription
                  process. Accuracy is delivered by Verbit’s legal transcribers
                  who undergo rigorous in-house training. Our grading algorithms
                  mimic national grading standards. Transcribers must achieve
                  the highest professional levels of accuracy to pass. Certified
                  court reporters and certified electronic reporters perform
                  quality control.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className='bg-gray-100'>
        <div className='py-24 px-6 md:py-20 lg:px-8'>
          <div className='mx-auto mt-16 max-w-8xl '>
            <div className='relative isolate  sm:rounded-3xl sm:px-16  lg:flex lg:items-center lg:gap-x-20 lg:px-14 lg:pt-0'>
              <div className=' relative max-w-md mt-16 h-80 lg:mt-8'>
                <img
                  className=' w-[20rem] md:w-[32rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                  src='/solutions_legal-min.webp'
                  alt='App screenshot'
                />
              </div>

              <div className='lg:mx-0 lg:flex-auto  text-left'>
                <h2 className='text-2xl mt-20 lg:mt-0 font-bold  text-gray-800 sm:text-4xl'>
                  Solutions designed for advanced coursework
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-700'>
                  OVerbit’s proprietary solutions deliver accurate results on
                  niche educational topics, even on STEM and graduate-level
                  content. We apply machine learning to continuously provide
                  greater accuracy with each session.
                </p>
              </div>
            </div>
          </div>

          <div className='mx-auto mt-16 max-w-8xl '>
            <div className='relative isolate  pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0'>
              <div className='mx-auto max-w-xl  lg:mx-0 lg:flex-auto lg:py-32'>
                <h2 className='text-2xl font-bold  text-gray-800 sm:text-4xl'>
                  Access to education experts
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-700'>
                  With Verbit, you’ll benefit from a specialized education
                  customer success manager. You’ll have a dedicated partner to
                  collaborate with to address your institution’s specific
                  accessibility needs.
                </p>

                <div className='mt-5'>
                  <a
                    href='#'
                    className='text-orange-500 font-semibold text-lg underline underline-offset-4'
                  >
                    Order Now
                  </a>
                </div>
              </div>
              <div className='relative mt-16 h-80 lg:mt-8'>
                <img
                  className='absolute left-0 top-0 w-[20rem] md:w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                  src='/intern.jpg'
                  alt='App screenshot'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* validation section */}
      {/* <CallToActionBanner fn={setOpen} /> */}

      <div className='bg-white'>
        <div className='py-24 px-6 md:py-20 lg:px-8'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl md:text-center'>
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">What we do</h2> */}
              <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
                Frequently Asked Questions
              </p>
            </div>
            <div className='mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24 lg:max-w-7xl'>
              <Faqs faqs={faqs} />
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
