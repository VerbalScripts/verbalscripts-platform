import React from 'react';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { Metadata } from 'next';
import moment from 'moment';

export const metadata: Metadata = {
  title: 'Verbalscripts - Terms of Service',

  keywords: [
    'transcription',
    'audio transcription',
    'video transcription',
    'speech to text',
    'academic transcription',
    'proofreading',
  ],
  description:
    'We provide fast and affordable client-ready transcription services tailored to your needs through transcription, reviewing and proofreading.',

  openGraph: {
    type: 'website',
    url: 'https://verbalscripts.com',
    title: 'Verbalscripts - Frequently asked Questions',
    description:
      'We provide fast and affordable client-ready transcription services tailored to your needs through transcription, reviewing and proofreading.',

    siteName: 'Verbalscripts - 100% Human Transcription Services',
    images: [
      {
        url: 'https://verbalscripts.com/icons/logo-banner.jpg',
        secureUrl: 'https://verbalscripts.com/icons/logo-banner.jpg',
        alt: 'Verbalscripts - Frequently asked Questions',
        type: 'image/jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://verbalscripts.com',
  },
};

export default function TermsOfService() {
  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative mx-auto max-w-6xl  h-auto  px-6 py-20   pb-40 md:py-20 lg:py-20 md:px-20 lg:px-28'>
        <div className='landing-page-video-wrapper'></div>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='flex flex-wrap  lg:flex-nowrap items-center gap-x-10 '>
          <h1 className='m relative z-10 text-5xl font-bold  text-white lg:text-5xl xl:text-6xl'>
            Terms of Service
          </h1>
        </div>

        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <div className='bg-white '>
        <div className='mx-auto max-w-6xl relative py-32 md:py-24 pb-20 md:pb-56 px-6 md:px-24 lg:px-32'>
          {/* update timeline */}
          <p className='text-md lg:text-lg mb-3 text-gray-700 font-semibold'>
            Last Updated on {moment(new Date()).format('lll')}
          </p>
          {/* terms section */}
          <p className='text-md lg:text-lg mb-3 text-gray-700'>
            These Terms govern your use of {"'Verbalscripts'"} services. They
            establish an agreement between you and Verbalscripts, Inc.,
            regarding your use of our website (including{' '}
            <a
              className='relative border-b border-indigo-600 group  py-0.5 px-1.5 text-indigo-600'
              href=''
            >
              <span className='font-semibold'>www.verbalscripts.com</span>
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all'></span>
            </a>
            ), desktop or mobile applications, and related services. By
            accessing or using our services, you agree to abide by these Terms.
            You must be legally eligible to receive our services and at least 18
            years old (or the age of majority in your jurisdiction). If using on
            behalf of an entity, you must have the authority to bind that
            entity. Our Privacy Policy outlines how we collect and use personal
            information.
          </p>

          <div className='mb-5'>
            <h4 className='max-w-4xl mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-800 lg:text-2xl '>
              Changes to Terms
            </h4>

            <p className='text-md lg:text-lg text-gray-700'>
              We may occasionally update our Terms of Service. If there are
              significant changes, we{"'"}ll notify you via email or other
              reasonable means and post the updated Terms on our platform. Your
              continued use of our services after receiving notice of changes
              indicates your acceptance of the updated terms.
            </p>
          </div>

          <div className='mb-5' id='account'>
            <a
              href='#account'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              1. Account
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              To access certain features, users must register an account (
              {'Account'}). You agree not to share or transfer your Account,
              provide accurate information during registration, and keep your
              password secure. Notify us immediately of any unauthorized Account
              use. We{"'"}re not liable for losses due to unauthorized Account
              access.
              <br></br>
              Account Profile: You can customize your Account profile and
              interaction with our services by adjusting settings. We{"'"}ll use
              the email address in your Account for service-related notices and
              may send other messages like updates or special offers. You can
              opt out of marketing emails but may still receive administrative
              emails. Keeping your contact and billing info updated is crucial.
            </p>
          </div>

          <div className='mb-5' id='account-access'>
            <a
              href='#account-access'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              2. Account Access
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              It is the responsibility of the Customer to ensure that their use
              of Verbalscripts{"'"} Services aligns with any specified limits
              outlined in the applicable Order Form. This includes safeguarding
              authentication keys and access tokens, restricting unauthorized
              access or use of the Services, and utilizing authentication keys
              or access tokens solely for the purposes granted under the
              Agreement. The Customer is accountable for all activity associated
              with authentication keys, access tokens, or their Account.
            </p>
          </div>

          <div className='mb-5' id='provision-of-services'>
            <a
              href='#provision-of-services'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              3. Provision of Services
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Orders for Services: Services can be acquired through our platform
              or, in some cases, via a mutually executed order form ("Order
              Form"). During the Term, Verbalscripts grants you a revocable
              license to access and use the Services as outlined in the Order
              Form. This includes installing and using our Apps on a device you
              own, as well as accessing relevant Documentation. Your execution
              of an Order Form is not contingent on future functionality or
              features.
            </p>
          </div>

          <div className='mb-5' id='fees'>
            <a
              href='#fees'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              3. Fees
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Fees for Services are payable in U.S. dollars unless otherwise
              specified. You authorize Verbalscripts to charge your provided
              payment method for all applicable fees during the Term. Payment
              information must be accurate and authorized. Verbalscripts may use
              a third party for payment processing. Fees are non-refundable and
              may incur wire transfer fees, unless specified otherwise.
            </p>
          </div>

          <div className='mb-5' id='invoicing'>
            <a
              href='#invoicing'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              4. Invoicing
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Verbalscripts may opt to invoice customers, with full payment due.
              Failure to make timely payments may result in service suspension.
              Unpaid invoices may incur a finance charge of 1.5% per month on
              outstanding balances depending on the agreement, or the maximum
              permitted by law. Disputed charges must be reported in writing
              within thirty (30) days of invoicing.
            </p>
          </div>

          <div className='mb-5' id='invoicing'>
            <a
              href='#invoicing'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              4. Usage Limitations
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Services may have additional limitations, such as user or device
              restrictions, or content storage caps. We reserve the right to
              charge for excess usage on a prorated basis. Customers are
              responsible for all applicable taxes and fees, except for taxes
              based on our net income. Customers are also liable for accidental
              duplicate content uploads.
            </p>
          </div>

          <div className='mb-5' id='invoicing'>
            <a
              href='#invoicing'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              5. Services Updates
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Customers have access to subscribed Services{"'"} functionality as
              of the Order Form{"'"}s effective date. While we may enhance or
              modify Services, we won't materially reduce functionality during
              the agreed term. Pricing changes will be updated, with customers
              agreeing to updated fees upon continued use.
            </p>
          </div>

          <div className='mb-5' id='invoicing'>
            <a
              href='#invoicing'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              6. Third Party Products
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Our Services may integrate with or include third-party products,
              services, or links ("Third Party Materials"). We do not endorse or
              assume responsibility for Third Party Materials. Use of such
              materials is at your own risk, and our Agreement and Privacy
              Policy do not apply to third-party sites or services. We are not
              liable for any issues arising from third-party materials use.
            </p>
          </div>

          <div className='mb-5' id='invoicing'>
            <a
              href='#invoicing'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              7. License to Your Content
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Verbalscripts obtains a nonexclusive, worldwide license to use,
              modify, and distribute any content you provide ("Your Content") to
              facilitate Services, including maintenance and improvement of our
              offerings. You retain ownership of Your Content.
            </p>
          </div>

          <div className='mb-5' id='invoicing'>
            <a
              href='#invoicing'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              8. Your Responsibility
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              You are responsible for the accuracy and legality of Your Content.
              By providing Your Content, you affirm that you have necessary
              permissions and that it complies with all laws and regulations.
            </p>
          </div>

          <div className='mb-5' id='invoicing'>
            <a
              href='#invoicing'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              8. Right to Remove Your Content
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              We reserve the right to remove any content that violates our
              policies or legal requirements, or for service improvement
              purposes. While we don't monitor all content, we may investigate
              and act upon violations as needed.
            </p>
          </div>

          <div className='mb-5' id='invoicing'>
            <a
              href='#invoicing'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              8. Right to Remove Your Content
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              We reserve the right to remove any content that violates our
              policies or legal requirements, or for service improvement
              purposes. While we don't monitor all content, we may investigate
              and act upon violations as needed.
            </p>
          </div>

          <div className='mb-5' id='invoicing'>
            <a
              href='#invoicing'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              9. Compliance with Data Protection Laws
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              We adhere to all applicable data protection laws. If Verbalscripts
              processes Personal Data on your behalf, both parties will comply
              with our Data Processing Addendum.
            </p>
          </div>

          <div className='mb-5' id='invoicing'>
            <a
              href='#invoicing'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              10. License to User Data
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              As part of providing our Services, Verbalscripts may process
              personal information and data collected from Users, Customer
              employees, clients, and contractors ("User Data"). You grant
              Verbalscripts a license to use User Data to provide the Services,
              ensure data security, and enforce our rights under the Agreement.
            </p>
          </div>

          <div className='mb-5' id='user-data-disclosure'>
            <a
              href='#user-data-disclosure'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              10. User Data Disclosure
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              We won't disclose or sell User Data except to fulfil our service
              obligations, comply with laws, with user consent, or as permitted
              by Data Protection Laws. We may share data with subcontractors
              under strict confidentiality agreements or when required by law.
            </p>
          </div>

          <div className='mb-5' id='your-responsibility'>
            <a
              href='#your-responsibility'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              11. Your Responsibility
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              You confirm compliance with Data Protection Laws regarding the
              collection and sharing of User Data. You won't submit User Data
              that violates our Prohibited Content policy.
            </p>
          </div>

          <div className='mb-5' id='anonymized-data'>
            <a
              href='#anonymized-data'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              12. Anonymized Data
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              We may collect and use aggregated and anonymized data related to
              the Services' performance. This data, known as anonymized data,
              doesn't contain personal information and won't be attributed to
              specific customers or individuals. We retain the right to use,
              analyse, and disclose anonymized data for various purposes.
            </p>
          </div>

          <div
            className='mb-5'
            id='prohibited-activities-regarding-platform-usage'
          >
            <a
              href='#prohibited-activities-regarding-platform-usage'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              12. Prohibited Activities Regarding Platform Usage
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              You agree not to engage in activities such as using automated
              systems or software to extract content from the platform,
              interfering with or disrupting the functionality of the Services
              or the servers or networks connected to the Platform, or taking
              any action that negatively affects the ability of others to access
              or use the Platform.
            </p>
          </div>

          <div
            className='mb-5'
            id='prohibited-activities-related-to-service-usage'
          >
            <a
              href='#prohibited-activities-related-to-service-usage'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              13. Prohibited Activities Related to Service Usage
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              You won't use the Services for any illegal or unauthorized
              purpose, provide access to the Services to anyone other than
              authorized Users, rent, lease, lend, sell, or sublicense the
              Services, reverse engineer, decode, decompile, disassemble, or
              otherwise attempt to access or derive the source code of the
              Platform, or introduce any viruses or harmful elements to the
              Services.
            </p>
          </div>

          <div
            className='mb-5'
            id='prohibited-activities-related-to-service-usage'
          >
            <a
              href='#prohibited-activities-related-to-service-usage'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              14. Prohibited Activities Related to Service Usage
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              You won't use the Services for any illegal or unauthorized
              purpose, provide access to the Services to anyone other than
              authorized Users, rent, lease, lend, sell, or sublicense the
              Services, reverse engineer, decode, decompile, disassemble, or
              otherwise attempt to access or derive the source code of the
              Platform, or introduce any viruses or harmful elements to the
              Services.
            </p>
          </div>

          <div className='mb-5' id='ownership-of-user-content'>
            <a
              href='#ownership-of-user-content'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              15. Ownership of User Content
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              You retain ownership of your content, including any copyrights,
              trademarks, or other intellectual property rights associated with
              your products and services, as well as any translations,
              transcriptions, or captions created through the Services.
            </p>
          </div>

          <div className='mb-5' id='ownership-of-platform-and-related-element'>
            <a
              href='#ownership-of-platform-and-related-element'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              16. Ownership of Platform and Related Element
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              On the other hand, Verbalscripts and its licensors own all rights,
              title, and interest in the Platform itself, including any
              improvements, enhancements, or modifications to it, and any
              software accessible through the Platform.
            </p>
          </div>

          <div className='mb-5' id='granting-access-through-feedback'>
            <a
              href='#granting-access-through-feedback'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              18. Granting a License through Feedback
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              If you provide any feedback, comments, questions, suggestions, or
              similar input about the Services, you grant Verbalscripts a
              worldwide, perpetual, revocable, royalty-free license to use the
              ideas, know-how, concepts, techniques, or other intellectual
              property rights contained in the feedback for any purpose,
              including improving and promoting the Services.
            </p>
          </div>

          <div className='mb-5' id='voluntary-nature-of-feedback'>
            <a
              href='#voluntary-nature-of-feedback'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              20. Voluntary Nature of Feedback
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              You acknowledge that any feedback provided is entirely voluntary
              and that it does not create any confidentiality obligation for
              Verbalscripts unless explicitly agreed upon in a separate written
              agreement
            </p>
          </div>

          <div className='mb-5' id='initial-term-and-renewal'>
            <a
              href='#initial-term-and-renewal'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              21. Initial Term and Renewal
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              The Services{"'"} initial term commences on the specified start
              date in the Order Form and extends for the duration indicated in
              said Form (the {'"Term"'}). For subscription-based Services,
              termination before the Term{"'"}s expiration is typically
              prohibited unless otherwise stated. Upon mutual agreement and
              payment of the relevant Fee, the Term may be renewed.
            </p>
          </div>

          <div className='mb-5' id='initial-term-and-renewal'>
            <a
              href='#initial-term-and-renewal'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              22. Termination and Suspension
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Verbalscripts reserves the right to suspend access to the Services
              if there is a good-faith suspicion of a violation of the Agreement
              or non-payment of Fees. If a Customer Account is suspended,
              associated User Accounts will be similarly affected.
            </p>
          </div>

          <div className='mb-5' id='termination-and-suspension'>
            <a
              href='#termination-and-suspension'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              23. Termination and Suspension
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Verbalscripts reserves the right to suspend access to the Services
              if there is a good-faith suspicion of a violation of the Agreement
              or non-payment of Fees. If a Customer Account is suspended,
              associated User Accounts will be similarly affected.
            </p>
          </div>

          <div className='mb-5' id='effect-of-termination'>
            <a
              href='#effect-of-termination'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              24. Effect of Termination
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Upon termination or expiration of the Agreement, Verbalscripts
              will terminate access to Your Content and User Data. Additionally,
              all licenses granted will cease, and Platform usage must cease
              immediately. Certain provisions, such as those related to
              De-Identified Data, Proprietary Rights, Confidential Information,
              and others, will survive termination.
            </p>
          </div>

          <div className='mb-5' id='confidentiality-obligations'>
            <a
              href='#confidentiality-obligations'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              25. Confidentiality Obligations
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Both parties agree to maintain the confidentiality of non-public
              information disclosed under the Agreement, designated as
              proprietary or confidential in writing or orally communicated and
              designated in writing within thirty days.
            </p>
          </div>

          <div className='mb-5' id='exceptions-to-confidentiality'>
            <a
              href='#exceptions-to-confidentiality'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              26. Exceptions to Confidentiality
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Both parties agree to maintain the confidentiality of non-public
              information disclosed under the Agreement, designated as
              proprietary or confidential in writing or orally communicated and
              designated in writing within thirty days.{' '}
            </p>
          </div>

          <div className='mb-5' id='exceptions-to-confidentiality'>
            <a
              href='#exceptions-to-confidentiality'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              27. Security Measures
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Verbalscripts employs administrative, physical, and technical
              safeguards to protect Your Content and User Data from unauthorized
              access, disclosure, or use. In case of unauthorized access,
              Verbalscripts will promptly inform you and cooperate with
              investigations.
            </p>
          </div>

          <div className='mb-5' id='indemnity-obligation'>
            <a
              href='#exceptions-to-confidentiality'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              28. Indemnity Obligation
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              You agree to indemnify and hold harmless Verbalscripts and its
              affiliates, directors, officers, employees, and agents from any
              Losses arising from the Agreement, Services usage, Your Content,
              User Data, breach of confidentiality, or alleged infringement of
              intellectual property rights. This includes reimbursing legal
              expenses incurred by the indemnified parties.
            </p>
          </div>

          <div className='mb-5' id='exclusion-of-certain-damages'>
            <a
              href='#exclusion-of-certain-damages'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              29. Exclusion of Certain Damages
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Verbalscripts shall not be liable for any indirect, incidental,
              special, or consequential damages, including loss of profits or
              revenue, arising from your use of the Services or any failure
              thereof. Additionally, Verbalscripts disclaims liability for any
              loss, disclosure, or corruption of User Data, Your Content, or
              other data, including those resulting from various service
              interruptions or network failures.
            </p>
          </div>

          <div className='mb-5' id='limitation-of-liability'>
            <a
              href='#exclusion-of-certain-damages'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              30. Limitation of Liability
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              In no event shall Verbalscripts{"'"} aggregate liability under the
              Agreement exceed the greater of six times the fees paid by you for
              the Services subject to the claim in the first month or the total
              fees paid to Verbalscripts for the Services subject to the claim
              in the twelve months preceding the event giving rise to the claim.
            </p>
          </div>

          <div className='mb-5' id='service-as-is'>
            <a
              href='#service-as-is'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              31. Service {'"AS IS"'}
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Verbalscripts provides the Services {'"as is,"'} without any
              warranty, whether express or implied, including warranties of
              merchantability or fitness for a particular purpose. Furthermore,
              Verbalscripts disclaims any warranty regarding the quality,
              accuracy, or uninterrupted availability of the Services.
            </p>
          </div>

          <div className='mb-5' id='unforeseeable-circumstances'>
            <a
              href='#unforeseeable-circumstances'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              32. Unforeseeable Circumstances
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Neither party shall be liable for damages resulting from
              performance failure due to events beyond their reasonable control,
              including but not limited to war, natural disasters, governmental
              acts, or supplier failures.
            </p>
          </div>

          <div className='mb-5' id='promotional-materials'>
            <a
              href='#promotional-materials'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              33. Promotional Materials
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              By agreeing to the Agreement, you consent to Verbalscripts
              publicly disclosing its provision of Services to you.
              Verbalscripts may include your name, logo, and other identifying
              marks in promotional materials, subject to reasonable usage
              guidelines
            </p>
          </div>

          <div className='mb-5' id='governing-law'>
            <a
              href='#governing-law'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              34. Governing Law
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              The Agreement shall be governed by the laws of the State of Texas,
              with disputes subject to resolution in federal and state courts
              located in Austin, Texas.
            </p>
          </div>

          <div className='mb-5' id='arbitration-agreement'>
            <a
              href='#arbitration-agreement'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              35. Arbitration Agreement
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Disputes between you and Verbalscripts shall be resolved through
              binding arbitration conducted by the American Arbitration
              Association ("AAA") under its rules. This provision governs all
              Claims arising from or relating to the Agreement.
            </p>
          </div>

          <div className='mb-5' id='opt-out-option'>
            <a
              href='#arbitration-agreement'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              36. opt-out-option
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              New users may opt out of arbitration within thirty days of
              accepting the Agreement. However, opting out does not affect other
              provisions of the Agreement.
            </p>
          </div>

          <div className='mb-5' id='relief-for-individual-claimants'>
            <a
              href='#relief-for-individual-claimants'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              37. Relief for Individual Claimants
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              In arbitration or court proceedings, relief may only be awarded to
              the individual claimant and shall not affect other users of
              Verbalscripts.
            </p>
          </div>

          <div className='mb-5' id='waiver-of-jury-trial'>
            <a
              href='#waiver-of-jury-trial'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              38. Waiver of Jury Trial
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              By agreeing to this Agreement, you waive the right to a trial by
              jury and to participate in class actions or similar representative
              proceedings.
            </p>
          </div>

          <div className='mb-5' id='waiver-of-jury-trial'>
            <a
              href='#waiver-of-jury-trial'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              39. Export Control Laws
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              You acknowledge that Verbalscripts{"'"} services and related
              products are subject to export control laws and regulations. You
              represent and warrant that you comply with all trade restrictions,
              including not being located in embargoed countries or territories.
            </p>
          </div>

          <div className='mb-5' id='entire-agreement'>
            <a
              href='#entire-agreement'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              40. Entire Agreement
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              This Agreement constitutes the entire understanding between
              Verbalscripts and you, superseding any prior agreements. Any
              conflicting terms proposed by you are rejected.
            </p>
          </div>

          <div className='mb-5' id='order-form-control'>
            <a
              href='#order-form-control'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              41. Order Form Control
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              In case of conflict between this Agreement and an Order Form, the
              terms of the Order Form prevail only for that Order Form.
            </p>
          </div>

          <div className='mb-5' id='assignment'>
            <a
              href='#assignment'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              42. Assignment
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              You may not assign your rights under this Agreement without
              Verbalscripts:{"'"} consent, but Verbalscripts may assign this
              Agreement without restriction.
            </p>
          </div>

          <div className='mb-5' id='legal-compliance'>
            <a
              href='#legal-compliance'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              43. Legal Compliance
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Both parties agree that this Agreement complies with applicable
              laws and regulations, and the services provided under this
              Agreement are within the scope of commercial business purposes.
            </p>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
