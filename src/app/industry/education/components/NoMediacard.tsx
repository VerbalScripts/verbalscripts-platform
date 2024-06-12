import { classNames } from '@/utils/classNames';
import React from 'react';

interface NoMediaCardProps {
  title: string;
  description: string;
}
export default function NoMediaCard({
  title,
  description,
}: NoMediaCardProps) {
  return (
    <div className={
        classNames(
            'flex  border bg-white border-gray-300',
            'flex-wrap lg:flex-nowrap'
        )
    }>
      <div className={
        classNames(
            ' mb-5 px-3 py-3 lg:px-6 lg:py-6',
        )
      }>
        <h2 className='mb-5 text-2xl md:text-3xl  font-bold text-left text-gray-900 section-title'>
          {title}
        </h2>
        <p className='text-md lg:text-lg  text-gray-700'>
          {description}
        </p>
      </div>

     
    </div>
  );
}
