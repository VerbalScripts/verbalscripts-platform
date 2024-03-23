import React from 'react';
import { LogoDropbox, LogoGoogle } from 'react-ionicons';

export default function FileUploadOptions() {
  return (
    <div className='my-16 flex items-center gap-5'>
      <a href='#' className='px-4 py-3 rounded-md border border-gray-400'>
        <LogoDropbox
          color={'#000'}
          width={'45px'}
          height={'45px'}
          aria-hidden='true'
        />
      </a>
      <a href='#' className='px-4 py-3 rounded-md border border-gray-400'>
        <LogoGoogle
          color={'#000'}
          width={'45px'}
          height={'45px'}
          aria-hidden='true'
        />
      </a>
    </div>

    
  );
}
