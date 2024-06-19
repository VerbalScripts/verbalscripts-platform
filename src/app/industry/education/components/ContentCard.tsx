import { classNames } from '@/utils/classNames';
import React from 'react';
type CardDirection = 'top' | 'bottom';

interface ContentCardProps {
  imgSrc: string;
  title: string;
  description: string;
  direction?: CardDirection;
}
export default function ContentCard({
  title,
  description,
  imgSrc,
  direction = 'top',
}: ContentCardProps) {
  return (
    <div
      className={classNames(
        'flex  border bg-white border-gray-300',
        'flex-col',
      )}
    >
      <div
        className={classNames(
          ' mb-5 px-3 py-3 lg:px-6 lg:py-6',
          direction == 'top' ? 'order-2' : '',
        )}
      >
        <h2 className='mb-5 text-2xl md:text-3xl  font-bold text-left text-gray-900 section-title'>
          {title}
        </h2>
        <p className='text-md lg:text-lg  text-gray-700'>{description}</p>
      </div>

      <div className=''>
        <img className='w-full h-full object-cover' src={imgSrc} alt={title} />
      </div>
    </div>
  );
}
