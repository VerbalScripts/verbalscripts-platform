import React from 'react';

import Faqs from './Faqs';

export default function FaqsPreview() {
  const faqs: FaqsProp[] = [
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
        'Why are your prices much lower than other transcription services? ',
      content: `Clients often wonder how Verbalscripts can offer transcription services at a much lower than our competitors while maintaining quality and reliability. Here's the straightforward explanation:<br/><br/>We operate efficiently, we prioritize building long-term relationships with our clients. Unlike some competitors who view clients as one-time transactions, we value customer satisfaction and rely on referrals for continued business success. 
Therefore, we do not engage in price gouging. Transparency is key to our business model. There are no hidden tricks or bait-and-switch tactics. Our commitment to value-
Customers like you ensures that we will remain in business for many years to come.

      `,
    },
    {
      title: 'Why are humans considered more reliable than AI and software?',
      content: `Humans possess the ability to grasp context and distinguish voices, even in situations where multiple speakers are talking simultaneously. Conversely, AI and software often struggle to accurately identify speakers and may make erroneous assumptions, particularly with homonyms and similar-sounding words.
<br/><br/>At Verbalscripts, your transcripts are 100% crafted by experienced transcriptionists, ensuring unparalleled quality and accuracy that software-generated transcripts cannot match.`,
    },
  ];

  return (
    <section className=' py-14 sm:py-28 bg-white'>
      <div className='mx-auto max-w-7xl relative'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
        <div className='absolute  right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />

        <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
          <p className='mt-2 text-4xl font-bold  section-title text-gray-900 md:text-5xl'>
            Frequently asked questions
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>

        <div className='py-10 px-6'>
          <Faqs faqs={faqs} />
        </div>

        <div className='mx-auto px-6 md:px-0 py-10 md:max-w-2xl text-left lg:text-center'>
          <p className='mt-2 text-2xl font-bold  section-title text-gray-900 md:text-3xl'>
            Need more Help ?
          </p>
          <div className='my-4 flex items-center space-x-4 justify-center'>
            <a
              href='/contact-us'
              className='text-gray-700 font-semibold  hover:bg-gray-100 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100  rounded-lg text-md px-5 py-2.5   me-2 mb-2 hover:ring-gray-200 hover:text-gray-600'
            >
              Contact Support
            </a>
            <a
              href='/faqs'
              className='text-white bg-indigo-500 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg text-md px-5 py-2.5  hover:bg-indigo-400 me-2 mb-2 '
            >
              More Faqs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
