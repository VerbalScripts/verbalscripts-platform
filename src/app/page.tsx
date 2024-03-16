'use client'

import React, { useEffect } from 'react'

import Image from "next/image";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  NewspaperIcon,
  AcademicCapIcon,
  LockClosedIcon,
  XMarkIcon,
  CalendarDaysIcon, HandRaisedIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import AppHeader from '@/components/AppHeader'
import LandingPage from "@/components/LandingPage";
import AppFooter from '@/components/AppFooter';
import Testimonials from '@/components/Testimonials';
import GetAQuoteModal from '@/components/GetAQuoteModal';


export default function Home () {
  
  const [ heightOffset, setOffsetHeight ] = useState( 0 )
  // open slide over
  const [open, setOpen] = useState(false)

  useEffect( () => {
    window.addEventListener( 'scroll', ( event: any ) => {
      event.target.scrollingElement.scrollTop && setOffsetHeight( event.target.scrollingElement.scrollTop )
      
     
    } )

    const callToActionObserver = new IntersectionObserver(sections => {
      sections.forEach(section => {
        
        if (section.intersectionRatio > 0.2) {
          document.querySelector( '.call-to-action' )?.classList.add('animate-call')
        } else {
          // document.querySelector( '.call-to-action' )?.classList.remove('animate-call')
        }
  });
      }, { threshold: 0.2 } );
    
    const el = document.querySelector('.call-to-action')
    if (el) callToActionObserver.observe(el)

  } )

   const services = [
  { name: 'Transcription', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Translation', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Machine Transcription', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'AI Datasets', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Data Annotation', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const solutions = [
  { name: 'Medical & Research', description: 'We will accurately annotate the NLP data in order to give you the best training datasets for your AI & ML models', href: '#', icon: ChartPieIcon },
  { name: 'Legal', description: 'We provide formatted & proofed transcripts for any legal proceedings & e-discovery use case.', href: '#', icon: NewspaperIcon },
  { name: 'AI Machine Learning', description: 'We will accurately annotate the NLP data in order to give you the best training datasets for your AI and ML models', href: '#', icon: FingerPrintIcon },
  { name: 'Education', description: 'Perfect for Transcribing lectures, thesis interviews, reasearch, original notes and more.', href: '#', icon: AcademicCapIcon },
  { name: 'Market Research', description: 'Transcription that is perfect for all types of qualitative research needs, including focus groups, surveys and in-depth interviews', href: '#', icon: NewspaperIcon },
  { name: 'Enterprise', description: 'Need a vendor for transcription and other language services? We have the ability to scale and support your organization for all your volume needs', href: '#', icon: ArrowPathIcon },
  { name: 'Technology', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Consulting', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Call Centers', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const resources = [
  { name: 'FAQs', description: 'Frequently Asked Qustions', href: '/faqs', icon: ChartPieIcon },
  { name: 'Terms & Conditions', description: 'View terms and conditions', href: '/terms-and-conditions', icon: ChartPieIcon },
  { name: 'Policies', description: 'check valid policies', href: '/policies', icon: ChartPieIcon },
]
  
  const testimonials: Array<Testimony> = [
    {
    description: " VerbalScripts has done a terrific job in helping us meet a tight deadline for a demanding client. They helped us tailor the transcripts to our particular needs, and were always available, helpful and patient.”",
    name: "Limor Hochberg",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    occupation: "UL"
    },
      {
    description: " “We used VerbalScripts for transcripts and the quality has been great. Turnaround speed is fast and the process to upload files is very simple. Very responsive.”",
    name: "Bart Langton",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    occupation: "Ipsos"
    },
        {
    description: " “It's been a great experience working with VerbalScripts. Their transcription is the best quality for the cheapest price. They worked with us to create a business rate and the quality was great.”",
    name: "Angel Cruz",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    occupation: "Datu Research"
    },
  ]


    const features = [


      {
        name: 'Confidential',
        description:
          'Information access is sctrictly on a need to know basis. Ours transcribers have signed NDA"s',
        icon: LockClosedIcon,
      },
      {
        name: 'Compliant Workflow',
        description:
          'We Offer workflows compliant with HIPAA and GDPR protocols and all of our services can be customized; including geofencing the workforce to specific locations',
        icon: ArrowPathIcon,
      },
      {
        name: 'Affordable Solutions',
        description:
          'The quality and workflow we have built enable us to deliver the highest quality data consistently at low prices.',
        icon: CurrencyDollarIcon,
      }
    ]
    
    return (
      <div className="bg-zinc-800"
      
      >
        <AppHeader showQuote={setOpen} resources={resources} solutions={solutions} services={services} heightOffset={heightOffset } />
        <LandingPage/>
  
        <GetAQuoteModal open={open} setOpen={setOpen} />
        
        <div className="bg-white  py-32 md:py-24">
        <div className="mx-auto max-w-7xl xl:max-w-6xl px-6 lg:px-8 xl:px-22">

        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid  grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>

         
        </div>
      </div>




      <div className="bg-white py-32 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">What we do</h2> */}
          <p className="mt-2 text-3xl font-bold  text-gray-900 sm:text-4xl">
           Highly Accurate and Secure Transcription for Your Business
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative md:pl-16 ">
                <dt className="flex flex-col items-center text-base font-semibold leading-7 text-gray-900">
                  <div className="text-center  mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className='text-2xl'>
                    {feature.name}
                  </span>
                </dt>
                <dd className="text-lg text-center mt-2 text-md leading-6 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>


        {/* testimonials */}
        <div className="bg-indigo-900">

           <div className="mx-auto max-w-8xl ">
              <div className="relative isolate   px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 md:px-24 lg:flex lg:items-center lg:gap-x-20 lg:px-36 lg:pt-0">
                
                <div className="mx-auto  lg:max-w-xl  lg:mx-0 lg:flex-auto lg:py-32">
                
                  <h2 className="text-3xl font-bold  text-gray-100 sm:text-4xl">
                    Transcription Industry Solutions
                  </h2>
                  <p className="mt-6 text-lg  leading-7 text-gray-200">
                  The way we think about data is changing; and now more than ever industry leaders are counting on accurate, reliable transcription and data
                  annotation for their business.
                  <br />
                  <br />
                  By delivering the Gold standard for transcription, VerbalScripts is the best partner to meet your industry needs. Our services can be tailored
                  to meet unique formatting or project requirements you may need.
                        </p>
              
                </div>
                <div className="relative mt-16 h-80 lg:mt-8">
                  <img
                    className="absolute left-0 top-0 w-[20rem] md:w-[28rem] max-w-none rounded-m"
                    src="freelancer-work-from-home-image.webp"
                    alt="App screenshot"
                  />
                </div>
              </div>

          </div>
          

            <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="mx-auto grid max-w-none px-6 grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-7xl xl:max-w-7xl lg:grid-cols-3 lg:gap-y-16">
            {[...solutions.slice(0,6)].map((feature) => (
             <a href='#' key={feature.name} className="relative pl-16 transition  hover:bg-white/5 hover:-translate-y-5 hover:ring-1 hover:ring-white/10 rounded-lg p-4">
                <dt className="text-xl font-semibold leading-7 text-gray-200">
                   <div className="absolute left-2 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                     <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                   </div>
                   {feature.name}
                 </dt>
                <dd className="mt-1 text-lg leading-7 text-gray-300">{feature.description}</dd>
              </a>
            ))}
          </dl>
          </div>
          

          <div className='flex justify-center py-10'>
            <a href="/solutions"
            className="rounded-md  bg-orange-500 px-7 py-3 text-lg font-bold text-white shadow-sm transition hover:translate-x-1 hover:shadow-md hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View all industry solutions
            </a>
          </div>

          
          
          <Testimonials testimonials={testimonials} />

            

          </div>
        {/* validation section */}

        <div className="bg-white">
          <div className='py-24 px-6 sm:py-32 lg:px-8'>
            <div className="mx-auto max-w-2xl text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            You did{ "'"}nt Hear it from us
          </h2> */}
          <p className="mt-2 text-4xl font-bold leading-10 text-gray-900 sm:text-4xl">
          Shaping the Future of Human Powered Transcription
          </p>
         
        </div>
      <div className="mx-auto max-w-8xl ">
        <div className="relative isolate  pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0">
          
          <div className="mx-auto max-w-xl  lg:mx-0 lg:flex-auto lg:py-32">
           
            <h2 className="text-2xl font-bold  text-gray-800 sm:text-4xl">
              Combining Technology and Human Expertise
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
             We built our transcription process end end-to-end to take advantage of both worlds; a hybrid model that combines speech recognition technology and Human transcriptionist at outstanding quality and expertise
                    <br />
                    No matter what industry you are in, we accomodate
                  </p>
        
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[20rem] md:w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="freelancer-work-from-home-image.webp"
              alt="App screenshot"
            />
          </div>
        </div>

            </div>
            
        <div className="mx-auto max-w-8xl ">
          <div className="relative isolate  pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0">
          
                
                    <div className=" relative max-w-md mt-16 h-80 lg:mt-8">
                <img
                  className=" w-[20rem] md:w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src="freelancer-work-from-home-image.webp"
                  alt="App screenshot"
                />
                </div>
                
          <div className="lg:mx-0 lg:flex-auto lg:py-32 text-left">
            
            <h2 className="text-2xl mt-20 lg:mt-0 font-bold  text-gray-800 sm:text-4xl">
              Experts Transcription to Ensure Quality Service
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
                    Our transcriptionists are able to pick up the slack where machine can{ "'"}t. The highly accurate, quality end result that a living
                    person can produce is simply unbeatable, and our curated network of experts is trained uniqely for each unique customer, no matter the scale - our workforce can 
                    support even the largest project.
                    </p>
        
          </div>
      
        </div>

            </div>
      </div>
    </div>


        


<div className='bg-white'>
    <div className="bg-indigo-600 relative overflow-hidden transition transform-gpu">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
      <div className="mx-auto  py-16  sm:px-6 md:py-10 lg:px-8">
        <div className="relative isolate    px-6 pt-16   sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
           
            <h2 className="text-3xl  leading-10 md:text-4xl font-bold  text-white ">
             Ready to succeed with our Transcription Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Click the order now button to get started today or request a quote if your project is complex.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="#" className="text-lg font-semibold leading-6 text-white px-6 py-3.5 ring-2 ring-inset ring-white rounded-md transition hover:-translate-y-1 hover:shadow-2xl">
                Order Now
              </a>
              <button
                      onClick={() => setOpen(true)}
                className="rounded-md bg-orange-500 px-6 py-3.5 text-lg font-semibold text-white transition hover:-translate-y-1 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get a Qoute
              </button>
            </div>
          </div>
          <div className="hidden md:block relative mt-16 h-80 lg:mt-8 pr-10">
            <img
              className=" w-[28rem] max-w-none"
              src="freelancer-work-from-home-image.webp"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
        </div>
        </div>


  

  <div className="bg-white">
      <div className="mx-auto max-w-8xl py-32  sm:px-6 md:py-24 lg:px-8">
          <div className="relative isolate   px-6 sm:pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center justify-between lg:gap-x-20 lg:px-24 lg:pt-0">
          
                
              <div className="hidden md:block relative max-w-sm -mt-24 h-80 lg:mt-8">
                <img
                  className="w-[20rem] md:w-[26rem] max-w-none"
                  src="freelancer-work-from-home-image.webp"
                  alt="Become a Freelancer Image"
                />
                </div>
                
          <div className="lg:mx-0 max-w-xl lg:flex  flex-col  lg:py-32 text-left">
            
            <h2 className="text-3xl mt-0 md:mt-20 lg:mt-0 font-bold  text-gray-700 sm:text-4xl">
             Become a Freelancer Today
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
                    We have the industry’s best rates!
                </p>
                

                <div className='flex flex-col md:flex-row items-start gap-x-3 gap-y-5 md:gap-y-0 mt-5'>
                  <div className='flex md:block'>
                    <div className=' flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center'>
                      <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white'>
                        1
                      </span>
                      <span className='h-24 border-r-2 md:h-0 md:ml-2 md:w-32 md:border-b-2 border-gray-300'></span>
                    </div>
                    <br />
                    <div className='ml-5 leading-8 text-gray-600 font-semibold text-xl max-w-sm'>
                      Create an <br></br> Account
                    </div>
                    
                  </div>

                  <div className='flex md:block'>
                    <div className=' flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center'>
                      <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white'>
                        2
                      </span>
                      <span className='h-24 border-r-2 md:h-0 md:ml-2 md:w-32 md:border-b-2 border-gray-300'></span>
                    </div>
                    <br />
                    <div className='ml-5 leading-8 text-gray-600 font-semibold text-xl max-w-sm'>
                     Connect Your <br></br> Paypal
                    </div>
                    
                  </div>

                    <div className='flex md:block'>
                    <div className=' flex items-center'>
                      <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white'>
                        3
                      </span>
                    </div>
                    <br />
                    <div className='ml-5 leading-8 text-gray-600 font-semibold text-xl max-w-sm'>
                      Take the <br></br> Entrance Exam.
                    </div>
                    
                  </div>
                </div>
        
                

                <div className='block mt-10'>
                   <a href="#" className="my-2.5 inline-block rounded-md ring-1 ring-indigo-500 px-8 py-2.5 text-lg font-semibold text-indigo-500 transition shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Become a Freelancer
            </a>
            </div>
          </div>
      
        </div>

            </div>
    </div>



        <AppFooter services={services} resources={resources}  solutions={solutions} />

      </div>
    )
  }
  


  