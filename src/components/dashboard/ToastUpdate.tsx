import React from 'react';
import { Button, Toast } from 'flowbite-react';
import { HiCheck } from 'react-icons/hi';

export default function ToastUpdate() {
  return (
    <Toast>
      <div className='flex items-start'>
        <div className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300'>
          <HiCheck className='h-5 w-5' />
        </div>
        <div className='ml-3 text-sm font-normal'>
          <span className='mb-1 text-sm font-semibold text-gray-900 dark:text-white'></span>
          <div className='mb-2 text-sm font-normal'>
            A new software version is available for download.
          </div>
          <div className='flex gap-2'>
            <div className='w-auto'>
              <Button size='xs'>Update</Button>
            </div>
            <div className='w-auto'>
              <Button color='light' size='xs'>
                Not now
              </Button>
            </div>
          </div>
        </div>
        <Toast.Toggle />
      </div>
    </Toast>
  );
}
