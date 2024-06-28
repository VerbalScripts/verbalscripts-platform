import React from 'react';

export default function Page() {
  const faqs = [
    {
      title: 'Transcription Process',
      content: [
        {
          title: 'Can you transcribe only certain sections of a recording?',
          content:
            'Yes, if you let us know in your order details. When you upload your file, leave us a message with any instructions you think are necessary. We will make sure we understand your instructions. We will contact you if we have any questions. ',
        },
        {
          title: 'Do you place timestamps in the text?',
          content:
            'We offer 2 types of timestamp placement. You can choose between having timestamps every 2 minutes or when the speaker changes in the audio file. Timestamping service can be requested during the upload process.  ',
        },
        {
          title: 'Do you provide verbatim or edited texts?',
          content:
            'All of our texts are Clean Verbatim by default. If you require a Full Verbatim text, you can request it during the upload process. ',
        },
      ],
    },
    {
      title: 'Finances and Payment',
      content: [
        {
          title: 'Can the money deposited in the balance be refunded?',
          content:
            'NOTE: Once funds have been deposited, they can"t be refunded. You can use your balance only for your orders. ',
        },
        {
          title: 'How do I pay for my transcriptions or translations?',
          content:
            'We accept payments by all major credit and debit cards and PayPal. We also invoice. Contact our Customer Support for details on billing arrangements. Our Email is info@gotranscript.com ',
        },
        {
          title: 'What is your refund policy?',
          content:
            'All of our texts are Clean Verbatim by default. If you require a Full Verbatim text, you can request it during the upload process. ',
        },
      ],
    },
    {
      title: 'Pricing and Services',
      content: [
        {
          title: ' What is included in your price calculator estimate?',
          content:
            'You give us the length of the recording, your estimate of the category it falls into (see the descriptions summarized on the calculator) and the turnaround time you need. If your entries are accurate, our estimate is correct. Note: Quality of the sound on the recording is critical to the time is takes to complete the work (and the cost to you!). We appreciate realistic estimates. ',
        },
        {
          title: 'How much do you charge?',
          content:
            'For our loyal customers, the price per audio minute can be as low as $0.5.',
        },
      ],
    },
    {
      title: 'General',
      content: [
        {
          title: ' Where are your transcriptionists located?',
          content:
            'The majority of our transcriptionists are based in the United Kingdom or United States and are native English speakers. ',
        },
        {
          title: 'Can GoTranscript sign a non-disclosure agreement?',
          content:
            'We keep all client information confidential. We are happy to sign your NDA (Non-Disclosure Agreement), or we can supply one for you. ',
        },
        {
          title: 'Do you offer a discount for high volume?',
          content:
            'Yes. We love our customers! To show our appreciation for your patronage, we offer a Customer Loyalty Program. It"s our way of thanking you. You can get the lowest prices around and enjoy special discounts just by continuing to use our services.',
        },
      ],
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

          <svg width='200' height='200' xmlns='http://www.w3.org/2000/svg'>
            {/* <!-- Original Logo --> */}
            <g transform='translate(30, 30)'>
              <rect x='0' y='0' width='140' height='140' fill='black' />
              <path d='M20,120 L60,20 L80,20 L40,120 Z' fill='#FF5722' />
              <circle cx='100' cy='30' r='20' fill='#FF5722' />
              <rect x='80' y='50' width='40' height='10' fill='#FF5722' />
              <rect x='80' y='70' width='40' height='10' fill='#FF5722' />
              <rect x='80' y='90' width='40' height='10' fill='#FF5722' />
            </g>

            {/* <!-- Globe illusion --> */}
            <g transform='translate(100, 100)'>
              <circle
                cx='0'
                cy='0'
                r='80'
                stroke='#3b5998'
                stroke-width='5'
                fill='none'
              />
              <circle
                cx='0'
                cy='0'
                r='70'
                stroke='#3b5998'
                stroke-width='1'
                fill='none'
              />
              <circle
                cx='0'
                cy='0'
                r='60'
                stroke='#3b5998'
                stroke-width='1'
                fill='none'
              />
              <circle
                cx='0'
                cy='0'
                r='50'
                stroke='#3b5998'
                stroke-width='1'
                fill='none'
              />
              <circle
                cx='0'
                cy='0'
                r='40'
                stroke='#3b5998'
                stroke-width='1'
                fill='none'
              />
              <line
                x1='-80'
                y1='0'
                x2='80'
                y2='0'
                stroke='#3b5998'
                stroke-width='1'
              />
              <line
                x1='0'
                y1='-80'
                x2='0'
                y2='80'
                stroke='#3b5998'
                stroke-width='1'
              />
              <line
                x1='-56'
                y1='-56'
                x2='56'
                y2='56'
                stroke='#3b5998'
                stroke-width='1'
              />
              <line
                x1='-56'
                y1='56'
                x2='56'
                y2='-56'
                stroke='#3b5998'
                stroke-width='1'
              />
            </g>

            {/* <!-- Belt with icons --> */}
            <g transform='translate(100, 100)'>
              <circle
                cx='0'
                cy='0'
                r='90'
                stroke='#FF5722'
                stroke-width='10'
                fill='none'
              />
              {/* <!-- Video icon --> */}
              <rect x='-50' y='-10' width='20' height='20' fill='#FFFFFF' />
              <polygon points='-40,-10 -30,0 -40,10' fill='#FF5722' />
              {/* <!-- Audio icon --> */}
              <rect x='30' y='-10' width='20' height='20' fill='#FFFFFF' />
              <path d='M40,-5 L40,5 L45,10 L45,-10 Z' fill='#FF5722' />
              {/* <!-- File upload icon --> */}
              <rect x='-10' y='30' width='20' height='20' fill='#FFFFFF' />
              <path
                d='M0,35 L0,50 M-5,45 L0,40 L5,45'
                stroke='#FF5722'
                stroke-width='2'
              />
            </g>
          </svg>
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
          <dl className='grid  grid-cols-1 md:grid-cols-2   gap-5  pb-12'>
            {faqs.map((faq, index) => (
              <dd
                key={index}
                className='bg-amber-500/10 p-5 border border-gray-300 rounded-2xl'
              >
                <div className='text-gray-800 font-semibold text-xl mb-3'>
                  {faq.title}
                </div>
                {faq.content.map((item, index) => (
                  <a key={index} href='#' className='text-gray-600 block'>
                    {item.title}
                  </a>
                ))}
              </dd>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
