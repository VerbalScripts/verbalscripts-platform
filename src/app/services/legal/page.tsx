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
      imgUrl: '/legal/hearing.svg',
      title: 'Court Hearings',
      description:
        'Step into the courtroom drama with confidence as we faithfully transcribe the proceedings, capturing the nuances of legal debates, rulings, and judgments. From opening statements to closing arguments, every word is meticulously transcribed to provide an accurate record of legal proceedings.',
    },
    {
      imgUrl: '/legal/depositions.svg',

      title: 'Depositions',
      description:
        'Navigate the intricate maze of witness testimonies and legal depositions with ease. Our transcripts meticulously document every question, answer, and objection, ensuring that no detail is overlooked. Whether it"s a witness deposition, expert testimony, or attorney questioning, we provide a comprehensive record that stands the test of scrutiny.',
    },
    {
      imgUrl: '/legal/Interview.svg',

      title: 'Legal Interviews',
      description:
        'Delve into insightful conversations and in-depth legal discussions with our transcription services. Whether it"s interviews with clients, witnesses, or experts, we capture every detail with precision. From investigative interviews to client consultations, our transcripts provide a thorough documentation of legal interactions, facilitating informed decision-making and strategy formulation.',
    },
    {
      imgUrl: '/legal/dictations.svg',

      title: 'Legal Dictations',
      description:
        'From case notes to legal memos, we transform spoken words into written documents with unparalleled accuracy. Our transcriptionists meticulously transcribe dictations from legal professionals, ensuring that important information is captured and documented for future reference. Whether it"s case summaries, client letters, or legal briefs, we deliver transcripts that meet the highest standards of clarity and professionalism.',
    },
    {
      imgUrl: '/legal/agreements.svg',

      title: 'Contracts and Agreements',
      description:
        'Ensure the clarity and enforceability of legal contracts and agreements with accurate transcriptions. Our transcripts meticulously document the terms, conditions, and provisions of contracts, ensuring that all parties are fully informed and legally protected. From commercial agreements to employment contracts, we provide a clear and comprehensive record of contractual obligations and rights.',
    },
    {
      imgUrl: '/legal/briefs.svg',
      title: 'Pleadings and Briefs',
      description:
        'Dive deep into the heart of legal arguments and persuasive advocacy with our transcripts of legal pleadings and briefs. Our transcriptionists meticulously capture the essence of legal arguments, ensuring that key points and supporting evidence are accurately documented. Whether it"s a motion, brief, or memorandum, we provide transcripts that articulate your legal position with clarity and precision.',
    },
    {
      imgUrl: '/legal/witness.svg',
      title: 'Witness Testimony',
      description:
        'Illuminate the courtroom with expert insights and analysis, as our transcripts faithfully capture the testimony of expert witnesses. From technical jargon to complex concepts, we ensure that expert testimony is conveyed accurately and comprehensively. Our transcripts provide a clear and concise record of expert opinions, facilitating a deeper understanding of complex issues and enhancing the credibility of your case.',
    },
    {
      imgUrl: '/legal/arbitration.svg',
      title: 'Arbitration Proceedings',
      description:
        'Navigate alternative dispute resolution with confidence, as our transcripts provide a clear and comprehensive record of arbitration proceedings. Whether it"s arbitration hearings, mediation sessions, or settlement conferences, we document every aspect of the process with precision. Our transcripts facilitate fair and impartial resolutions, ensuring that all parties are heard and their interests are protected.',
    },
  ];

  const features = [
    {
      name: 'Legal Expertise.',
      description:
        'Our team of transcriptionists possesses a deep understanding of legal terminology, procedures, and documentation standards, ensuring accurate and reliable transcription services.',

      imgUrl: '/legal/expertise.svg',
    },
    {
      name: 'Confidentiality Assurance.',
      description:
        'We prioritize the confidentiality of your legal documents and information, implementing strict security measures and confidentiality agreements to protect sensitive data.',

      imgUrl: '/legal/assurance.svg',
    },
    {
      name: 'Timely Delivery.',
      description:
        'We understand the importance of deadlines in the legal profession. With our efficient transcription process, we ensure prompt delivery of transcribed documents without compromising accuracy.',

      imgUrl: '/legal/time.svg',
    },
    {
      name: 'Customized Solutions.',
      description:
        'We offer flexible transcription options tailored to your specific requirements, including formatting preferences, timestamping, and speaker identification.',

      imgUrl: '/legal/solutions.svg',
    },
    {
      name: 'Dedicated Support.',
      description:
        'From initial consultation to final delivery, our team provides  personalized assistance, ensuring a seamless and hassle-free experience for our clients.',

      imgUrl: '/legal/support.svg',
    },
  ];

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
                Legal Transcription
              </h1>

              <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
                with our specialized expertise and unwavering commitment,
                VerbalScripts ensure that every word is meticulously
                transcribed, empowering legal professionals with reliable
                documentation.
              </p>

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


             
              <div className=' mt-10 max-w-[18rem] '>
                <div className='px-4 border-l-4 secondary-border bg-white py-3 rounded-tr-2xl'>
                  <div className='text-gray-700 font-semibold '></div>
                  <div className='text-gray-700 font-semibold mb-3 space-y-2'>
                    <div>
                      <span className='py-1.5 px-3 bg-gray-300 text-sm rounded-full'>
                        100% Human Transcribed
                      </span>
                    </div>

                    <div>
                      From{' '}
                      <span className='footer-title text-2xl font-bold my-2'>
                        $ 0.75
                      </span>{' '}
                      per minute
                    </div>
                    <div>98%+ accuracy</div>
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
            </div>
            <div className='mt-10 lg:mt-0 relative   lg:min-w-[30rem]'>
              <img
                src='/legal/landingedited.svg'
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
            <div className='lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Legal Transcription Services?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                Upholding High{' '}
                <span className='relative z-10'>
                  Standards{' '}
                  <span className='z-10 absolute -bottom-2.5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                of Professionalism and Integrity.
              </p>

              <div className='px-6'>
                <ul className='lg:mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-800 list-disc flex flex-col space-y-2'>
                  <li>
                    Precisely transcribed court hearings, trials, depositions,
                    and arbitration proceedings, ensuring an accurate record of
                    legal proceedings.
                  </li>
                  <li>
                    Meticulously transcribed legal dictations, including case
                    notes, and legal correspondence, facilitating seamless
                    communication and documentation.
                  </li>
                  <li>
                    Accurate transcription of legal documents such as contracts,
                    agreements, pleadings, and briefs, preserving the integrity
                    of legal records and facilitating efficient case management.
                  </li>
                  <li>
                    Thorough transcription of expert witness testimony, ensuring
                    clarity and precision in conveying expert opinions and
                    analysis during legal proceedings.
                  </li>
                  <li>
                    Rigorous adherence to confidentiality agreements and data
                    security protocols, safeguarding sensitive legal information
                    and client confidentiality.
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
            <div className='mt-10 lg:mt-0 relative w-full'>
              <img
            
                src='/legal/advance.png'
                className='lg:absolute  -right-10 w-[95%] -ml-7 lg:-ml-0 md:w-[28rem] -top-96 max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 md:py-16 why-legal-section-bg '>
        <div className='mx-auto max-w-7xl    px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-6  md:px-8 md:py-10'>
            <div className='lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Why choose us?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                The{' '}
                <span className='relative z-10'>
                  Essence{' '}
                  <span className='z-10 absolute -bottom-2.5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                of your Legal Matters is Preserved
              </p>
            </div>
            <div>
              <p className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-600'>
                Your legal interactions and documents are transformed into
                powerful tools for advocacy, analysis, and decision-making.
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
          </div>

          <div className='mt-16  sm:mt-20 lg:mt-24'>
            <dl className='grid max-w-none   content-center grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className='relative py-8 px-4  shadow-sm bg-white border-t border-b-4 border-indigo-600'
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
                  <dd className='text-lg text-center mt-2 text-md leading-6 text-gray-600'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-3xl text-left md:text-center px-6 md:px-16 lg:px-16 xl:px-28'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            What are Our Supported Contents?
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            Lets Get Straight To your Content
          </p>
        </div>

        <div className='mx-auto  max-w-7xl py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid justify-evenly grid-cols-1  gap-y-12  pb-12'>
            {audio_video_theme.map((content, index) => (
              <div
                key={content.title}
                className='flex flex-wrap lg:flex-nowrap items-center gap-x-6  md:px-8 md:py-10'
              >
                <div className={classNames(index % 2 == 0 ? '' : 'md:order-2')}>
                  <img
                    src={content.imgUrl}
                    className='lg:max-w-[30rem] rounded-sm object-cover'
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

      <HowItWorks />

      <AppFooter />
    </div>
  );
}
