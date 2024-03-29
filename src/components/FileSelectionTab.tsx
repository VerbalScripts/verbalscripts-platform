import { classNames } from '@/utils/classNames';
import Image from 'next/image';
import React, { useState } from 'react';


interface FileSelectionTabProps {
  callback: (arg0: string) => void;
}

export default function FileSelectionTab({ callback }: FileSelectionTabProps) {
  const [ activeTab, setActiveTab ] = useState<string>( 'local-file' );
  
 const switchTab = ( id: string ) => {
      setActiveTab(id)
      callback(id);
  }

  const options = [
    {
      title: 'Local  Upload',
      logoUrl: '/icons/upload.png',
      id: 'local-file',
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
      title: 'Vimeo',
      logoUrl: '/icons/vimeo.png',
      id: 'vimeo',
    },
  ];

  return (
    <div className=''>
      <ul className='flex items-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
        {options.map((option) => (
          <li
            key={option.title}
            className='me-2'
            onClick={() => switchTab(option.id)}
          >
            <a
              href={'#' + option.id}
              className={classNames(
                'h-20  flex justify-center   transition-all duration-300 ease-out items-center ring-1 ring-inset ring-transparent   text-lg text-gray-900 rounded-full  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group',
                activeTab == option.id ? 'bg-gray-300 px-3' : 'w-20',
              )}
            >
              <Image
                height={30}
                width={30}
                src={option.logoUrl}
                alt={option.title}
              />
              <span
                className={classNames(
                  'font-semibold opacity-0',
                  activeTab == option.id
                    ? 'w-auto ml-3 opacity-100'
                    : 'opacity-0 w-0',
                )}
              >
                {option.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
