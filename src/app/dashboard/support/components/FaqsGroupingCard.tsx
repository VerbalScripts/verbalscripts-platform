'use client';

import React, { useState } from 'react';
import Faqs from '@/components/Faqs';
import { classNames } from '@/utils/classNames';
import { PlusIcon } from '@heroicons/react/24/outline';

interface FaqsGroupingCard {
  title: string;
  faqs: FaqsProp[];
}
export default function FaqsGroupingCard({ title, faqs }: FaqsGroupingCard) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={classNames(
        'bg-zinc-300/10 dark:bg-zinc-900 p-5 shadow-xl border border-gray-300  dark:border-gray-400 rounded-xl transition-all',
        open ? 'h-auto' : 'h-[15rem] overflow-hidden',
      )}
    >
      {/* title */}
      <div className={classNames('flex justify-between')}>
        <div className='text-xl lg:text-2xl font-semibold mb-4 footer-title'>
          {title}
        </div>
        <div>
          <button className='' onClick={() => setOpen(!open)}>
            <PlusIcon className='dark:text-gray-100 text-gray-700 w-5 h-5' />
          </button>
        </div>
      </div>
      {/* faq tabs */}
      <div className='space-y-3'>
        <Faqs faqs={faqs} />
      </div>
    </div>
  );
}
