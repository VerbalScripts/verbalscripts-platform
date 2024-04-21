import React from 'react';

export default function Page() {
  const getting_started = [
    {
      title: 'How can i create an account?',
      content:
        "It's very simple! Just visit: <a href='https://verbalscripts.com/auth/register'>'https://verbalscripts.com/auth/register<a/>",
    },
    {
      title: 'How can i restet my account if i have forgotten it?',
      content:
        "Go to our Sign in page: <a href='https://verbalscripts.com/auth/login'>'https://verbalscripts.com/auth/login<a/> and click \"Forgot your password?\" ",
    },
    {
      title: 'How can i upload files for transcription?',
      content:
        "We offer a simple, secure and fast, simple and convenient  upload system, visit  <a href='https://verbalscripts.com/upload-files'>'https://verbalscripts.com/upload-files<a/> for files up to 4GB in size. We can also work with links to external services like Dropbox or YouTube and many others.  ",
    },
  ];

  const Legal = [
    {
      title: 'How can i create an account?',
      content:
        "It's very simple! Just visit: <a href='https://verbalscripts.com/auth/register'>'https://verbalscripts.com/auth/register<a/>",
    },
    {
      title: 'How can i restet my account if i have forgotten it?',
      content:
        "Go to our Sign in page: <a href='https://verbalscripts.com/auth/login'>'https://verbalscripts.com/auth/login<a/> and click \"Forgot your password?\" ",
    },
    {
      title: 'How can i upload files for transcription?',
      content:
        "We offer a simple, secure and fast, simple and convenient  upload system, visit  <a href='https://verbalscripts.com/upload-files'>'https://verbalscripts.com/upload-files<a/> for files up to 4GB in size. We can also work with links to external services like Dropbox or YouTube and many others.  ",
    },
  ];

  const general = [
    {
      title: 'How can i create an account?',
      content:
        "It's very simple! Just visit: <a href='https://verbalscripts.com/auth/register'>'https://verbalscripts.com/auth/register<a/>",
    },
    {
      title: 'How can i restet my account if i have forgotten it?',
      content:
        "Go to our Sign in page: <a href='https://verbalscripts.com/auth/login'>'https://verbalscripts.com/auth/login<a/> and click \"Forgot your password?\" ",
    },
    {
      title: 'How can i upload files for transcription?',
      content:
        "We offer a simple, secure and fast, simple and convenient  upload system, visit  <a href='https://verbalscripts.com/upload-files'>'https://verbalscripts.com/upload-files<a/> for files up to 4GB in size. We can also work with links to external services like Dropbox or YouTube and many others.  ",
    },
  ];

  const pol_flicker = [
    {
      title: 'How can i create an account?',
      content:
        "It's very simple! Just visit: <a href='https://verbalscripts.com/auth/register'>'https://verbalscripts.com/auth/register<a/>",
    },
    {
      title: 'How can i restet my account if i have forgotten it?',
      content:
        "Go to our Sign in page: <a href='https://verbalscripts.com/auth/login'>'https://verbalscripts.com/auth/login<a/> and click \"Forgot your password?\" ",
    },
    {
      title: 'How can i upload files for transcription?',
      content:
        "We offer a simple, secure and fast, simple and convenient  upload system, visit  <a href='https://verbalscripts.com/upload-files'>'https://verbalscripts.com/upload-files<a/> for files up to 4GB in size. We can also work with links to external services like Dropbox or YouTube and many others.  ",
    },
  ];

  return (
    <div>
      <title>Dashboard | Support</title>
      <section
        className='relative px-6 sm:py-20 lg:px-8 bg-indigo-200'
        style={{ backgroundColor: '#f9f8f2' }}
      >
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
        <div className='absolute  right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />

        <div className='mx-auto max-w-2xl text-left lg:text-center'>
          <p className='mt-2 text-4xl font-bold   text-gray-900 sm:text-5xl'>
            Need Help ?
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          </p>
        </div>
        <div className='mx-auto max-w-2xl text-left lg:text-center'>
          <div className='mt-6 flex flex-col md:flex-row  gap-5 '>
            <input
              id='search-box'
              name='search'
              type='email'
              autoComplete='email'
              required
              className='w-full min-w-80 lg:min-w-2xl  flex-auto rounded-md border-0 bg-white px-3.5 py-3.5 text-gray-600 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-3 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
              placeholder='Search for topic ?'
            />
          </div>
        </div>
      </section>
      {/* faqs body */}
      <section>
        <div className='mx-auto max-w-4xl lg:max-w-5xl border-b border-gray-300/10 px-6 py-24'>
          <dl className='grid  grid-cols-1 md:grid-cols-2   lg:gap-x-8 gap-y-10  lg:grid-cols-3 lg:gap-y-16  pb-12'>
            <dd className='bg-amber-500/10 p-5 border border-gray-300 rounded-2xl'>
              <div className='text-gray-800 font-semibold text-xl mb-3'>
                Account
              </div>
              {getting_started.map((item, index) => (
                <a key={index} href='#' className='text-gray-600 block'>
                  {item.title}
                </a>
              ))}
            </dd>
            <dd>
              <div className='text-gray-800 font-semibold text-xl mb-3'>
                Account
              </div>
              {Legal.map((item, index) => (
                <a key={index} href='#' className='text-gray-600 block'>
                  {item.title}
                </a>
              ))}
            </dd>

            <dd>
              <div className='text-gray-800 font-semibold text-xl mb-3'>
                Account
              </div>
              {general.map((item, index) => (
                <a key={index} href='#' className='text-gray-600 block'>
                  {item.title}
                </a>
              ))}
            </dd>

            <dd>
              <div className='text-gray-800 font-semibold text-xl mb-3'>
                Account
              </div>
              {pol_flicker.map((item, index) => (
                <a key={index} href='#' className='text-gray-600 block'>
                  {item.title}
                </a>
              ))}
            </dd>

            <dd>
              <div className='text-gray-800 font-semibold text-xl mb-3'>
                Account
              </div>
              {getting_started.map((item, index) => (
                <a key={index} href='#' className='text-gray-600 block'>
                  {item.title}
                </a>
              ))}
            </dd>
          </dl>
        </div>
      </section>
    </div>
  );
}
