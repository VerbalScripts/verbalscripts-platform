'use client';

import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import FileSelectionTab from '@/components/FileSelectionTab';
import FileUploadOptions from '@/components/FileUploadOptions';
import GetAQuoteModal from '@/components/GetAQuoteModal';
import React, { useRef, useState } from 'react';

export default function Page() {
  // const supportedFormats = [
  //   'mp3',
  //   'wav',
  //   'wmv',
  //   'mpeg',
  //   'mp4',
  //   'mp3',
  //   'ogg',
  //   'mkv',
  // ];

  const [heightOffset, setOffsetHeight] = useState(0);
  const [open, setOpen] = useState(false);

  const solutions = useRef<Array<NavLabel>>([]);

  const onBodyScroll = (event: React.UIEvent<HTMLElement>) => {
    setOffsetHeight((event.target as HTMLElement).scrollTop);
  };

  return (
    <div
      className='bg-zinc-800 max-h-screen overflow-y-scroll overflow-x-hidden relative'
      onScroll={onBodyScroll}
    >
      <AppHeader
        heightOffset={heightOffset}
        dataPush={solutions}
        showQuote={setOpen}
      />

      <GetAQuoteModal open={open} setOpen={setOpen} />

      <div className='bg-white py-24 md:py-24'>
        <div className='mx-auto max-w-2xl'>
          <p className='mt-2 text-3xl font-bold  text-gray-900'>
            Ready to try our service out. Go ahead and upload your file.
          </p>

          <div className='mt-10'>
            <div className='mt-10'>
           
             
              <FileSelectionTab />
            </div>
          </div>

          <div className='mt-10'>
            <div className='mt-10'>
              <div className='flex items-center gap-x-4 mb-5'>
                <div className='flex items-center justify-center bg-slate-800 px-5 text-gray-100 py-1.5 rounded-full font-semibold'>
                  Option 1
                </div>
                <div className='text-slate-800 font-bold text-xl'>
                  Choose a file from your cloud
                </div>
              </div>
              <p>
                {' '}
                If you have the file stored within you cloud storage provider,
                you can easily select it and we will take care of the rest.
              </p>
              <FileUploadOptions />
            </div>
          </div>

          <div>
            <div className='flex items-center gap-x-4'>
              <div className='flex items-center justify-center bg-slate-800 px-5 text-gray-100 py-1.5 rounded-full font-semibold'>
                Option 2
              </div>
              <div className='text-slate-800 font-bold text-xl'>
                Add a link to your file.
              </div>
            </div>

            <form action='#' method='POST' className=''>
              <div className='flex items-center'>
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-md my-2 leading-6 text-gray-700'
                  >
                    You can add a link to external video or audio file and make
                    sure the file is downloadable in your browser.
                  </label>
                  <div className='mt-2.5 flex gap-5'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='md:w-3/4 rounded-md border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />

                    <button className='bg-indigo-500 text-white text-xl font-semibold rounded-full py-1.5 px-4 '>
                      Upload Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className='mt-10'>
            <div className='flex items-center gap-x-4 mb-5'>
              <div className='flex items-center justify-center bg-slate-800 px-5 text-gray-100 py-1.5 rounded-full font-semibold'>
                Option 3
              </div>
              <div className='text-slate-800 font-bold text-xl'>
                Drap and Drop or Select File
              </div>
            </div>
          </div>

          <form className='relative w-full rounded-md border-2 border-dashed border-gray-300  h-[20rem]'>
            <div className='flex h-full  items-center justify-center'>
              <img
                src='drag-n-drop.svg'
                alt=''
                className='absolute top-6  w-36'
              />

              <label
                htmlFor='raw_file'
                className='mt-28 px-8 py-2.5 rounded-full bg-indigo-500 text-xl text-white font-semibold cursor-pointer'
              >
                <input
                  type='file'
                  id='raw_file'
                  name='raw_file'
                  className='hidden'
                ></input>
                Select File
              </label>

              <label
                htmlFor='raw_file'
                className='mt-28 px-8 py-2.5 rounded-full bg-indigo-500 text-xl text-white font-semibold cursor-pointer'
              >
                Select Folder
              </label>
            </div>

            <div className='flex sm:flex-wrap gap-3'>
              <button></button>
              <button></button>
            </div>
          </form>

          <div className='my-10 text-center'>
            <span className='text-gray-800 font-semibold'>Tip: </span>
            <span className='text-base text-gray-700'>
              Hold the {"'"}Shift{"'"} or {"'"}Command{"'"} key in the file
              select dialog to upload multiple files.
            </span>
          </div>

          <div className='flex items-center justify-between'>
            <p className='mt-2 text-2xl font-bold  text-gray-800'>
              Need help ?
            </p>
            <div className='flex items-center gap-x-3'>
              <a href='/contact-us' className='rounded-full border px-5 py-2.5'>
                Contact Us
              </a>

              <a href='#' className='rounded-full border px-5 py-2.5'>
                Let{"'"}s chat
              </a>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
