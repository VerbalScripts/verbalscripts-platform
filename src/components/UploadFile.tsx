'use client';

import React, { useState } from 'react';

import DropboxUpload from '@/components/uploadOptions/DropboxUpload';
import GoogleUpload from '@/components/uploadOptions/GoogleUpload';
import LinkUpload from '@/components/uploadOptions/LinkUpload';
import LocalFileUpload from '@/components/uploadOptions/LocalFileUpload';
import VimeoUpload from '@/components/uploadOptions/VimeoUpload';
import FileSelectionTab from '@/components/FileSelectionTab';

export default function UploadFile() {
  const [activeTab, setActiveTab] = useState<string>('local-file');

  return (
    <section className='min-h-screen'>
      <div className=' py-14 md:py-14 px-3 md:px-0'>
        <div className='mx-auto max-w-xl'>
          <p className='text-center text-2xl md:text-3xl font-bold  text-gray-900'>
            Upload your files to place a new order.
          </p>

          <div className='mt-10'>
            <div className='mt-10'>
              <FileSelectionTab callback={setActiveTab} />
            </div>
          </div>

          {/* tabs playground */}

          {
            <section className='min-h-96'>
              {activeTab == 'local-file' ? (
                <LocalFileUpload />
              ) : activeTab == 'google-drive' ? (
                <GoogleUpload />
              ) : activeTab == 'vimeo' ? (
                <VimeoUpload />
              ) : activeTab == 'dropbox' ? (
                <DropboxUpload />
              ) : activeTab == 'link' ? (
                <LinkUpload />
              ) : (
                <LinkUpload />
              )}
            </section>
          }

          <div className='flex flex-wrap items-center justify-between gap-y-5'>
            <p className='mt-2 text-2xl font-bold  text-gray-800'>
              Need help ?
            </p>
            <div className='flex items-center gap-x-3 '>
              <a
                href='/contact-us'
                className='rounded-full border ring-1 ring-indigo-500 text-indigo-500 font-semibold text-lg px-5 py-1.5 focus:ring-4 focus:ring-indigo-300'
              >
                Contact Us
              </a>

              <a
                href='#'
                className='rounded-full border px-5 ring-1 ring-indigo-500 text-indigo-500 font-semibold text-lg py-1.5 focus:ring-4 focus:ring-indigo-300'
              >
                Let{"'"}s chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
