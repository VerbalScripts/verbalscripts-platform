'use client'

import AppHeader from '@/components/AppHeader';
import FileUploadOptions from '@/components/FileUploadOptions';
import Image from 'next/image';
import React from 'react'

export default function Page() {



    const supportedFormats = ['mp3', 'wav', 'wmv', 'mpeg', 'mp4', 'mp3', 'ogg', 'mkv']

  return (
    <div className="bg-white"
      
    >
      <AppHeader/>



      <div className='flex flex-col items-center justify-center h-screen'>
        <FileUploadOptions />
       <p className=' text-5xl text-gray-600 mb-12'>
            Upload File
        </p>

        <div className='mb-5'>
            <span className='text-gray-800 font-semibold'>
                Supported File Formats: 
            </span>
               {' '}
                { supportedFormats.map((fileFormat, index) => <span className='text-base text-gray-700' key={index}>{fileFormat}{', '}</span>)}
            
        </div>

     

        <div className='relative w-1/3 rounded-md ring-1 ring-inset ring-gray-300  h-2/3 bg-gray-200'>


        <div className='flex flex-col items-center'>
        <img src="drag-n-drop.svg" alt="" className='absolute top-6  w-24'  />

        <p className='text-base mt-24 font-semibold text-gray-600'>Drag and Drop files here.</p>

        </div>

        <div className='flex sm:flex-wrap gap-3'>
          <button>

          </button>
          <button>
            
            </button>
        </div>


           
        </div>

        <div className='my-10'>
        <span className='text-gray-800 font-semibold'>
                Tip: {' '}
            </span>
        <span className='text-base text-gray-700'>
                Hold the 'Shift' or 'Command' key in the file select dialog to upload multiple files.

              </span>
        </div>

    </div>

      </div>
  )
}
