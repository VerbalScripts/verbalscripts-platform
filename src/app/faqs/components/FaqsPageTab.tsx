'use client';

import React, { useState } from 'react';
import Faqs from '@/components/Faqs';
import { classNames } from '@/utils/classNames';

export default function FaqsPageTab() {
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

  const topics = [
    {
      id: 'all',
      title: 'All Questions',
      items: [...service_faqs, ...service_faqs, ...pageFaqs, ...pricing],
    },
    {
      id: 'service',
      title: 'Service Delivery',
      items: service_faqs,
    },
    {
      id: 'legal',
      title: 'Legal Services',
      items: pageFaqs,
    },
    {
      id: 'pricing',
      title: 'Pricing & Payment',
      items: pricing,
    },
  ];

  const [activeTab, setActiveTab] = useState<string>('all');

  const displayFaqsTopic = (id: string) =>
    topics.find((topic) => topic.id == id);

  return (
    <div className='flex flex-wrap lg:flex-nowrap items-start space-y-16 lg:space-x-6 lg:space-y-0 px-6 md:px-16 lg:px-24.'>
      <div className='w-full lg:sticky top-[20%]'>
        <h2 className='text-xl font-bold leading-7 capitalize footer-title'>
          What are Your Frequently Asked Questions?
        </h2>
        <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-800  00 section-title'>
          Questions ?
        </p>

        <p className='mt-2 text-md lg:text-lg leading-7   text-left text-gray-600  00 section-title'>
          If you have any question we have answers for you here. Incase we don
          {"'"}t please feel free to reach us here{' '}
          <a
            className='footer-title'
            href='mailto:support@verbalscripts.com?subject=Help Me!'
          >
            support@verbalscripts.com
          </a>
        </p>
        {/* faqs menu */}

        <div className='flex flex-col my-5' >
          {topics.map((faq, index) => (
            <a
            href='#faq-content-tab'
              onClick={() => setActiveTab(faq.id)}
              key={index}
              className={classNames(
                'py-3 px-10 font-bold transition-all duration-100 bg-gray-200 capitalize text-left rounded-md mb-2',

                faq.id == activeTab
                  ? 'faqs-tab-active-button text-white'
                  : ' text-gray-600 ',
              )}
            >
              {faq.title}
            </a>
          ))}
        </div>
      </div>
      <div
      id='faq-content-tab'
        className='
    lg:order-2 lg:min-w-[40rem] xl:min-w-[50rem] w-full'
      >
        {activeTab && (
          <div key={displayFaqsTopic(activeTab)?.id} className='mb-3'>
            <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
              <p className='mt-2 text-3xl text-left font-bold  section-title text-gray-900 md:text-4xl'>
                {displayFaqsTopic(activeTab)?.title}
              </p>
            </div>

            <div className='md:py-10 md:px-6 mt-5'>
              <Faqs faqs={displayFaqsTopic(activeTab)?.items || []} />
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
}
