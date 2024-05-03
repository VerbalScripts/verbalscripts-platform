import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useRef } from 'react';

interface SearchBarProps {
  cb: (searchString: string) => Promise<void>;
  clearSearch: () => Promise<void>;
}
export default function SearchBar({ cb, clearSearch }: SearchBarProps) {
  const searchRef = useRef<HTMLInputElement>(null);
  const onInputChange = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //  @ts-ignore
    const text = event.target.value;
    if (text.length > 2) {
      await cb(text);
    }
  };

  const emptySearch = async () => {
    if (searchRef.current != null) {
      searchRef.current.value = '';
      await clearSearch();
    }
  };

  return (
    <div className='relative hidden md:block min-w-[20rem]'>
      <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
        <svg
          className='w-4 h-4 text-gray-500 dark:text-gray-400'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 20 20'
        >
          <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
          />
        </svg>
        <span className='sr-only'>Search icon</span>
      </div>
      <input
        type='text'
        id='search-navbar'
        ref={searchRef}
        onKeyUp={onInputChange}
        className=' block w-full p-2 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='Search Files'
      />

      <div className='absolute top-1 right-2'>
        <button
          onClick={emptySearch}
          className='z-8 cursor-pointer  h-8 w-8 rounded-full flex justify-center align inset-y-0 start-0  items-center'
        >
          <XMarkIcon className='text-gray-700 h-7 w-7 dark:text-white' />

          <span className='sr-only'>Clear Search</span>
        </button>
      </div>
    </div>
  );
}
