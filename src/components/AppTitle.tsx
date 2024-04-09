import React from 'react';

export default function AppTitle() {
  return (
    <div className='flex lg:flex-1 mb-16'>
      <a href='/' className='-m-1.5 p-1.5 text-2xl text-gray-700 font-bold'>
        <span>Verbal</span>
        <span className='text-orange-500 italic'>Scripts</span>
      </a>
    </div>
  );
}
