import React from 'react';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { Metadata } from 'next';
import PopularPartner from '@/components/PopularPartner';
import Faqs from '@/components/Faqs';

export const metadata: Metadata = {
  title: 'Verbalscripts - Frequently asked Questions',

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

export default function FAQsPage() {
  const pageFaqs: FaqsProp[] = [
    {
      title: 'What is Verbalscripts’?',
      content:
        'Verbalscripts is an online digital platform  that uses crowd-sourced transcriptionists from around the world to transcribe your audio and video files into written transcripts. It is not a stand-alone program and does not require downloading a platform.',
    },
    {
      title: 'What currencies do we support? ',
      content: 'Purchases can be made in USD, AUD, NZD, EUR, JPY, and GBP.',
    },
    {
      title: 'What are the languages supported?',
      content:
        'Verbalscripts support a large variety of languages. Languages including Spanish, French, Italian, German, Portuguese, Chinese and Japanese, to name just a few. If you have a language you don’t see listed here, contact our Sales team and we will provide you with a quote. ',
    },
  ];

  const service_faqs: FaqsProp[] = [
    {
      title: 'What is your accuracy guarantee and how to achieve it?',
      content:
        'Our Standard and Verbatim service tiers come with an accuracy guarantee of 99% for all audible words in a high quality audio. We monitor the Word Error Rate (WER), which is what our accuracy guarantee is based on. Out of the total number of words, less than 1% of them will be inaccurate.',
    },
    {
      title: 'I want only a portion of my audio transcribed. Can I do that? ',
      content:
        'No. We transcribe the full duration of media files; however, it is easy to trim your audio or video using free software like Audacity or Quicktime. ',
    },
    {
      title:
        'I am not happy with the qualuty of my transcript. Can i submit it for review again?',
      content:
        'It is paramount for us to ensure your satisfaction with the completed transcript and we are sorry to hear if you are not happy with the final output. Please email us with the name of the file, email address used to upload your file, and let us know the exact problem you’re seeing with your transcription.',
    },
  ];

  const pricing: FaqsProp[] = [
    {
      title: 'How much does it cost for transcription?',
      content:
        'Pricing is set at a per minute rate which varies depending on the service that you choose, as well as the options that you choose at checkout. Click ‘Get A Quote’, fill out the selections and we’ll be able to provide a finalized price for bulk orders.',
    },
    {
      title: 'What currencies do we support? ',
      content: 'Purchases can be made in USD, AUD, NZD, EUR, JPY, and GBP.',
    },
    {
      title: 'What payments methods do we offer?',
      content:
        'Our standard payment method is by credit card. We accept Visa, Mastercard, American Express, and Discover Card.',
    },

    {
      title: 'Can I get a refund for my order?',
      content: `
Refunds are typically handled on a case by case basis depending on the situation, here are a couple of frequent scenarios:

If you realize that you have uploaded the incorrect audio file for us to transcribe, we’re able to offer a 1 hour cancellation window after purchase, for our Standard and Verbatim service tiers, but not Machine Express or First Draft due to our turnaround times – so please be sure to upload the correct file.
You feel that your transcript is inaccurate after it’s been completed – we will conduct a review, depending on the service tier level that you purchased.If it’s First Draft, there is no accuracy guarantee, however we will conduct a review to audit quality and make a determination after the review.If you ordered Standard or Verbatim we will conduct a review using our Word Error Rate (WER) guidelines to determine accuracy and will work with you if there is a discrepancy.For Machine Express orders, there are no refunds and we suggest uploading a sample file to test for this reason.
Delivery times are an estimate of what your file should take but are not guaranteed. If you’re having an issue with not getting your files back in time, please contact us to resolve.
For rush orders not delivered within our projected turnaround time, please contact us for a partial refund.

Anytime you are contacting our customer support please provide the file name, email address used to upload your file, and a summary of the problem.

        `,
    },
  ];

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative bg--600 h-auto isolate px-6 lg:px-8 bg-indigo-500 landing-page'>
        {/* <video className='absolute top-0 right-0 left-0 w-full -z-20 h-full object-cover'  loop autoPlay>
        <source src="landing_prodution.mp4" type='video/mp4' />
      </video> */}
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
        <div className='max-w-7xl md:py-20 py-20 md:mx-10 lg:mx-20 xl:mx-28 flex flex-col items-center text-center'>
          <h1 className='max-w-6xl lg:max-w-4xl xl:max-w-5xl relative z-10 text-5xl font-bold  text-white lg:text-5xl xl:text-6xl'>
            Frequently Asked Questions
          </h1>
          <p className='md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-xl leading-8 text-gray-100'>
            How can we help you?.
          </p>
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

      <div className='bg-white py-0'>
        <PopularPartner />
      </div>

      <div className='bg-white py-32 md:py-24'>
        <div className='mx-auto max-w-7xl relative'>
          <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
          <div className='absolute  right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />

          <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
            <p className='mt-2 text-3xl font-bold  section-title text-gray-900 md:text-4xl'>
              Service Delivery Questions
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
          </div>

          <div className='py-10 px-6'>
            <Faqs faqs={service_faqs} />
          </div>

          <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
            <p className='mt-2 text-3xl font-bold  section-title text-gray-900 md:text-4xl'>
              Verbalscripts Faqs
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
          </div>

          <div className='py-10 px-6'>
            <Faqs faqs={pageFaqs} />
          </div>

          <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
            <p className='mt-2 text-3xl font-bold  section-title text-gray-900 md:text-4xl'>
              Pricing and Payments Faqs
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
          </div>

          <div className='py-10 px-6'>
            <Faqs faqs={pricing} />
          </div>
        </div>
      </div>

      <div className='bg-white relative isolate'>
        <div className='bg-indigo-600 relative overflow-hidden transition transform-gpu'>
          <svg
            viewBox='0 0 1024 1024'
            className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
            aria-hidden='true'
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                <stop stopColor='#7775D6' />
                <stop offset={1} stopColor='#E935C1' />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className='bg-indigo-500 py-32 md:py-24'>
        <div className='mx-auto max-w-7xl relative'>
          <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
            <p className='mt-2 text-3xl font-bold  section-title text-white md:text-4xl'>
              Can{"'"}t Find what you are looking for?
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
          </div>
          <div className='my-10 flex items-center justify-center space-x-10'>

          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
