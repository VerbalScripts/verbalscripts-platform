import React, { FormEvent } from 'react'
import Link from 'next/link'


export default function SIgnInForm() {

 const validation = {}

 const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
 
  const formData = new FormData(event.currentTarget)

  console.log('submitting ...')

 }


  return (
    <form className="space-y-6" onSubmit={handleSubmit} action="#" method="POST">
        <div className='my-4'>
      <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-600">
        Email address
      </label>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="block w-full rounded-md border-3 py-4 px-2 text-gray-600 shadow-sm ring-2 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    <div className='my-4'>
      <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-600">
        Password
      </label>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="block w-full rounded-md border-3 py-4 px-2 text-gray-600 shadow-sm ring-2 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6"
        />
      </div>
    </div>



    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        SIGN IN
      </button>
    </div>
  </form>
  )
}
