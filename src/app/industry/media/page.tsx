import React from 'react';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import SolutionsLanding from '@/components/SolutionsLanding';
import PopularPartner from '@/components/PopularPartner';
// import CallToActionBanner from '@/components/CallToActionBanner';
import Faqs from '@/components/Faqs';
import { CheckCircleIcon } from '@heroicons/react/16/solid';

export default function Page() {
  const features = [
    {
      name: 'Trained for Legal Precision',
      description:
        'Our transcribers are not only experts in transcription but are also specially trained in legal terminology and documentation standards.',

      imgUrl: '/icons/accuracy.png',
    },
    {
      name: 'Custom Legal Formatting',
      description:
        'Tailored formatting options meet the specific requirements of legal documents, ensuring they are court-ready.',

      imgUrl: '/icons/upload.png',
    },
    {
      name: 'Exceptional Accuracy',
      description:
        ' With over 99%+ accuracy, our transcriptions capture every word with precision.',

      imgUrl: '/icons/affordable.png',
    },
    {
      name: '24/7 Customer Support',
      description:
        'VerbalScribe provides around-the-clock support and a dedicated Account Manager dedicated to your team.',

      imgUrl: '/icons/affordable.png',
    },
  ];

  type useCaseType = {
    title: string;
    description: string;
  };

  const useCases: useCaseType[] = [
    {
      title: 'Court Proceedings',
      description:
        'Capture every detail of court proceedings with GoTranscript`s transcription services, ensuring comprehensive and accurate legal records.',
    },
    {
      title: 'Depositions ',
      description:
        'Harness the power of precise depositions transcription with GoTranscript, capturing every detail for your legal advantage.',
    },
    {
      title: 'Client Meetings',
      description:
        'GoTranscript ensures complete confidentiality in our client meeting transcription services, capturing every crucial discussion with precision.',
    },
    {
      title: 'Evidence Review',
      description:
        'Streamline your evidence review with GoTranscript’s transcription services, ensuring meticulous attention to detail for every piece of evidence.',
    },
    {
      title: 'Witness Statement',
      description:
        'Capture every crucial detail with GoTranscript"s witness statement transcription services, where accuracy meets legal excellence.',
    },
    {
      title: 'Legal Seminars',
      description:
        'Enrich your legal knowledge with precise transcriptions of seminars and training sessions from GoTranscript, your educational partner.',
    },
    {
      title: 'Contract Discussion',
      description:
        'Ensure every clause counts with GoTranscript"s transcription services for contract discussions, sealing deals with precision.',
    },
  ];

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
        title={'Legal transcription built for scale'}
        imgUrl={'/affordable.jpg'}
        content={
          ' Verbit’s legal transcription solutions were designed by legal experts who understand the reliability, accuracy and customization that the industry requires. We support everything from legal proceedings like depositions, hearings and examinations to digital evidence like dash cam footage and 911 calls.'
        }
        href={'/upload-files?type=legal'}
      />

      {/* industries */}
      <PopularPartner />

      <div className='bg-white py-20 md:py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl md:text-center'>
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">What we do</h2> */}
            <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
              Why VerbalScribe For Your Legal Transcription Service
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-8xl'>
            <dl className='grid max-w-none  md:px-16 lg:px-20 xl:px-36 content-center grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className='relative py-8 px-5 rounded-xl shadow-sm'
                  style={{ backgroundColor: '#f9f8f2' }}
                >
                  <dd className='text-2xl font-semibold leading-7 text-gray-900'>
                    {feature.name}
                  </dd>
                  <dd className='text-base  mt-2 text-md leading-6 text-gray-600'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-8xl '>
        <div className='bg-white'>
          <div className='py-24 px-6 md:py-20 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:text-center'>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                How Legal Transcriptions Can Help
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.
              </p>
            </div>

            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
              <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
                {useCases.map((item) => (
                  <div key={item.title} className='relative pl-16'>
                    <dt className='text-lg font-semibold leading-7 text-gray-900'>
                      <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10'>
                        <CheckCircleIcon
                          className='h-6 w-6 text-gray-800'
                          aria-hidden='true'
                        />
                      </div>
                      {item.title}
                    </dt>
                    <dd className='mt-2 text-base leading-7 text-gray-600'>
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-200'>
        <div className='py-24 px-6 md:py-20 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <p className='mt-2 text-4xl font-bold leading-10 text-gray-900 sm:text-4xl'>
              How Legal Transcriptions Can Help
            </p>

            <p className='mt-3  text-xl leading-8 text-gray-600'>
              Our freelance jobs allow you to earn money from anywhere you’d
              like, while paying you competitively and providing career growth
              opportunities.{' '}
            </p>
          </div>

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
          </div>

          <div className='mx-auto max-w-8xl '>
            <div className='relative isolate  pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0'>
              <div className='mx-auto max-w-xl  lg:mx-0 lg:flex-auto lg:py-32'>
                <h2 className='text-2xl font-bold  text-gray-800 sm:text-4xl'>
                  Grow Your Skills and Career
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-700'>
                  We believe in promotion from within. Our transcriptionists
                  enjoy their work and have career advancement opportunities.
                  <br />
                  Gain insight into various industries and boost your resume for
                  any job market. Develop your skills, and grow into
                  higher-paying projects and positions.
                </p>

                <div className='mt-5'>
                  <a
                    href='#'
                    className='text-orange-500 font-semibold text-lg underline underline-offset-4'
                  >
                    Start Freelancing
                  </a>
                </div>
              </div>
              <div className='relative mt-16 h-80 lg:mt-8'>
                <img
                  className='absolute left-0 top-0 w-[20rem] md:w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                  src='freelancer-work-from-home-image.webp'
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
