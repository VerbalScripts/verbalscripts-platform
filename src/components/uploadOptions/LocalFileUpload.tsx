import React from 'react';

export default function LocalFileUpload() {
  return (
    <div className='my-10'>
      <form className='relative w-full rounded-md border-2 border-dashed border-gray-300  h-[18rem]'>
        <div className='flex h-full  items-center justify-center'>
          <img src='drag-n-drop.svg' alt='' className='absolute top-6  w-36' />

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
            <input
              type='file'
              multiple
              name='folder_files'
              className='hidden'
              {...{ webkitdirectory: '', mozdirectory: '', directory: '' }}
            ></input>
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
          Hold the {"'"}Shift{"'"} or {"'"}Command{"'"} key in the file select
          dialog to upload multiple files.
        </span>
      </div>
    </div>
  );
}
