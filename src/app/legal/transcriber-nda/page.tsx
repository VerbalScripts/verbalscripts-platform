import React from 'react';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { Metadata } from 'next';
import moment from 'moment';

export const metadata: Metadata = {
  title: 'Verbalscripts - Transcriber NDA',

  keywords: [
    'transcription',
    'audio transcription',
    'video transcription',
    'speech to text',
    'academic transcription',
    'proofreading',
  ],
  description:
    'We provide fast and affordable client-ready transcription services tailored to your needs through transcription, reviewing and proofreading.',

  openGraph: {
    type: 'website',
    url: 'https://verbalscripts.com',
    title: 'Verbalscripts - Frequently asked Questions',
    description:
      'We provide fast and affordable client-ready transcription services tailored to your needs through transcription, reviewing and proofreading.',

    siteName: 'Verbalscripts - 100% Human Transcription Services',
    images: [
      {
        url: 'https://verbalscripts.com/icons/logo-banner.jpg',
        secureUrl: 'https://verbalscripts.com/icons/logo-banner.jpg',
        alt: 'Verbalscripts - Frequently asked Questions',
        type: 'image/jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://verbalscripts.com',
  },
};

export default function TermsOfService() {
  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative mx-auto max-w-6xl  h-auto  px-6 py-20   pb-40 md:py-20 lg:py-20 md:px-20 lg:px-28'>
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
          <h1 className='relative z-10 text-5xl font-bold  text-white lg:text-5xl xl:text-6xl'>
            Transcriptionist Non-Disclosure and Confidentiality Agreement
          </h1>
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

      <div className='bg-white '>
        <div className='mx-auto max-w-6xl relative py-32 md:py-24 pb-20 md:pb-56 px-6 md:px-24 lg:px-32'>
          {/* update timeline */}

          <div className='mb-5'>
            <h4 className='max-w-4xl mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-800 lg:text-2xl '>
              Declaration
            </h4>

            <p className='text-md lg:text-lg text-gray-700'>
              I, __________________________________, (Transcriptionist) agree to
              maintain full confidentiality in regards to any and all materials
              (audio and video recordings, documentation, or other information
              regardless of medium) from Verbalscripts. I agree not to disclose
              the confidential information obtained from the discloser to anyone
              unless required to do so by law. Specifically, I agree:
            </p>
          </div>

          <div className='mb-5' id='our-policy'>
            <a
              href='#confidentiality-commitment'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              Confidentiality Commitment
            </a>

            <ol className='text-md lg:text-lg mb-3 text-gray-700 list-[decimal] ml-10'>
              <li>
                <b>Strict Confidentiality</b>: I will hold in the strictest
                confidence any information received and the identity of any
                individual inadvertently revealed during the performance of the
                requested services.
              </li>
              <li>
                <b>No Unauthorized Copies</b>: I will not make copies of any
                materials or transcriptions unless specifically requested to do
                so by the Verbalscripts.
              </li>
              <li>
                <b>Secure Storage</b>: I will store all materials and
                transcriptions in a safe and secure location while in my
                possession.
              </li>
              <li>
                <b>Timely Return or Deletion</b>: I will return all materials
                and transcriptions in a complete and timely manner to the
                Verbalscripts upon request or once all transcriptions are
                finished. Additionally, I will delete all electronic files
                containing materials or transcriptions from any electronic
                device on which such files are stored.
              </li>
            </ol>
          </div>

          <div className='mb-5' id='how-we-collect-data'>
            <a
              href='#data-handling-and-protection'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              Data Handling and Protection
            </a>

            <ol className='text-md lg:text-lg mb-3 text-gray-700 list-[decimal] ml-10'>
              <li>
                <b>Full Confidentiality of Transcription Data</b>: I will
                maintain full confidentiality of all transcription data received
                from the transcription team related to this study.
              </li>
              <li>
                <b>Strict Confidence of Individual Identities</b>: I will hold
                in strictest confidence the identity of any individual revealed
                during my access to the data, whether it be for transcription,
                proofreading, or any other purpose related to data collection.
              </li>
              <li>
                <b>No Unauthorized Copies of Recordings</b>: I will not make
                copies of any audio recordings, video recordings, or other
                transcription data unless specifically requested to do so by the
                Verbalscripts.
              </li>
              <li>
                <b>No Third-Party Disclosure</b>: I will not provide the
                transcription data to any third parties without the
                transcription team’s consent.
              </li>
              <li>
                <b>Secure Storage of Study Data</b>: I will store all
                study-related data in a safe, secure location while in my
                possession. All video and audio recordings will be stored in an
                encrypted format.
              </li>
              <li>
                <b>Return or Permanent Deletion of Data</b>: I will return all
                data provided or created for purposes of this agreement,
                including any backup records, to the transcription team or
                permanently delete them, as instructed by the transcription
                team.
              </li>
              <li>
                <b>Legal Consequences for Breach</b>: I understand that the
                University of New South Wales has the right to take legal action
                against any breach of confidentiality that occurs in my handling
                of the transcription data.
              </li>
            </ol>
          </div>

          <div className='mb-5' id='how-we-use-your-data'>
            <a
              href='#additional-points'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              Additional Points
            </a>

            <ol className='text-md lg:text-lg mb-3 text-gray-700 list-[decimal] ml-10'>
              <li>
                <b>Definition of Confidential Information</b>: Confidential
                information includes but is not limited to all research data,
                materials, transcriptions, audio and video recordings, and the
                identities of any individuals involved in the research.
              </li>
              <li>
                <b>Duration of Confidentiality</b>: The confidentiality
                obligations will remain in effect indefinitely, even after the
                termination of this agreement.
              </li>
              <li>
                <b>Permitted Disclosures</b>: 14.Disclosure of confidential
                information is only permitted by law or with prior written
                consent from the Researcher.
              </li>
              <li>
                <b>Consequences of Breach</b>: Breaching this agreement may
                result in legal action, financial penalties, and other
                disciplinary actions.
              </li>
              <li>
                <b>Acknowledgment of Training</b>: I acknowledge having received
                adequate training or instructions on how to handle and protect
                confidential information.
              </li>
              <li>
                <b>Reporting Breaches</b>: In the event of a suspected or actual
                breach of confidentiality, I will immediately contact
                Verbalscripts cybersecurity team at{' '}
                <a
                  className='relative border-b border-indigo-600 group  py-0.5 px-1.5 text-indigo-600'
                  href='mailto:info@verbalscripts.com'
                >
                  <span className='font-semibold'>info@verbalscripts.com</span>
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all'></span>
                </a>
              </li>
              <li>
                <b>Acknowledgment of Responsibilities</b>: I acknowledge
                understanding my responsibilities and agree to adhere to all
                outlined protocols and procedures.
              </li>
              <li>
                <b>Conflict of Interes</b>: I declare that I have no conflicts
                of interest that could affect my impartiality or confidentiality
                in handling the research data.
              </li>
              <li>
                <b>Amendments</b>: This agreement can only be amended with the
                mutual consent of both parties, provided in writing.
              </li>
            </ol>
          </div>

          <div className='mb-5'>
            <h4 className='max-w-4xl mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-800 lg:text-2xl '>
              Conclusion
            </h4>

            <p className='text-md lg:text-lg text-gray-700 mb-5'>
              I am aware that I can be held legally liable for any breach of
              this confidentiality agreement, any for any harm incurred by
              individuals if I disclose confidential and identifiable
              information contained in the materials to which I will have
              access.
            </p>

            <ul className='text-gray-800 space-y-2'>
              <li>
              <span>Transcribers Name:</span>
                ______________
              </li>
              <li className='inline-flex text-gray-800'>
                <span>Date:</span>
                <span className='font-bold'> {' '} {moment(Date.now()).format('ll')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
