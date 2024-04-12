import { classNames } from '@/utils/classNames';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FileUploadMenuOptions() {
  const uploadOptions = [
    {
      title: 'Upload',
      logoUrl: '/icons/upload.png',
      id: 'local-file',
    },
    {
      title: 'Link',
      logoUrl: '/icons/link.png',
      id: 'link',
    },
    {
      title: 'Google Drive',
      logoUrl: '/icons/google-drive.png',
      id: 'google-drive',
    },
    {
      title: 'Dropbox',
      logoUrl: '/icons/dropbox.png',
      id: 'dropbox',
    },
    {
      title: 'One Drive',
      logoUrl: '/icons/one-drive.png',
      id: 'one-drive',
    },
    {
      title: 'Youtube',
      logoUrl: '/icons/youtube.png',
      id: 'youtube',
    },
    {
      title: 'Vimeo',
      logoUrl: '/icons/vimeo.png',
      id: 'vimeo',
    },
  ];

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='flex mb-5 gap-x-2 rounded-xl bg-indigo-500 font-semibold px-4 py-2  focus-within:ring-4 focus-within:ring-indigo-400'>
          <CloudArrowUpIcon className='h-5 w-5 text-white' />
          <span className='text-white'>Add Files</span>
          <ChevronDownIcon
            className='-mr-1 h-5 w-5 text-white'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top divide-y  rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          {uploadOptions.map((iupload) => (
            <div key={iupload.id} className='py-1'>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={`/dashboard/upload?option=${iupload.id}`}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center gap-x-3 px-4 py-2.5 text-sm',
                    )}
                  >
                    <Image
                      src={iupload.logoUrl}
                      height={23}
                      width={23}
                      alt={iupload.id}
                    />
                    <span className='text-gray-600 font-semibold'>
                      {iupload.title}
                    </span>
                  </Link>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
