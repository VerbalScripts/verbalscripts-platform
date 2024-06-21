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
    {
      title: 'What file formats does Verbalscripts accept?',
      content: `Verbalscripts accommodates any file format required by our customers.`,
    },
    {
      title: 'Does Verbalscripts support transcription for complex topics?',
      content: `Absolutely. Verbalscripts boasts a team of experienced transcribers equipped with the necessary training and expertise to tackle even the most intricate subjects. Rest assured, whether your project is complex or straightforward, we're here to serve your transcription needs.`,
    },
    {
      title: 'What industries does Verbalscripts specialize in?',
      content: `Verbalscripts caters to a diverse range of industries. While our primary focus lies in providing legal transcription services for court reporting and legal purposes, we also specialize in transcription for higher education and general business sectors. Additionally, our services extend to conferences and various other industries such as media, entertainment, government, and finance.`,
    },
    {
      title: 'How does Verbalscripts Human transcription service work?',
      content: `Our human transcription service entails the conversion of audio to text files by our experienced transcribers, all of whom are native English speakers. We guarantee an accuracy of your transcripts. Simply upload or send your files through your preferred method. Our skilled transcribers handle the task, and once our rigorous 3-step process is completed, your transcript will be accessible in your account. Additionally, we'll send you the transcript via email in your preferred format. Any revisions you require will be promptly accommodated.`,
    },
    {
      title: 'What languages do Verbalscripts support?',
      content: `Currently, we only support English. However, we are working on expanding our language offerings. Stay informed about updates by checking our website.`,
    },
    {
      title: 'Can Verbalscripts transcribe multiple speaker files?',
      content: `We pride ourselves on transcribing legal transcription, focus groups, panel discussions, and other multiple-speaker files. No additional fees will be incurred for labelling speakers or formatting to your specific requirements.`,
    },
    {
      title: 'Can Verbalscripts provide timestamped transcripts?',
      content: `Yes. We offer timestamped transcripts upon request. You can indicate your preference for timestamping during the upload process. Additionally, we can provide samples of our completed timestamped transcripts for your review.`,
    },
    {
      title: '. What formats and templates do Verbalscripts accept?',
      content: `We are flexible and can accommodate almost any request when it comes to formats and templates. We tailor our services to your specific needs, as long as they do not involve proprietary software we cannot access.`,
    },
    {
      title: '. How does Verbalscripts communicate with clients?',
      content: `We always prefer email. We prefer to use the primary email supplied with the audio file, but we can also copy any other email ID if you specifically instruct us to do so.<br/>
Based on your comfort, our personnel can also text chat with you to address queries instantaneously if you supply us with your phone number. <br/>
Sometimes our email might not successfully make it through to your mail server. It might get marked as spam or be turned away by your mail server. You can always log in to our website to download your transcripts. <br/>
Lastly, we can call you on your landline or mobile, but we always have this as the last resort. We discreetly discourage our production team from making repeated client calls unless & until absolutely necessary or urgent.
`,
    },
    {
      title: 'Are my transcripts handled by experienced professionals?',
      content: `Absolutely! At Verbalscripts, your transcripts are meticulously crafted by experienced transcriptionists, ensuring unparalleled quality and accuracy that software-generated transcripts cannot match.`,
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
    {
      title:
        'I am not happy with the qualuty of my transcript. Can i submit it for review again?',
      content: `We understand the importance of ensuring your satisfaction with our transcript services. If you're dissatisfied with the quality of the delivered transcript, we're here to assist you. To submit it for review, please reach out to us with the file name and details regarding the specific issues you've encountered. Your feedback is invaluable, and we are committed to addressing any concerns to meet your expectations.`,
    },
  ];

  const pricing: FaqsProp[] = [
    {
      title:
        'Why are your prices much lower than other transcription services? ',
      content: `Clients often wonder how Verbalscripts can offer transcription services at a much lower than our competitors while maintaining quality and reliability. Here's the straightforward explanation:<br/><br/>We operate efficiently, we prioritize building long-term relationships with our clients. Unlike some competitors who view clients as one-time transactions, we value customer satisfaction and rely on referrals for continued business success. 
Therefore, we do not engage in price gouging. Transparency is key to our business model. There are no hidden tricks or bait-and-switch tactics. Our commitment to value-
Customers like you ensures that we will remain in business for many years to come.

      `,
    },
    {
      title: 'How do Verbalscripts billing procedures work?',
      content: `We offer flexible billing options. Depending on your preference, we can bill after each file or on a biweekly basis. Most recurring clients opt for monthly billing for the previous month's work, while one-time or less consistent clients may choose upfront or per-file billing.`,
    },
    {
      title: 'How much does transcription cost?',
      content: `Verbalscripts offers competitive pricing that is lower than many of our competitors. We guarantee to meet your accuracy requirements at affordable rates and can even customize pricing based on your specific needs. Feel free to contact us with your requirements and budget, and we'll work with you to find the best solution.`,
    },

    {
      title: 'What payment options are available?',
      content: `We offer various payment methods including <b>direct deposits</b>, <b>wire transfers</b>, <b>PayPal</b>, <b>Payoneer</b>, <b>Wise</b>, <b>Zelle</b>, <b>Venmo</b> and other online payment options which we are currently in the process of integrating.`,
    },
    {
      title:
        'Are there any additional fees or charges besides the agreed rates?',
      content: `No, you only incur charges for the work produced either per page or per minute of the agreed rates. There are no extra fees, charges, or costs involved. This includes no overtime fees, rush fees, or minimum usage requirements.`,
    },
    {
      title:
        'Is there a fee for submitting my work after business hours or on holidays / weekends?',
      content: `No! You can submit your work any time, any day of the year, and expect to receive it at the agreed TNT. Pricing remains the same!`,
    },
    {
      title:
        'Can I cancel my order and get a refund if I\'ve already paid for transcription?',
      content: `Yes, you can cancel your order at any time before the scheduled delivery date if you've already made payment. Refunds are processed within 1 business day. The refund amount is determined by the progress made on the transcription or translation. If the progress is at 0%, you will receive a full refund. However, as progress increases, the refund amount decreases accordingly.`,
    },
    {
      title:
        'Do you offer refunds after the transcripts has been delivered?',
      content: `No, we do not offer refunds after the transcripts has been delivered. However, we provide free re-reviews once the transcription has been delivered to ensure your satisfaction.`,
    },
    {
      title:
        'Is price same for audio and video transcription?',
      content: `Yes. We treat audio and video files the same way.`,
    },
    {
      title:
        'Is there any option to make the payment after the transcripts are delivered?',
      content: `Yes, customers can sign the postpaid agreement to make the payment after delivery.`,
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
