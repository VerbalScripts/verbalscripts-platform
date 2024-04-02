import React, { useState } from 'react';

import DropboxUpload from '@/components/uploadOptions/DropboxUpload';
import GoogleUpload from '@/components/uploadOptions/GoogleUpload';
import LinkUpload from '@/components/uploadOptions/LinkUpload';
import LocalFileUpload from '@/components/uploadOptions/LocalFileUpload';
import VimeoUpload from '@/components/uploadOptions/VimeoUpload';
import FileSelectionTab from '@/components/FileSelectionTab';

export default function UploadFile() {
  const [activeTab, setActiveTab] = useState<string>();

  return (
    <section className='bg-white'>
      <div className=' py-14 md:py-14'>
        <div className='mx-auto max-w-xl'>
          <p className='text-center text-3xl font-bold  text-gray-900'>
            Upload your files to place an new order.
          </p>

          <div className='mt-10'>
            <div className='mt-10'>
              <FileSelectionTab callback={setActiveTab} />
            </div>
          </div>

          {/* tabs playground */}

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
              <LocalFileUpload />
            )}
          </section>

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
    </section>
  );
}
