import { classNames } from '@/utils/classNames';
import { Menu, Transition } from '@headlessui/react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';

export default function FileUploadFromLocal() {
  // const uploadOptions = [
  //   {
  //     title: 'Upload',
  //     logoUrl: '/icons/upload.png',
  //     id: 'local-file',
  //   },
  //   {
  //     title: 'Link',
  //     logoUrl: '/icons/link.png',
  //     id: 'link',
  //   },
  //   {
  //     title: 'Google Drive',
  //     logoUrl: '/icons/google-drive.png',
  //     id: 'google-drive',
  //   },
  //   {
  //     title: 'Dropbox',
  //     logoUrl: '/icons/dropbox.png',
  //     id: 'dropbox',
  //   },
  //   {
  //     title: 'One Drive',
  //     logoUrl: '/icons/one-drive.png',
  //     id: 'one-drive',
  //   },
  //   {
  //     title: 'Youtube',
  //     logoUrl: '/icons/youtube.png',
  //     id: 'youtube',
  //   },
  // ];

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='flex flex-col mb-5 gap-x-2 rounded-xl border-2 border-dashed border-indigo-500 bg-indigo-50 font-semibold px-4 py-2  focus-within:ring-indigo-400'>
          <ArrowUpTrayIcon
            className='-mr-1 h-5 w-5 text-indigo-500'
            aria-hidden='true'
          />
          <span className='text-indigo-500'>Upload or Drop</span>
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
        <Menu.Items className='absolute left-0 -mt-2 z-10  w-44 origin-top divide-y  rounded-md bg-indigo-50 shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1 w-full'>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 ' : 'text-gray-700',
                    'flex items-center px-4 py-2.5 text-sm w-full',
                  )}
                >
                  <span className='text-gray-600 font-semibold'>File(s)</span>
                </button>
              )}
            </Menu.Item>
          </div>

          <div className='py-1 w-full'>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active
                      ? 'bg-gray-100 text-left text-gray-900'
                      : 'text-gray-700',
                    'flex items-center px-4 py-2.5 text-sm w-full',
                  )}
                >
                  <span className='text-gray-600 font-semibold'>Folder</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
