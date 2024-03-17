import React from 'react';

export default function Projects() {
  return (
    <div className='sm:py-80 md:h-screen px-4 md:px-36 py-16' id='Projects'>
      <p className=' text-6xl text-gray-100 mb-8'>Projects</p>

      <div className='text-lg w-full  md:w-2/3'>
        Hello my name is Brian and I enjoy creating things that live on the
        internet. My interest in web development started back in college and
        since then i have been building one project at a time.
        <br></br>
        <br></br>
        Fast forward to to day and men i have had the previledge of woking at a{' '}
        <a
          className='text-indigo-600 hover:border-b-2  border-b-0'
          href='gameen.gg'
        >
          Gaming agency start-up
        </a>
        ,{' '}
        <a
          className='text-indigo-600 hover:border-b-2  border-b-0'
          href='dhahabuthemanini.org'
        >
          Social Building Association
        </a>
        . My focus focus is building accessible, beautifull digital experiences
        to solve various type of challenges that i come across.
      </div>
    </div>
  );
}
