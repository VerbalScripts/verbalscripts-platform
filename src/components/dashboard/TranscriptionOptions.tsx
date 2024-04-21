import React, { useEffect, useState } from 'react';
import SettingsTab from './Tabs/SettingsTab';
import InstructionsTab from './Tabs/InstructionsTab';
import { classNames } from '@/utils/classNames';

type tabValues = 'settings' | 'instructions';

export default function TranscriptionOptions() {
  const [activeTab, setActiveTab] = useState<tabValues>('settings');
  const [position, setPosition] = useState<number>(0);
  const sectionArray: tabValues[] = ['settings', 'instructions'];

  useEffect(() => {
    if (position < sectionArray.length) {
      setActiveTab(sectionArray[position]);
    }
    console.log(activeTab);
  }, [position]);
  return (
    <div>
      <ol className='lg:flex justify-center items-center w-full md:py-6 lg:py-10 space-y-4 lg:space-y-0 lg:space-x-4'>
        <li className='relative '>
          <a
            href='https://verbalscripts.com/'
            className='flex items-center font-medium w-full  '
          >
            <span
              className={classNames(
                'w-6 h-6   border border-transparent rounded-full flex justify-center items-center mr-3 text-md lg:w-8 lg:h-8',
                activeTab == 'settings'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-50 text-gray-500 border  border-gray-200',
              )}
            >
              {' '}
              1{' '}
            </span>
            <div className='block'>
              <h4
                className={classNames(
                  'text-md',
                  activeTab == 'settings' ? 'text-indigo-500' : 'text-gray-600',
                )}
              >
                General Settings
              </h4>
            </div>
            <svg
              className='w-5 h-5 ml-2 stroke-indigo-600 sm:ml-4'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6'
                stroke='stroke-current'
                stroke-width='1.6'
                stroke-linecap='round'
              />
            </svg>
          </a>
        </li>
        <li className='relative  '>
          <a className='flex items-center font-medium w-full  '>
            <span
              className={classNames(
                'w-6 h-6   border border-transparent rounded-full flex justify-center items-center mr-3 text-md lg:w-8 lg:h-8',
                activeTab == 'instructions'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-50 text-gray-500 border  border-gray-300',
              )}
            >
              {' '}
              2{' '}
            </span>
            <div className='block'>
              <h4
                className={classNames(
                  'text-md',
                  activeTab == 'instructions'
                    ? 'text-indigo-500'
                    : 'text-gray-600',
                )}
              >
                Instructions
              </h4>
            </div>
          </a>
        </li>
      </ol>

      {/* tab content */}
      <div className='mx-auto max-w-4xl border border-gray-300 rounded-xl py-7 px-10'>
        {activeTab == 'settings' ? <SettingsTab /> : <InstructionsTab />}

        <div className='mt-8 md:mt-16 flex justify-end gap-x-4'>
          {position > 0 ? (
            <button
              onClick={() => setPosition(position - 1)}
              className='rounded-full ring-1 ring-inset ring-gray-400 py-2.5 px-7 text-gray-600'
            >
              Prev
            </button>
          ) : null}
          {position < sectionArray.length ? (
            <button
              onClick={() => setPosition(position + 1)}
              className='rounded-full bg-indigo-500 py-2.5 px-7 text-white'
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
