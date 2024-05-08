import { classNames } from '@/utils/classNames';
import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import Image from 'next/image';

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
        <Menu.Button className='flex items-start flex-col mb-5 gap-y-2 rounded-xl  bg-indigo-50 font-semibold px-4 py-2  focus-within:ring-3 focus-within:ring-indigo-400'>
          <div className='flex items-center gap-x-1'>
            {uploadOptions.map((uploadOption) => (
              <Image
                key={uploadOption.id}
                height={18}
                width={18}
                src={uploadOption.logoUrl}
                alt={uploadOption.title}
              />
            ))}
          </div>
          <span className='text-indigo-500'>Import file(s)</span>
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
