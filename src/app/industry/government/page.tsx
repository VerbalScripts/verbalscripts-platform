import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import PopularPartner from '@/components/PopularPartner';

import HowItWorks from '@/components/HowItWorks';
import Faqs from '@/components/Faqs';
import { classNames } from '@/utils/classNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import ContentCard from './components/ContentCard';
import NoMediaCard from './components/NoMediacard';

export const metadata: Metadata = {
  title: 'VerbalScripts | Government',
};

export default function Page() {
  const faqs: FaqsProp[] = [
    {
      title:
        'Can I receive a sample transcription before committing to a large project?',
      content: `Yes, at Verbalascripts, we understand the importance of ensuring our transcription services meet your expectations. That's why we offer sample transcriptions for new clients. These samples allow you to evaluate the quality of our work before committing to a larger project. If you need further assurance, we can also conduct a test transcription as a demonstration of our capabilities. Please contact our us to request a sample transcription or to discuss your specific needs. We're here to help you make an informed decision about our services.
`,
    },
    {
      title:
        'What types of transcription services does Verbalscripts offer for government agencies?',
      content: `Verbalscripts specializes in providing accurate and confidential transcription services tailored for government agencies. We transcribe a variety of documents critical to government operations, including meetings, hearings, interviews, reports, and official correspondence. Our services ensure that all recorded information is meticulously documented in text format, meeting the stringent requirements of government processes.
`,
    },
    {
      title:
        'How does Verbalscripts ensure the security and confidentiality of sensitive and classified government transcripts?',
      content: `At Verbalscripts, we prioritize the security and confidentiality of government-related transcripts. All files undergo encryption during both transfer and storage to safeguard sensitive information. Our transcriptionists follow strict confidentiality guidelines, including signing non-disclosure agreements (NDAs) to uphold the confidentiality of government content. We also adhere to industry-standard security practices and are ready to comply with any additional security measures or protocols required by government agencies to protect their information effectively.
`,
    },
    {
      title:
        'Can Verbalscripts handle large-scale transcription projects for government agencies?',
      content: `Yes. Verbalscripts has extensive experience in managing large-scale transcription projects for government agencies. We utilize a scalable team and streamlined workflow processes to ensure timely delivery without compromising on accuracy. Whether it's a comprehensive archive digitization project or ongoing transcription needs, we are equipped to handle the volume efficiently.
`,
    },
    {
      title:
        'How does Verbalscripts handle quality assurance for government transcription projects?',
      content: `Quality assurance is integral to our transcription process at Verbalscripts. We have a dedicated team responsible for reviewing and proofreading transcripts to ensure accuracy and consistency. Each transcript undergoes a multi-step quality control process, including transcription, reviewing, proofreading, and formatting. We also welcome client feedback and make revisions as needed to ensure complete satisfaction with the final deliverables.
`,
    },
  ];

  const features = [
    {
      name: 'Historical Archives',
      description:
        'We help government agencies maintain accurate historical archives by providing meticulously transcribed records of important events, meetings, and public addresses.',

      imgUrl: '/government_industry/archive.png',
    },
    {
      name: 'Confidentiality',
      description:
        'We adhere to stringent confidentiality protocols and comply with all relevant data protection regulations, ensuring your sensitive government information remains secure and confidential at all times.',

      imgUrl: '/government_industry/confidentiality.png',
    },
    {
      name: 'Policy Adherence',
      description:
        'Our transcription services ensure your documentation aligns with government policies and standards. We provide accurate and regulation-compliant transcripts, simplifying your adherence to necessary guidelines.',
      imgUrl: '/government_industry/policy.png',
    },
    {
      name: 'Adaptable Solutions',
      description:
        'We understand that every government operation is unique, which is why we tailor our transcription services to meet your specific needs and timelines, providing the flexibility necessary to handle any project size or deadline.',

      imgUrl: '/government_industry/adaptable.png',
    },
    {
      name: 'Seamless Integration',
      description:
        'Our transcriptions are designed to integrate effortlessly into your existing systems, enhancing your workflow without causing any disruption and allowing for smooth and efficient operations across all government departments.',

      imgUrl: '/government_industry/seamless.png',
    },
  ];

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative government_landing z-[10] h-auto  px-6 py-20 md:pt-0 pb-10 md:pb-30 md:py-24 lg:py-32 md:px-20 lg:px-28'>
        <div className='landing-page-video-wrapper'></div>

        {/* <div className='absolute -z-[1] blur-sm bottom-0 right-0 -rotate-180 left-0 why_industry_bg'></div> */}
        <div className='flex flex-wrap  lg:flex-nowrap items-center lg:space-x-10  space-y-10'>
          <div className='max-w-2xl lg:max-w-xl'>
            <h1 className='text-4xl font-bold capitalize  text-gray-900 sm:text-5xl'>
              Governnment Industry
            </h1>

            <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
              Enhancing Your Media Production for Engaging Content of Your
              Audience.
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

      <div className='why-government-industry-bg'>
        <div className='mx-auto max-w-7xl py-5 md:py-24 lg:py-32     px-5 md:px-24 lg:px-32'>
          <div className='flex flex-wrap lg:flex-nowrap items-center space-x-6'>
            <div className='lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                What Benefits gained in your Government?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left  text-gray-900 section-title'>
                Public Service,{' '}
                <span className='relative z-10'>
                  Perfectly,{' '}
                  <span className='z-10 absolute -bottom-2.5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                Documented with VerbalScripts
              </p>
            </div>
            <div className='px-6 text-gray-800 text-lg text-left'>
              Our services ensure that all official records, meetings, and
              communications are accurately transcribed, supporting
              transparency, accountability, and efficiency.
            </div>
          </div>
          <div className='py-10 md:py-24'>
            <dl className='grid max-w-none place-content-center  grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5'>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className={classNames(
                    'relative py-8 px-4 lg:px-3 xl:px-5  shadow-sm bg-white rounded-xl',
                  )}
                >
                  <dt className='flex flex-col items-center text-base font-semibold leading-7 text-gray-900'>
                    <Image
                      className='mb-5'
                      alt={feature.name}
                      src={feature.imgUrl}
                      height={85}
                      width={85}
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
          <div className='text-center'>
            <a
              href='/get-a-quote'
              className='inline-flex  rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
            >
              <span>Get a Quote</span>
            </a>
          </div>
        </div>
      </div>

      <div
        className='relative z-[15] py-10 md:py-16'
        style={{ background: '#FAFAFA' }}
      >
        <div className='mx-auto max-w-6xl text-left md:text-center px-6 md:px-16 lg:px-16 xl:px-28'>
          <h2 className='text-xl font-semibold leading-7 text-white '>
            Our Solutions for Government Entities?
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            The VerbalScripts Commitment to Government Transcription
          </p>
        </div>

        <div className='absolute -z-[1] top-0 left-0 w-full h-[15rem] why_media_industry_top'></div>

        <div className='absolute top-[14rem] left-0  w-full -z-[1] media_industry_pattern'></div>

        <div className='absolute bottom-0 left-0 w-full -rotate-180 -z-[1] media_industry_pattern'></div>

        <div className='mx-auto max-w-7xl flex flex-col  gap-y-5 lg:gap-y-10 py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid max-w-none   items-start  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
            <ContentCard
              title='Our Solutions for Government Entities?'
              direction='vertical'
              description='Capture comprehensive records of committee and board meetings to facilitate accurate archiving and public access, ensuring thorough documentation of committee deliberations and board decisions.'
              imgSrc='/government_industry/137951040_10314658.jpg'
            />

            <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-x-10 lg:gap-y-10'>
              <NoMediaCard
                title='City Council Meetings'
                description='Document every discussion and decision made during city council meetings to ensure complete transparency and accountability, supporting informed decision-making and public trust.'
              />
              <NoMediaCard
                title='Public Hearings'
                description='Ensure all public hearings are transcribed verbatim, providing an accurate and complete record of public input, promoting civic engagement by making proceedings easily accessible.'
              />
            </div>
          </div>
        </div>

        <div className='mx-auto max-w-6xl text-left md:text-center px-6 md:px-16 lg:px-16 xl:px-28'>
          <h2 className='text-xl font-semibold leading-7 text-white footer-title'>
            Policy and Legislative Documents
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            Documenting Every Decision for Informed Governance
          </p>
        </div>

        <div className='mx-auto max-w-7xl flex flex-col  gap-y-5 lg:gap-y-10 py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid max-w-none   items-start  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
            <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-x-10 lg:gap-y-10'>
              <NoMediaCard
                title='Legislative Sessions'
                description='Provide precise transcripts of legislative sessions to preserve the historical record and aid in legal and public reference, documenting every legislative decision for review and analysis.'
              />
              <NoMediaCard
                title='Press Briefings'
                description='By transcribing press briefings, you ensure that the information disseminated to the public is accurately recorded and readily available for reference supporting transparent communication.'
              />
            </div>

            <ContentCard
              title='Policy Announcements'
              direction='vertical'
              description='Accurate transcriptions of policy announcements help ensure that all stakeholders understand the details and implications of policy changes, supporting effective governance and public awareness ensuring that new policies are communicated clearly and effectively.'
              imgSrc='/government_industry/Conference-rafiki.png'
            />
          </div>
        </div>
      </div>

      <HowItWorks custom_class='legal-how-it-works' />

      <div
        className='bg-white relative isolate'
        style={{ background: 'FAFAFA' }}
      >
        <div className='relative overflow-hidden transition transform-gpu'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8 xl:px-14'>
            <div className='relative isolate py-24   px-6   sm:px-16 md:py-10  lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0'>
              <div className='md:min-w-[28rem] lg:min-w-[30rem]  lg:mx-0 lg:flex-auto lg:py-24 lg:text-left'>
                <h2 className='text-4xl md:text-[2.8rem] font-bold leading-10 section-title  text-gray-800 '>
                  Ready to Enhance Your Government Operations Today with Us?
                </h2>
                <p className='mt-6  text-xl leading-8 text-gray-600'>
                  Contact us today to discuss your requirements and discover how
                  our specialized transcription solutions can benefit your legal
                  practice.
                </p>

                <div className='mt-10 flex items-center flex-wrap justify-center gap-6 lg:justify-start'>
                  <a
                    href='/contact-us'
                    className='rounded-xl btn-vlg px-7 py-2.5 text-lg font-semibold text-white transition focus:ring-4 focus:ring-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className='hidden lg:block relative mt-16 h-80 lg:-mt-8 pr-10'>
                <img
                  className='lg:w-[28rem] xl:w-[32rem] max-w-none'
                  src='/government_industry/people-taking-part-high-protocol-event.jpg'
                  alt='Ready to Succeed with our transcription service'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' py-14 sm:py-12 bg-gray-100'>
        <div className='mx-auto max-w-7xl relative'>
          <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
            <p className='mt-2 text-4xl font-bold  section-title text-gray-900 md:text-5xl'>
              Government Frequently asked questions
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

      <AppFooter />
    </div>
  );
}
