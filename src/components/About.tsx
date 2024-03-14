import React from 'react'

export default function About() {
  return (
    <div className='sm:py-72 md:h-screen px-4 md:px-36 py-16' id="About">
       <p className=' text-6xl text-gray-100 mb-8'>
            About Me
        </p>

        <div className='group relative transition-all text-lg w-2/3 hover:text-teal-300 focus-visible:text-teal-300'>
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            Hello my name is Brian and I enjoy creating things that live on the internet. My interest in web development started back in college and since then i have been building one project at a time.
            <br></br>
            <br></br>
            
            Fast forward to to day and men i have had the previledge of woking at a <a className='text-indigo-600 hover:border-b-2  border-b-0' href='gameen.gg'>Gaming agency start-up</a>, <a className='text-indigo-600 hover:border-b-2  border-b-0' href="dhahabuthemanini.org">Social Building Association</a>. My focus focus is building accessible, beautifull digital experiences to solve various type of challenges that i come across.
        </div>

    </div>
  )
}
