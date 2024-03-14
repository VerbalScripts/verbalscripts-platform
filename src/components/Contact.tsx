import React from 'react'
import { EnvelopeIcon  } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className='sm:py-72 md:h-screen px-4 md:px-36 py-16 flex flex-col items-center' id="Contact">
       <p className=' text-6xl text-gray-100 mb-8'>
            Get In Touch
        </p>

        <div className='sm:text-left text-center text-lg w-full md:w-2/3'>
            I am always eager to sought out a new challenge, if you have a challenge you want me to solve or just want to say hi, My Inbox is always open.
        </div>

        <div className='mt-8 '>
          <a className='flex items-center bg-indigo-700 px-16 md:px-32 py-4 rounded-md' href="mailto:briankiplangat71@gmail.com">
            <span className='sr-only'>Email Contact</span>
            <EnvelopeIcon className="h-6 w-6 mr-6" aria-hidden="true" />


              <span className='text-lg'>Mail Me</span>
          </a>
        </div>


        <div className='text-center text-lg w-2/3 mt-36'>
           Designed and Built by <i>brian kiplangat.</i>
        </div>

    </div>
  )
}
