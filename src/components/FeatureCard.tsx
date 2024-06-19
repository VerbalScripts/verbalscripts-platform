import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}
export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className='border bg-white z-[2] relative after:absolute after:-z-[1] after:opacity-0  hover:after:opacity-100  after:shadow-xl after:top-0 after:bottom-0  after:transition-all after:left-0  after:w-full  hover:after:w-full after:rounded-md border-gray-200 rounded-xl py-5 px-6 md:py-10 md:px-12'>
      <div className='footer-title text-xl md:text-2xl lg:text-3xl font-semibold mb-3'>
        {title}
      </div>

      <div className='text-gray-600 text-md md:text-lg'>{description}</div>
    </div>
  );
}
