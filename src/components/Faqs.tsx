'use client';

import React from 'react';
import Accordion from './Accordion';
import { classNames } from '@/utils/classNames';

interface FaqsPropsIface {
  faqs: FaqsProp[];
}
export default function Faqs({ faqs }: FaqsPropsIface) {
  return (
    <div className='mx-auto max-w-2xl lg:max-w-4xl'>
      {faqs.map((faq: FaqsProp, index: number) => (
        <div className={classNames(
              index == faqs.length -1 ? "": "border-b border-gray-300"
        )} key={index}>
          <Accordion title={faq.title} id={`faqs-${index}`} active={false}>
            <p className='text-lg'>{faq.content}</p>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
