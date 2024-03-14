'use client'

import React from 'react'

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
  LockClosedIcon,
  XMarkIcon,
  CalendarDaysIcon, HandRaisedIcon
} from '@heroicons/react/24/outline'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'



import ProductCard from '@/components/ProductCard'
import AppHeader from '@/components/AppHeader'
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AppFooter from '@/components/AppFooter';


export default function Home() {


   const services = [
  { name: 'Transcription', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Translation', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Machine Transcription', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'AI Datasets', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Data Annotation', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const solutions = [
  { name: 'Mediacal & Research', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'AI Machine Learning', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Education', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Consulting', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Market Research', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Technology', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Call Centers', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Enterprise', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const resources = [
  { name: 'FAQs', description: 'Frequently Asked Qustions', href: '/faqs', icon: ChartPieIcon },
  { name: 'Terms & Conditions', description: 'View terms and conditions', href: '/terms-and-conditions', icon: ChartPieIcon },
  { name: 'Policies', description: 'check valid policies', href: '/policies', icon: ChartPieIcon },
]


    const features = [


      {
        name: 'Confidential',
        description:
          'Information access is sctrictly on a need to know basis. Ours transcribers have signed NDA"s',
        icon: CloudArrowUpIcon,
      },
      {
        name: '95% + Accuracy',
        description:
          'Our transcription process is such that we achieve 95% accuracy ensuring reliable and concistency',
        icon: LockClosedIcon,
      },
      {
        name: 'Education',
        description:
          'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
      },
      {
        name: 'Advanced security',
        description:
          'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
      },
    ]
    
    return (
      <div className="bg-gray-900"
      
      >
        <AppHeader resources={resources} solutions={solutions} services={services}/>
        <LandingPage/>
  

        <div className="bg-white  py-32 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
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




      <div className="bg-white py-32 md:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">What we do</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We convert spoken audio or video to text
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>


    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            You did'nt Hear it from us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Trusted by over 4,000 clients worldwide
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>


        {/* validation section */}

        <div className="bg-gray-300">
          <div className='py-24 px-6 sm:py-32 lg:px-8'>
            <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            You did'nt Hear it from us
          </h2>
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
                    Our transcriptionists are able to pick up the slack where machine can't. The highly accurate, quality end result that a living
                    person can produce is simply unbeatable, and our curated network of experts is trained uniqely for each unique customer, no matter the scale - our workforce can 
                    support even the largest project.
                    </p>
        
          </div>
      
        </div>

            </div>
      </div>
    </div>


        



    <div className="bg-white overflow-hidden">
      <div className="mx-auto max-w-8xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate   px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0">
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
           
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let us help you Succeed with
             Transcription Service.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Click the order now button to get started today or request a quote if your project is complex.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Order Now
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-indigo-500 px-3.5 py-2.5 ring-2 ring-inset ring-indigo-500 rounded-md hover:shadow-xl">
                Get a Qoute
              </a>
            </div>
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
    </div>


  





        <AppFooter services={services} resources={resources} solutions={solutions} />

      </div>
    )
  }
  


  