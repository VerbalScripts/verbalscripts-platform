import React from 'react';
import type { Metadata } from 'next';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import PopularPartner from '@/components/PopularPartner';

export const metadata: Metadata = {
  title: 'Verbalscripts - About Us',
  description:
  'We provide fast and affordable client-ready transcription services tailored to your needs through transcription, reviewing and proofreading.',
  openGraph: {
    type: 'website',
    url: 'https://verbalscripts.com',
    title: 'Verbalscripts - Learn More',
    description:
      'We provide fast and affordable client-ready transcription services tailored to your needs through transcription, reviewing and proofreading.',

    siteName: 'Verbalscripts - 100% Human Transcription Services',
    images: [
      {
        url: 'https://verbalscripts.com/icons/logo-banner.jpg',
        secureUrl: 'https://verbalscripts.com/icons/logo-banner.jpg',
        alt: 'Verbalscripts - Learn More',
        type: 'image/jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://verbalscripts.com',
  },
};
export default function Page() {

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative about-landing   h-auto  px-6 py-20 md:pt-0 pb-10 md:pb-32 md:py-32  lg:py-24 md:px-20 lg:px-28'>
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

        <div className='max-w-2xl lg:max-w-4xl flex flex-col items-center '>
          <h1 className='text-4xl font-bold capitalize text-left  md:text-center  text-white sm:text-5xl'>
            VerbalScripts, Best Partner For Your Industries Transcription Needs.
          </h1>

          <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg text-left  md:text-center leading-7 text-gray-100'>
            We pride ourselves on being at the forefront of the transcription
            industry, providing comprehensive and cutting-edge solutions
            tailored to meet the unique needs of our diverse clientele. With a
            relentless commitment to excellence and client satisfaction, we
            stand as your trusted partner in transcription services.
          </p>

          <div className='mt-10 flex space-x-2'>
            <a
              href='/upload-files'
              className='inline-flex rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
            >
              <span className='flex'>Get Started</span>
            </a>
            <a
              href='/contact-us'
              className='inline-flex rounded-lg bg-indigo-500 px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
            >
              <span className='flex'>Contact us</span>
            </a>
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
      <div className='bg-white relative pb-56'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#f7961f'
            fill-opacity='1'
            d='M0,32L48,58.7C96,85,192,139,288,170.7C384,203,480,213,576,202.7C672,192,768,160,864,122.7C960,85,1056,43,1152,48C1248,53,1344,107,1392,133.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          ></path>
        </svg>

        <div className='absolute flex justify-center left-0 w-full md:-top-[2rem] lg:-top-[2rem]'>
            <img  src='/about-us/about-us-preview.png' className='object-cover rounded-xl lg:w-[39rem]' alt="" />
        </div>
      </div>

      <div className='bg-gray-100 py-0'>
        <PopularPartner />
      </div>

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center space-x-6'>
            <div className='lg:order-2 lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                What is Our Mission ?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                <span className='relative z-10'>
                  Redefining{' '}
                  <span className='z-10 absolute -bottom-5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                your Enterprise Needs into Transcription Excellence.
              </p>

              <p className='text-gray-700 text-md md:text-lg'>
                Our mission is clear: to redefine transcription excellence by
                delivering unparalleled accuracy, efficiency, and innovation in
                every project we undertake. Through a combination of advanced
                technology, industry expertise, and unwavering dedication, we
                aim to set new standards for quality and reliability in the
                transcription landscape
              </p>

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
                src='/about-us/light-bulb-wooden-table.jpg'
                className='lg:absolute -top-24 -left-10 lg:-top-64  w-[90%] -ml-7 lg:-ml-0 md:w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white py-14 md:py-24'>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='mx-auto max-w-5xl lg:text-center '>
            <h2 className='text-base font-semibold leading-7 text-indigo-600'>
              Our Approach to Your Enterprises, Our Partners?
            </h2>
            <p className='text-3xl font-bold  text-gray-800 sm:text-4xl'>
              Client-Centric Approach: Your Success, Our Priority
            </p>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              We believe that the key to our success lies in prioritizing the
              needs and objectives of our clients above all else. Our
              client-centric approach is not merely a philosophy but a
              fundamental aspect of our identity, guiding every decision we make
              and every interaction we have. Your satisfaction is our ultimate
              goal, and we go above and beyond to ensure that every aspect of
              our service exceeds your expectations.
            </p>
          </div>
        </div>
        <div className='mx-auto max-w-7xl flex flex-col  gap-y-5 lg:gap-y-10 py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex border border-gray-300'>
            <div className='px-6 py-6 lg:max-w-[50%]'>
              <h2 className='mb-5 text-2xl md:text-3xl  font-bold text-left text-gray-900 section-title'>
                Innovative Solutions for Every Industry
              </h2>
              <p className='text-md  text-gray-700'>
                With a deep understanding of the unique challenges and
                requirements of various industries, we offer a wide range of
                specialized transcription services tailored to meet your
                specific needs. Whether you operate in healthcare, legal,
                academic, corporate, or any other sector, our team of experts
                has the knowledge and expertise to deliver customized solutions
                that align with your goals and objectives.
              </p>
            </div>

            <div className=''>
              <img
                className='w-full h-full object-cover'
                src='/about-us/glowing-filament-ignites-inspiration-bright-ideas-indoors-generated-by-ai.jpg'
                alt=''
              />
            </div>
          </div>

          <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
            <div className='flex flex-col border border-gray-300 px-3 py-3 lg:px-6 lg:py-6'>
              <div className='lg:min-w-[50%]  mb-5'>
                <h2 className='mb-5 text-2xl md:text-3xl  font-bold text-left text-gray-900 section-title'>
                  Unmatched Accuracy and Precision
                </h2>
                <p className='text-md  text-gray-700'>
                  Precision is the hallmark of our transcription services. Our
                  team of highly skilled professionals utilizes state-of-the-art
                  technology and rigorous quality control processes to ensure
                  the utmost accuracy and reliability in every transcript we
                  deliver. From complex technical terminology to nuanced
                  conversations, we capture every detail with meticulous
                  attention to ensure that your transcripts are error-free and
                  true to the original content.
                </p>
              </div>

              <div className=''>
                <img
                  className='w-full h-full object-cover'
                  src='/about-us/archery-bow-arrow-with-target.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='flex flex-col border border-gray-300 py-3 px-3 lg:px-6 lg:py-6'>
              <div className='order-2  mt-5'>
                <h2 className='mb-5 text-2xl md:text-3xl  font-bold text-left text-gray-900 section-title'>
                  Data Security and Confidentiality
                </h2>
                <p className='text-md  text-gray-700'>
                  We understand the sensitive nature of the information
                  entrusted to us, which is why we prioritize the highest
                  standards of data security and confidentiality. Our robust
                  security protocols and encryption measures ensure that your
                  data remains safe and protected throughout the transcription
                  process, giving you peace of mind knowing that your sensitive
                  information is in good hands.
                </p>
              </div>

              <div className='order-1'>
                <img
                  className='w-full h-full object-cover'
                  src='/about-us/blue-padlock-secures-computer-data-network-connection-safe-generated-by-ai.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>

          <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
            <div className='flex flex-col border border-gray-300 px-3 py-3 lg:px-6 lg:py-6 '>
              <div className='lg:min-w-[50%]  mb-5'>
                <h2 className='mb-5 text-2xl md:text-3xl  font-bold text-left text-gray-900 section-title'>
                  Continuous Improvement and Innovation
                </h2>
                <p className='text-md  text-gray-700'>
                  In an ever-evolving landscape, we recognize the importance of
                  staying ahead of the curve and embracing innovation. That{"'"}s
                  why we are committed to continuous improvement and investment
                  in cutting-edge technologies and methodologies that enable us
                  to deliver even better results for our clients. By staying
                  abreast of the latest advancements in transcription
                  technology, we ensure that you always receive the most
                  efficient, accurate, and cost-effective solutions available.
                </p>
              </div>

              <div className=''>
                <img
                  className='w-full h-full object-cover'
                  src='/about-us/man-wooden-cubes-table-management-concept.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='flex flex-col border border-gray-300 py-3 px-3 lg:px-6 lg:py-6'>
              <div className='order-2 mt-5'>
                <h2 className='mb-5 text-2xl md:text-3xl  font-bold text-left text-gray-900 section-title'>
                  Building Lasting Partnerships
                </h2>
                <p className='text-md  text-gray-700'>
                  At VerbalScripts, we don{"'"}t just view our clients as
                  transactions; we see them as long-term partners with whom we
                  can build mutually beneficial relationships. Our dedicated
                  team works closely with you to understand your unique needs,
                  challenges, and objectives, allowing us to develop customized
                  solutions that address your specific requirements and drive
                  tangible results for your business.
                </p>
              </div>

              <div className='order-1'>
                <img
                  className='w-full h-full object-cover'
                  src='/about-us/successful-businessmen-seal-deal-with-firm-handshake-generated-by-ai.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>

  

      <div className='py-10 md:py-16 about-landing'>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center space-x-6'>
            <div className='lg:order-2 lg:max-w-[35rem] text-left'>
              <p className='mb-2 lg:mb-5 text-4xl md:text-5xl  font-bold text-left text-white section-title'>
                Experience the VerbalScripts Advantage
              </p>

              <p className='text-gray-50 text-md md:text-lg'>
                Discover the difference that [Company Name] can make for your
                transcription needs. Experience unmatched accuracy, reliability,
                and professionalism delivered with a personal touch that sets us
                apart from the rest. Join the ranks of satisfied clients who
                have entrusted us with their transcription needs and experience
                the peace of mind that comes with knowing you have a trusted
                partner by your side.
              </p>

              <div className='mt-10'>
                <a
                  href='/upload-files'
                  className='inline-flex bg-indigo-500 items-center gap-x-2 rounded-lg  px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 '
                >
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
            <div className=' order-1 mt-10 lg:mt-0 relative w-full'>
              <img
                src='/about-us/closeup-diverse-people-joining-their-hands.jpg'
                className='lg:absolute -top-24 -left-10 lg:-top-40  w-[90%] -ml-7 lg:-ml-0 md:w-[30rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
