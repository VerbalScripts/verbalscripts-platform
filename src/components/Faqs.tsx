import React from 'react';
import Accordion from './Accordion';

interface FaqsPropsIface {
  faqs: FaqsProp[];
}
export default function Faqs({ faqs }: FaqsPropsIface) {
  return (
    <div className='mx-auto max-w-2xl lg:max-w-4xl'>
      {faqs.map((faq: FaqsProp, index: number) => (
        <Accordion
          key={index}
          title={faq.title}
          id={`faqs-${index}`}
          active={false}
        >
          <p className='text-lg'>{faq.content}</p>
        </Accordion>
      ))}
    </div>
  );
}
