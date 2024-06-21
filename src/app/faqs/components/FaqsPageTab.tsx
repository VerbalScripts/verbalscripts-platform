/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { useState } from 'react';
import Faqs from '@/components/Faqs';
import { classNames } from '@/utils/classNames';

export default function FaqsPageTab() {
  const human_transcripts: FaqsProp[] = [
    {
      title: 'What sets Verbalscripts apart from other transcription services?',
      content: `<b>Experienced Transcriptionists:</b> Our transcriptionists undergo a thorough recruitment and training process to meet our high standards. They exhibit precise attention to detail, possess a firm grasp of English grammar, and are dedicated to ensuring your transcripts meet the highest standards of quality and accuracy.<br/><br/>
          <b>Value for Money:</b> Verbalscripts offers a cost-effective solution, ensuring high-quality transcripts at a lower rates compared to competitors, allowing you to save without compromising on quality<br/><br/>        
          <b>Accuracy Guarantee:</b> Verbalscripts ensures transcript accuracy through four-step process: transcribing, reviewing, proofreading, and formatting, guaranteeing high-quality transcripts.<br/><br/>
          <b>Dedicated Customer Service:</b> Enjoy personalized support with a dedicated contact person assigned to you, ensuring seamless communication and assistance.<br/><br/>
          <b>Extensive Experience:</b> With a track record of serving over 500 satisfied customers, Verbalscripts brings extensive experience and expertise to every transcription project.
          `,
    },
    {
      title:
        "What is Verbalscripts' accuracy guarantee and how do you achieve it? ",
      content:
        'Verbalscripts is committed to providing accurate transcription services. We achieve this through a meticulous four-step process by our experienced human transcriptionists. This process includes transcribing, reviewing, proofing, and formatting to ensure high-quality transcripts.<br/><br/>In the rare instance that a customer is dissatisfied with their transcript, we offer a comprehensive review process. If any errors are identified that do not meet our stringent standards, we are happy to redo the file to ensure complete satisfaction.',
    },
    {
      title: 'Why are humans considered more reliable than AI and software?',
      content: `Humans possess the ability to grasp context and distinguish voices, even in situations where multiple speakers are talking simultaneously. Conversely, AI and software often struggle to accurately identify speakers and may make erroneous assumptions, particularly with homonyms and similar-sounding words.
      <br/><br/>At Verbalscripts, your transcripts are 100% crafted by experienced transcriptionists, ensuring unparalleled quality and accuracy that software-generated transcripts cannot match.`,
    },
    {
      title: 'Why do Verbalscripts concentrate on 6 industries? ',
      content:
        "At Verbalscripts, we prioritize six key industries due to our transcriptionists' expertise and specialized training in these areas. This specialized training, coupled with their background knowledge, enables them to grasp common terminologies and context within these fields, ensuring an exceptional accuracy in every completed file. Despite this focus, our extensive transcription experience allows us to cover a wide range of subject areas. So, even if your subject doesn't fall within our primary industries, rest assured that we likely have an expert suitable for your needs. Contact us today to discover more about our comprehensive transcription services.",
    },

    {
      title:
        "What is Verbalscripts' accuracy guarantee and how do you achieve it? ",
      content:
        'Verbalscripts is committed to providing accurate transcription services. We achieve this through a meticulous four-step process by our experienced human transcriptionists. This process includes transcribing, reviewing, proofing, and formatting to ensure high-quality transcripts.<br/><br/>In the rare instance that a customer is dissatisfied with their transcript, we offer a comprehensive review process. If any errors are identified that do not meet our stringent standards, we are happy to redo the file to ensure complete satisfaction.',
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
        "We understand the importance of ensuring your satisfaction with our transcript services. If you're dissatisfied with the quality of the delivered transcript, we're here to assist you. To submit it for review, please reach out to us with the file name and details regarding the specific issues you've encountered. Your feedback is invaluable, and we are committed to addressing any concerns to meet your expectations.",
    },
    {
      title:
        'I am not happy with the qualuty of my transcript. Can i submit it for review again?',
      content: `We understand the importance of ensuring your satisfaction with our transcript services. If you're dissatisfied with the quality of the delivered transcript, we're here to assist you. To submit it for review, please reach out to us with the file name and details regarding the specific issues you've encountered. Your feedback is invaluable, and we are committed to addressing any concerns to meet your expectations.`,
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
      items: [
        {
          id: 'service',
          title: 'Service Delivery',
          items: service_faqs,
        },
        {
          id: 'Human',
          title: 'Human Transcription',
          items: human_transcripts,
        },
        {
          id: 'pricing',
          title: 'Pricing & Payment',
          items: pricing,
        },
      ],
    },
    {
      id: 'service',
      title: 'Service Delivery',
      items: service_faqs,
    },
    {
      id: 'Human',
      title: 'Human Transcription',
      items: human_transcripts,
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
    <div className='flex flex-wrap lg:flex-nowrap items-start space-y-16 lg:space-x-6 lg:space-y-0 px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='w-full xl:w-[40%] lg:sticky top-[20%]'>
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

        <div className='flex flex-col my-5'>
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
        {activeTab && activeTab == 'all'
          ? displayFaqsTopic('all')?.items.map((faq_topic) => (
              <div key={faq_topic.id} className='mb-3'>
                <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
                  <p className='mt-2 text-3xl text-left font-bold  section-title text-gray-900 md:text-4xl'>
                    {faq_topic.title}
                  </p>
                </div>

                <div className='md:py-10 md:px-6 mt-5'>
                  {/* @ts-ignore */}
                  <Faqs faqs={faq_topic.items || []} />
                </div>
              </div>
            ))
          : activeTab && (
              <div key={displayFaqsTopic(activeTab)?.id} className='mb-3'>
                <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
                  <p className='mt-2 text-3xl text-left font-bold  section-title text-gray-900 md:text-4xl'>
                    {displayFaqsTopic(activeTab)?.title}
                  </p>
                </div>

                <div className='md:py-10 md:px-6 mt-5'>
                  {/* @ts-ignore */}
                  <Faqs faqs={displayFaqsTopic(activeTab)?.items || []} />
                </div>
              </div>
            )}
      </div>
    </div>
  );
}
