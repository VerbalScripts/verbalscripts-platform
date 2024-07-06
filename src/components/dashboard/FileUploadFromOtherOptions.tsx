import { classNames } from '@/utils/classNames';
import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface FileUploadFromOtherOptionsProps {
  openDropBoxPicker: () => void;
  openOneDrivePicker: () => void;
  openGoogleDrivePicker: () => void;
  openYoutube: () => void;
  openDirectLink: () => void;
}
export default function FileUploadFromOtherOptions({
  openDropBoxPicker,
  openOneDrivePicker,
  openGoogleDrivePicker,
  openYoutube,
  openDirectLink,
}: FileUploadFromOtherOptionsProps) {
  const uploadOptions = [
    {
      title: 'Dropbox',
      logoUrl: '/icons/dropbox.png',
      id: 'dropbox',
      cb: openDropBoxPicker,
    },

    {
      title: 'Google Drive',
      logoUrl: '/icons/google-drive.png',
      id: 'google-drive',
      cb: openGoogleDrivePicker,
    },
    {
      title: 'One Drive',
      logoUrl: '/icons/one-drive.png',
      id: 'one-drive',
      cb: openOneDrivePicker,
    },
    {
      title: 'Youtube',
      logoUrl: '/icons/youtube.png',
      id: 'youtube',
      cb: openYoutube,
    },
    {
      title: 'Link',
      logoUrl: '/icons/link.png',
      id: 'link',
      cb: openDirectLink,
    },
  ];

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='btn-vlg flex items-start flex-col  gap-y-2 rounded-sm md:rounded-md  bg-indigo-50 font-semibold px-4 py-2  focus-within:ring-3 focus-within:ring-indigo-400'>
          {/* <div className='hidden md:flex items-center gap-x-1 overflow-clip'>
            {uploadOptions.map((uploadOption) => (
              <Image
                key={uploadOption.id}
                height={19}
                width={19}
                src={uploadOption.logoUrl}
                alt={uploadOption.title}
              />
            ))}
          </div> */}
          <div className='md:inline-flex items-center gap-x-3 text-white font-semibold hidden  md:text-md'>
            <span>Import files</span>
            <ChevronDownIcon className='w-7 h-7  text-gray-100' />
          </div>
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
        <Menu.Items className='absolute left-0 z-10 -mt-1 w-48 origin-top divide-y  rounded-md bg-indigo-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          {uploadOptions.map((iupload) => (
            <div key={iupload.id} className='py-0.5 w-full'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => iupload.cb()}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center gap-x-3 px-4 py-1.5 text-sm w-full',
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
                  </button>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
