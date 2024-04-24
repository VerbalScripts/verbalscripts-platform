/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';import Script from 'next/script'

export default function DropboxUpload () {
   const [loading, setLoading] = useState(true)

  const API_KEY = '8uva3lg9uiheidq';
  
  
  const options = {
    // Required. Called when a user selects an item in the Chooser.
    success: function (files) {
      alert("Here's the file link: " + files[0].link);
    },

    // Optional. Called when the user closes the dialog without selecting a file
    // and does not include any parameters.
    cancel: function () {
      console.log('user closed')
    },

    // Optional. "preview" (default) is a preview link to the document for sharing,
    // "direct" is an expiring link to download the contents of the file. For more
    // information about link types, see Link types below.
    linkType: 'preview', // or "direct"

    // Optional. A value of false (default) limits selection to a single file, while
    // true enables multiple file selection.
    multiselect: true, // or true

    // Optional. This is a list of file extensions. If specified, the user will
    // only be able to select files with these extensions. You may also specify
    // file types, such as "video" or "images" in the list. For more information,
    // see File types below. By default, all extensions are allowed.
    extensions: ['video', 'images', 'documents'],

    // Optional. A value of false (default) limits selection to files,
    // while true allows the user to select both folders and files.
    // You cannot specify `linkType: "direct"` when using `folderselect: true`.
    folderselect: true, // or true

    // Optional. A limit on the size of each file that may be selected, in bytes.
    // If specified, the user will only be able to select files with size
    // less than or equal to this limit.
    // For the purposes of this option, folders have size zero.
    sizeLimit: 1024, // or any positive number
  };
  
  const dropboxLoaded = () => {
    setLoading(false)
    console.log( 'loaded script' )
  }

  const initFilePicker = () => {
    if ( typeof window.Dropbox != 'undefined' ) {
      // @ts-ignore
       window.Dropbox.choose(options);
    }
  }
  
  return (
    <div>
      <Script
        id='dropboxjs'
        src='https://www.dropbox.com/static/api/2/dropins.js'
        strategy='lazyOnload'
        data-app-key={API_KEY}
        onLoad={() => dropboxLoaded()}
      />

      <div className='px-6 py-10 lg:py-12'>
        <p className='text-gray-600'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          laudantium consequatur magni est similique praesentium accusantium
          culpa molestiae enim iure.
        </p>

        <div className='mt-5'>
          <button
            disabled={loading}
            onClick={() => initFilePicker()}
            className='px-7 py-3 font-semibold bg-indigo-500 rounded-xl text-white'
          >
            {loading ? 'File picker loading ... ' : 'Choose File '}
          </button>
        </div>
      </div>
    </div>
  );
}
