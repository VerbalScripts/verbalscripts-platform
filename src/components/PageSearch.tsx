/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import './search/index.css';
import algoliasearch from 'algoliasearch/lite';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Hit as AlgoliaHit } from 'instantsearch.js';

import {
  InstantSearch,
  Configure,
  Highlight,
  PoweredBy,
  Pagination,
  SearchBox,
  Hits,
  // @ts-ignore
} from 'react-instantsearch';
// import { XMarkIcon } from '@heroicons/react/24/outline';

const searchClient = algoliasearch(
  //   'ARKTPJ3X46',
  //   'f7c48eeaccad5b98fc876a1d0f3ea0f1',
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76',
);

// type HitProps = {
//   hit: AlgoliaHit<{
//     title: string;
//     id: string;
//     url: string;
//   }>;
//   send
// };

type HitProps = {
  hit: AlgoliaHit<{
    title: string;
    id: string;
    url: string;
  }>;
};

function Hit({ hit }: HitProps) {
  return (
    <a href={hit.url}>
      <Highlight hit={hit} attribute='name' className='Hit-label' />
      <span className='Hit-price'>${hit.title}</span>
    </a>
  );
}

export default function PageSearch() {
  // const searchRef = useRef<HTMLInputElement>(null);
  // const onInputChange = async (
  //   event: React.KeyboardEvent<HTMLInputElement>,
  // ) => {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   //  @ts-ignore
  //   const text = event.target.value;
  //   if (text.length > 2) {
  //     // await cb(text);
  //   }
  // };


  return (
    <InstantSearch
      searchClient={searchClient}
      indexName='instant_search'
      insights={true}
    >
      <Configure ruleContexts={[]} />
      {/* <div className='relative hidden md:block min-w-[20rem]'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <svg
            className='w-5 h-5 text-gray-500 dark:text-gray-400'
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
          autoFocus
          ref={searchRef}
          onKeyUp={onInputChange}
          className=' block w-full px-2 py-3 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Search Files'
        />

        <div className='absolute top-2.5 right-2'>
          <button
            onClick={emptySearch}
            className='z-8 cursor-pointer  h-8 w-8 rounded-full flex justify-center align inset-y-0 start-0  items-center'
          >
            <XMarkIcon className='text-gray-700 h-10 w-10 dark:text-white' />

            <span className='sr-only'>Clear Search</span>
          </button>
        </div>
      </div> */}

      <SearchBox />
      <PoweredBy />
      <div className='max-h-[30rem] overflow-y-scroll'>
        <Hits hitComponent={Hit} />
        <Pagination className='Pagination' />
      </div>
    </InstantSearch>
  );
}
