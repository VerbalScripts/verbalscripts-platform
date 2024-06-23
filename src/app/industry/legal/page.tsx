import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import PopularPartner from '@/components/PopularPartner';

import HowItWorks from '@/components/HowItWorks';
import Faqs from '@/components/Faqs';
import { classNames } from '@/utils/classNames';
import CallToActionBanner from '../../../components/CallToActionBanner';

export const metadata: Metadata = {
  title: 'VerbalScripts | Court and Legal Reporting',
};

export default function Page() {
  const faqs: FaqsProp[] = [
    {
      title: 'What is the purpose of transcription in the legal industry?',
      content:
        'In the legal sector, transcription serves the critical function of accurately documenting all courtroom proceedings and internal legal processes. This includes transcribing depositions, testimonies, hearings, interrogations, client letters, briefs, and more to maintain precise records.',
    },
    {
      title: 'What are Legal Transcription Services?',
      content:
        'Legal transcription involves converting spoken words from audio or video files into text format, primarily utilized by law firms, paralegals, court reporters, attorneys, and other legal professionals to accurately transcribe various legal proceedings.',
    },
    {
      title: 'What are our working hours?',
      content:
        'We transcribe 24/7, however, our account and project managers are available 9am-5pm PST Monday through Friday. Our support team is also available 24/7 if an emergency should arise.',
    },
    {
      title: 'What types of legal documents are transcribed?',
      content:
        'Legal transcription services cover a wide range of documents and proceedings, including: <b>Depositions</b>, <b>Testimonies</b>, <b>Pleadings</b>, <b>Subpoenas</b> and <b>Summons</b>, Official court hearings, Interrogations, Sworn statements, Client letters, Licensing Appeals, Arbitration proceedings, Legal briefs, Wiretaps and phone calls, Meetings, Wills/trust documents, Surveillance/investigation reports, Conferences, Memorandums, Attorney dictation, General legal correspondence, and more.',
    },
    {
      title: "How do I get started with Verbalscripts' transcription services?",
      content:
        'Starting with Verbalscripts is straightforward. Contact us via Email, Chat, Text, WhatsApp, or Call, and we will assist you promptly. You can also securely upload your audio files through our 24/7 online services or discuss your project requirements directly with our team.',
    },
    {
      title:
        'Do you assign a dedicated project manager to always contact concerning my transcription needs?',
      content:
        'Yes, we can provide you with a dedicated point of contact. This ensures consistent communication and projects delivery from someone who is familiar with the status, and requirements of your files at all times.',
    },
  ];
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

      <div className='relative legal_landing z-[10] h-auto  px-6 py-20 md:pt-0 pb-10 md:pb-30 md:py-24 lg:py-24 md:px-20 lg:px-28'>
        <div className='landing-page-video-wrapper'></div>

        {/* <div className='absolute -z-[1] blur-sm bottom-0 right-0 -rotate-180 left-0 why_industry_bg'></div> */}
        <div className='flex flex-wrap  lg:flex-nowrap items-center lg:space-x-10  space-y-10'>
          <div className='max-w-2xl lg:max-w-xl'>
            <h1 className='text-4xl font-bold capitalize  text-gray-900 sm:text-5xl'>
              Court and Legal Reporting Industry
            </h1>

            <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
              Welcome to Verbalscripts your Trusted Partner for Solutions in the
              legal Industry
            </p>

            <div className='mt-10 flex flex-wrap space-y-5 lg:space-y-0  justify-start lg:flex-nowrap md:items-center space-x-5'>
              <a
                href='/contact-us'
                className=' rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
              >
                <span className='flex'>Contact Sales</span>
              </a>

              <a
                href='/get-a-quote'
                className='inline-flex flex-nowrap lg:space-x-4  text-xl underline underline-offset-4 transition font-semibold text-indigo-600  hover:text-indigo-500 focus-visible:outline focus-visible:outline-2 '
              >
                <span className='flex'>Request a Quote</span>
                <FontAwesomeIcon className='ml-2 w-5' icon={faLongArrowRight} />
              </a>
            </div>
          </div>
          {/* <div className='md:min-w-[20rem] lg:max-w-[30rem]'>
            <img src='/industry/industry-landing.jpg' className='' alt='' />
          </div> */}
        </div>
      </div>

      <div className='bg-gray-100 py-0 '>
        <PopularPartner />
      </div>

      <div className='why-legal-industry-bg '>
        <div className='mx-auto max-w-7xl py-5 md:py-10     px-5 md:px-16 lg:px-10'>
          <div className='flex flex-wrap lg:flex-nowrap px-6 py-6 items-center gap-y-10 lg:gap-x-20   rounded-md md:px-8 md:py-24 bg-white/50 ring-1 ring-white/10'>
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
            <div className=''>
              <dl className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
                {features.map((feature, index) => (
                  <div
                    key={feature.name}
                    className={classNames(
                      'relative py-8 px-4 lg:px-3 xl:px-5  shadow-sm bg-white rounded-xl',
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
          <h2 className='text-xl font-semibold leading-7 text-white footer-title'>
            What we can offer you?
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            Discover the VerbalScripts Advantage for Legal Professionals
          </p>
        </div>

        <div
          style={{ background: '#8468f5' }}
          className='absolute -z-[1] top-0 left-0 w-full bg-indigo-500 h-[15rem]'
        ></div>

        <div className='absolute top-[14rem] left-0  w-full -z-[1] why_industry_bg'></div>

        <div className='absolute bottom-0 left-0 w-full -rotate-180 -z-[1] why_industry_bg'></div>

        <div className='mx-auto  max-w-7xl py-10 md:py-24 xl:py-24 px-6 md:px-16 lg:px-16 xl:px-32'>
          <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10'>
            {audio_video_theme.map((content) => (
              <div
                key={content.title}
                className='flex flex-col shadow-2xl bg-white  items-center gap-y-6 px-5 py-5 md:px-5 md:py-5'
              >
                <div className='relative  max-h-[13rem] w-full min-h-[13rem]'>
                  <img
                    src={content.imgUrl}
                    className='absolute left-0 top-0 w-full h-full object-cover'
                    alt={content.title}
                  />
                </div>
                <div className=''>
                  <div className='mb-2 text-center text-xl md:text-xl text-gray-800 capitalize font-semibold'>
                    {content.title}
                  </div>

                  <div className='text-gray-600 text-center text-sm md:text-lg capitalize'>
                    {content.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=' py-14 sm:py-12 bg-gray-100'>
        <div className='mx-auto max-w-7xl relative'>
          <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
            <p className='mt-2 text-4xl font-bold  section-title text-gray-900 md:text-5xl'>
              Legal & Court Reporting FAQs
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
          </div>

          <div className='py-10 px-6'>
            <Faqs faqs={faqs} />
          </div>
        </div>
      </div>

      <HowItWorks custom_class='legal-how-it-works' />

      <CallToActionBanner />

      <AppFooter />
    </div>
  );
}
