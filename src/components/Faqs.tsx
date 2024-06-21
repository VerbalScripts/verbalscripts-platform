'use client';

import React from 'react';
import Accordion from './Accordion';

interface FaqsPropsIface {
  faqs: FaqsProp[];
}
export default function Faqs({ faqs }: FaqsPropsIface) {
  return (
    <div className='mx-auto max-w-2xl lg:max-w-4xl'>
      {faqs.map((faq: FaqsProp, index: number) => (
        <div className='border-b border-gray-300  mb-3' key={index}>
          <Accordion title={faq.title} id={`faqs-${index}`} active={false}>
            <p className='text-md text-gray-800 md:text-lg px-5'>{faq.content}</p>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
