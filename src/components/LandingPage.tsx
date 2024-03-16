import React from 'react'

export default function LandingPage() {
  return (
    <div className="relative bg--600 h-auto isolate px-6 pt-14 lg:px-8 landing-page">
    
      {/* <video className='absolute top-0 right-0 left-0 w-full -z-20 h-full object-cover'  loop autoPlay>
        <source src="landing_prodution.mp4" type='video/mp4' />
      </video> */}
      <div className="landing-page-video-wrapper"></div>
    <div
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    <div className="max-w-3xl pb-48 pt-0 md:py-32 lg:py-32 md:mx-20 lg:mx-40">
      
      <div className="text-left">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          The Gold Standard in Audio & Video Transcription
        </h1>
        <p className="mt-6 text-2xl leading-8 text-gray-100">
         We deliver the most accurate transcriptions at competitive rates due to a combination of the latest in AI, paired with our trained & experienced transcriber network.
        </p>
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-start gap-6">
          <a
            href="/services"
            className="rounded-md bg-indigo-600 px-7 py-3 text-lg font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Our Transcription Services
          </a>
          <a href="/solutions" className="text-lg underline underline-offset-8 font-bold leading-6 text-white">
           Our Industry Solutions
          </a>
        </div>
      </div>
    </div>
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  </div>
  )
}
