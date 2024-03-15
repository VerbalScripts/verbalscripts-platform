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


export default function Home () {
  
  const [ offsetHeight, setOffsetHeight ] = useState( 0 )
  const [showHeader, setShowHeader] = useState(false)


  useEffect( () => {
    window.addEventListener( 'scroll', ( event: Event ) => {
      if ( event.target?.scrollingElement?.scrollTop > 150 ) {
        // show header & scroll top
        setShowHeader(true)
      }

     event.target.scrollingElement.scrollTop && setOffsetHeight(event.target.scrollingElement.scrollTop)
   
    } )
  })
  

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
  { name: 'AI Machine Learning', description: 'Speak directly to your customers', href: '#', icon: FingerPrintIcon },
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
    description: " “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    name: "Judith Black",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    occupation: "CEO of Workcation"
    },
      {
    description: " “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    name: "Judith Black",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    occupation: "CEO of Workcation"
    },
        {
    description: " “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    name: "Judith Black",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    occupation: "CEO of Workcation"
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
      <div className="bg-gray-600"
      
      >
        <AppHeader resources={resources} solutions={solutions} services={services} showHeader={showHeader } />
        <LandingPage/>
  

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
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
              <div key={feature.name} className="relative pl-16 ">
                <dt className="flex flex-col items-center text-base font-semibold leading-7 text-gray-900">
                  <div className="text-center mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span>
                    {feature.name}
                  </span>
                </dt>
                <dd className="text-center mt-2 text-base leading-6 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>


        {/* testimonials */}
        <div className="bg-indigo-900">

           <div className="mx-auto max-w-8xl ">
              <div className="relative isolate   px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0">
                
                <div className="mx-auto max-w-xl  lg:mx-0 lg:flex-auto lg:py-32">
                
                  <h2 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-4xl">
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
                    className="absolute left-0 top-0 w-[28rem] max-w-none rounded-m"
                    src="freelancer-work-from-home-image.webp"
                    alt="App screenshot"
                  />
                </div>
              </div>

          </div>
          

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {[...solutions.slice(0,6)].map((feature) => (
             <a href='#' key={feature.name} className="relative pl-16 transition  hover:bg-white/5 hover:-translate-y-5 hover:ring-1 hover:ring-white/10 rounded-lg p-4">
                <dt className="text-base font-semibold leading-7 text-gray-200">
                   <div className="absolute left-2 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                     <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                   </div>
                   {feature.name}
                 </dt>
                <dd className="mt-1 text-base leading-7 text-gray-300">{feature.description}</dd>
              </a>
            ))}
          </dl>
          </div>
          

          <div className='flex justify-center py-10'>
            <a href=""
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
            <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            You did{ "'"}nt Hear it from us
          </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shaping the Future of Human Powered Transcription
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
      <div className="mx-auto max-w-8xl ">
        <div className="relative isolate   px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0">
          
          <div className="mx-auto max-w-xl  lg:mx-0 lg:flex-auto lg:py-32">
           
            <h2 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-4xl">
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
              className="absolute left-0 top-0 w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="freelancer-work-from-home-image.webp"
              alt="App screenshot"
            />
          </div>
        </div>

            </div>
            
        <div className="mx-auto max-w-8xl ">
          <div className="relative isolate   px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0">
          
                
                    <div className="relative max-w-sm mt-16 h-80 lg:mt-8">
                <img
                  className=" w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src="freelancer-work-from-home-image.webp"
                  alt="App screenshot"
                />
                </div>
                
          <div className="lg:mx-0 lg:flex-auto lg:py-32 text-left">
            
            <h2 className="text-2xl mt-20 lg:mt-0 font-bold tracking-tight text-gray-700 sm:text-4xl">
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


        



    <div className="bg-white ">
      <div className="mx-auto max-w-8xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden   px-6 pt-16 bg-indigo-600 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0">
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
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
           
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
             Ready to succeed with our Transcription Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Click the order now button to get started today or request a quote if your project is complex.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Order Now
              </a>
              <a href="#" className="text-lg font-semibold leading-6 text-indigo-500 px-3.5 py-2.5 ring-2 ring-inset ring-indigo-500 rounded-md hover:shadow-xl">
                Get a Qoute
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 pr-10">
            <img
              className=" w-[28rem] max-w-none"
              src="freelancer-work-from-home-image.webp"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>


  





        <AppFooter services={services} resources={resources} solutions={solutions} />

      </div>
    )
  }
  


  