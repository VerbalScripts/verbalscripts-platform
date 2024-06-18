/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {  useState } from 'react';
import Image from 'next/image';

interface FileUploadFromOtherOptionsProps {
  openDropBoxPicker: () => void;
  openOneDrivePicker: () => void;
  openGoogleDrivePicker: () => void;
  openYoutube: () => void;
  openDirectLink: () => void;
}
export default function DashboardUploadPreview({
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

  const [active, setActive] = useState(false);

  return (
    <div className='flex gap-x-5 gap-y-5 flex-wrap'>
      {uploadOptions.map((iupload) => (
        <button
          key={iupload.id}
          onClick={() => iupload.cb()}
          className='flex flex-col items-start bg-gray-100 dark:bg-zinc-700 text-gray-900 w-[10rem] px-4 py-3 border border-gray-300 dark:border-gray-500 transition-all hover:bg-zinc-600 rounded-2xl '
        >
          <Image
            src={iupload.logoUrl}
            height={28}
            width={28}
            alt={iupload.id}
            className='mb-3'
          />
          <div className='text-gray-600 dark:text-gray-100 font-semibold'>{iupload.title}</div>
        </button>
      ))}
    </div>
  );
}
