import { FolderIcon } from '@heroicons/react/16/solid';
import React from 'react';

export default function FileEmpty() {
  return (
    <div className='flex flex-col items-center py-36'>
      <div>
        <FolderIcon className='text-gray-300 h-20 w-20' />
      </div>{' '}
      <div className='max-w-md my-4'>
        <div className='text-gray-600 font-semibold text-center text-2xl '>
          There is no content yet
        </div>
        <div className='text-gray-500'>
          Press upload media to upload content
        </div>
      </div>
    </div>
  );
}
