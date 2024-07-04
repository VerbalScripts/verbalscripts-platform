'use client';
import React, { useState } from 'react';
import TalkToUs from './modal/TalkToUs';

export default function ContactSection() {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <TalkToUs open={open} setOpen={setOpen} />
      <div
        className='mx-auto max-w-4xl rounded-2xl lg:max-w-5xl  flex flex-wrap items-center gap-x-10 py-10 md:py-20 px-6 md:px-16 lg:px-24'
        style={{ background: '#EFEDE0' }}
      >
        <div>
          <h3 className='mb-2 text-gray-700  text-2xl'>Need More Help ?</h3>
          <p className='text-md lg:text-xl text-gray-600 '>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>

        <button
          className='btn-vlg px-6 py-2.5 rounded-xl font-semibold'
          onClick={() => setOpen(!open)}
        >
          Talk To Us
        </button>
      </div>
    </section>
  );
}
