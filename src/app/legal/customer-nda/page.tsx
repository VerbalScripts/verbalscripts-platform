import React from 'react';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verbalscripts - Transcriber NDA',

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
            Privacy Policy
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

          <div className='mb-5'>
            <h4 className='max-w-4xl mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-800 lg:text-2xl '>
              About us
            </h4>

            <p className='text-md lg:text-lg text-gray-700'>
              Verbalscripts is a leading provider of transcription services.
              Based in the United States, we pride ourselves on delivering
              accurate and reliable solutions to meet our users{"'"} diverse
              communication needs. Through our verbalscripts.com and our
              well-trained transcriptionists, we aim to make the transcription
              process simple and efficient for individuals and businesses alike.
              Trust Verbalscripts for professional, quality-driven transcription
              services.
            </p>
          </div>

          <div className='mb-5' id='our-policy'>
            <a
              href='#our-policy'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              Our policy
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Our Privacy Policy governs how we collect and use data concerning
              your use of Verbalscripts services, including our website and
              other offerings (collectively referred to as the{' '}
              {'"Verbalscripts Services"'}). By using Verbalscripts, you agree
              to this Privacy Policy and any future updates we may make.
              However, this policy doesn{"'"}t extend to co-branded pages hosted
              by our partners, affiliates, or service providers. When we refer
              to
              {'"'}Verbalscripts,{'"'} {'"'}we,{'"'} {'"'}our,{'"'} or {'"'}us,
              {'"'} we mean Verbalscripts. In some cases, we may have separate
              agreements with business customers that outline specific terms
              regarding data confidentiality, security, or handling. If the
              terms of such an agreement conflict with this Privacy Policy, the
              agreement{"'"}s terms will prevail. Otherwise, the terms outlined
              in this policy apply.
            </p>
          </div>

          <div className='mb-5' id='how-we-collect-data'>
            <a
              href='#how-we-collect-data'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              How we collect Data
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              At Verbalscripts, we prioritize transparency and privacy in how we
              gather information: We collect personal data when you voluntarily
              provide it, such as during registration or when contacting us
              directly, we may also automatically gather certain information
              through web server logs and cookies as you interact with our
              website and services, we may also obtain personal data from
              third-party sources to enhance our offerings. When processing
              customer data, we adhere to strict security measures and legal
              compliance. Our services provide transcription solutions, with
              customers retaining control over their data and ensuring
              compliance with relevant laws.
            </p>
          </div>

          <div className='mb-5' id='how-we-use-your-data'>
            <a
              href='#how-we-use-your-data'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              How we use your Data
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              At Verbalscripts, when you use our online portal, mobile app,
              marketing site, or related tools to access our transcription
              services, we may request certain information from you. This
              includes contact details like your name and email, as well as
              financial information such as credit card numbers, necessary for
              billing purposes and to process your transcription orders. Your
              provided information is crucial for delivering our services
              efficiently and enhancing your experience with us. Rest assured,
              we prioritize the confidentiality of your data, and any associates
              or trusted parties assisting in our operations have signed
              Non-Disclosure Agreements (NDAs) to uphold this commitment.{' '}
              <br></br> We respect your privacy and will not share your personal
              information with any third parties outside of our organization,
              except as expressly permitted herein. However, there are instances
              where we may be required by law to disclose your information, such
              as to comply with legal obligations, enforce our website/business
              policies, or protect our rights and the safety of others.
              Additionally, any personally identifiable visitor information will
              not be utilized for marketing, advertising, or other purposes, and
              we never disclose any personally identifiable or financial
              information related to payment activities. <br></br>By providing
              your personally identifiable information on our website, you
              consent to its use in accordance with this Privacy Policy. Before
              submitting your information to our systems, you must acknowledge
              your understanding of this Policy. Please note that any personal
              data may be transferred from your current location to our servers
              in the United States. It{"'"}s important to mention that
              Verbalscripts services are not intended for use by children under
              the age of 13, and we do not knowingly collect or store any
              personal information about individuals under this age.
            </p>
          </div>

          <div className='mb-5' id='how-we-use-your-personal-information'>
            <a
              href='#how-we-use-your-personal-information'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              How We Use Your Personal Information
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              At Verbalscripts, we utilize the various categories of information
              outlined in our privacy policy primarily to fulfill our
              contractual obligations to you and to ensure compliance with legal
              requirements. We may also process your personal information in
              pursuit of our legitimate interests or those of third parties,
              provided that your interests and fundamental rights are not
              compromised. Below are the situations in which we will process
              your personal information:
              <br></br>
              <ul className='list-disc px-6 space-y-2'>
                <li>
                  Providing our services to you, including processing your
                  orders and notifying you upon completion.
                </li>
                <li>
                  Responding to your inquiries and addressing any concerns you
                  may have.
                </li>
                <li>
                  Administering the contractual agreement we have established
                  with you under our Terms of Service.
                </li>
                <li>
                  Conducting business management and planning activities, which
                  may include accounting and auditing procedures.
                </li>
                <li>
                  Implementing measures to prevent fraud and safeguarding
                  against unauthorized access to our systems.
                </li>
                <li>
                  Ensuring the security of our network and information, which
                  involves preventing malicious software distribution and
                  unauthorized access to our computer systems.
                </li>
                <li>
                  Conducting equal opportunities monitoring to promote diversity
                  and inclusivity within our organization.
                </li>
              </ul>
              It{"'"}s important to note that some of these purposes for
              processing may overlap, and there may be multiple grounds that
              justify our use of your personal information. At Verbalscripts, we
              are committed to protecting your privacy and ensuring that your
              personal information is handled with care and in accordance with
              applicable laws and regulations.
            </p>
          </div>

          <div className='mb-5' id='verbalscripts-data-security'>
            <a
              href='#verbalscripts-data-security'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              Verbalscripts Data Security
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              At Verbalscripts, safeguarding the security of your information is
              paramount to us. When you provide sensitive details through our
              website, rest assured that we implement comprehensive security
              measures to protect your data both online and offline.
              <br></br>
              Whenever sensitive information, such as credit/debit card or
              payment data, is collected, we encrypt and transmit it securely.
              You can verify this security by observing a lock icon in the
              address bar and ensuring the URL begins with {'"https"'}. While
              encryption is utilized to safeguard sensitive information online,
              we also ensure its protection offline. Third parties handling your
              personal data do so under our instructions and strict
              confidentiality agreements to ensure its security.
              <br></br>
              We{"'"}ve implemented robust security measures to prevent
              unauthorized access, alteration, or disclosure of your personal
              information. Access to your data is limited to authorized
              personnel, including employees, agents, contractors, and other
              trusted third parties, who require access for business purposes
              only. We have procedures in place to address any suspected data
              security breaches promptly. In the event of a suspected breach, we
              will notify you and relevant regulatory authorities as required by
              law. Your privacy and security are of utmost importance to us, and
              we take every measure to uphold them diligently.
            </p>
          </div>

          <div className='mb-5' id='rights-regarding-personal-information'>
            <a
              href='#rights-regarding-personal-information'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              Your Rights Regarding Personal Information
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              At Verbalscripts, we respect your rights concerning your personal
              information and provide options for you to manage your data
              preferences. You have the following rights under the law:
              <ul className='list-disc px-6 space-y-2'>
                <li>
                  <b>Access</b>: You have the right to request access to the
                  personal information we hold about you. This allows you to
                  obtain a copy of your data and verify that we are processing
                  it lawfully.
                </li>
                <li>
                  <b>Correction</b>: If any of the personal information we hold
                  about you is incomplete or inaccurate, you have the right to
                  request correction. We will promptly update any incorrect
                  information to ensure its accuracy.
                </li>
                <li>
                  <b>Erasure</b>You can request the deletion or removal of your
                  personal information where there is no legitimate reason for
                  us to continue processing it. This includes situations where
                  you have objected to the processing, and there is no
                  overriding legitimate interest for us to retain the data.
                </li>
                <li>
                  <b>Objection</b>: If we are processing your personal
                  information based on our legitimate interests (or those of a
                  third party), and you believe there are grounds relating to
                  your particular situation that warrant objection to
                  processing, you have the right to do so. You also have the
                  right to object to processing for direct marketing purposes
                </li>
                <li>
                  <b>Restriction</b>: You can request the suspension of
                  processing of your personal information in certain
                  circumstances, such as when you contest the accuracy of the
                  data or when you object to processing pending verification of
                  our legitimate interests.
                </li>
                <li>
                  <b>Data Portability</b>: You have the right to request the
                  transfer of your personal information to another party in a
                  structured, commonly used, and machine-readable format.
                  <br></br>
                  If you wish to exercise any of these rights, including
                  reviewing, verifying, correcting, or requesting erasure of
                  your personal information, objecting to the processing of your
                  data, or requesting data transfer, please contact us in
                  writing. We are committed to ensuring that your rights
                  regarding your personal information are respected and upheld.
                </li>
              </ul>
            </p>
          </div>

          <div className='mb-5' id='cookies-and-cracking'>
            <a
              href='#cookies-and-cracking'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              Cookies and Tracking Technologies
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Verbalscripts utilize cookies and other technologies in
              collaboration with our service providers for various purposes,
              including performance enhancement, tracking, analytics, and
              personalization. We may share non-identifiable or aggregated
              extracts of this information with our partners for legitimate
              business reasons.
              <br></br>
              Verbalscripts utilize cookies and other technologies in
              collaboration with our service providers for various purposes,
              including performance enhancement, tracking, analytics, and
              personalization. We may share non-identifiable or aggregated
              extracts of this information with our partners for legitimate
              business reasons.
              <br />
              Cookies are small packets of information sent to your web browser
              and returned to the server each time your browser accesses it.
              Some cookies, known as {'"'} Session Cookies,{'"'} are deleted
              when you close your browser, while others, called {'"'}Persistent
              Cookies,{'"'}
              last for longer periods. We may use both types of cookies.
              <br />
              Persistent Cookies are employed to remember your login details,
              making it easier for you to access our platform in subsequent
              visits. Additionally, we utilize both Persistent and Session
              Cookies to enhance the usability of our services{"'"} features and
              tools.
              <br />
              Although we do not alter our practices in response to a{' '}
              {'"Do Not Track"'} signal from browsers or mobile applications,
              you can manage your cookie preferences through your browser
              settings. It{"'"}s important to note that disabling cookies may
              affect your ability to use our services.
              <br />
              Please be aware that if you obtain a new computer, install a new
              browser, or make changes to your browser{"'"}s cookie file,
              including upgrades, you may inadvertently clear opt-out cookies
              previously installed. In such cases, you may need to opt-out again
              to prevent further tracking.
            </p>
          </div>

          <div className='mb-5' id='communication'>
            <a
              href='#communication'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              Communications
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              At Verbalscripts, we communicate with you through various
              channels:
              <ul className='list-disc px-6 space-y-2'>
                <li>
                  <b>Service Communications</b>: We{"'"}ll keep you informed
                  about essential service updates, reminders, and
                  account-related notifications necessary for your use of our
                  platform.
                </li>
                <li>
                  <b> Promotional Communications</b>: We may also send you
                  information about new features, events, or special offers that
                  we think you{"'"}ll find valuable.
                </li>
              </ul>
              You have control over your communication preferences, which you
              can manage from your user profile settings. However, certain
              service-related communications, such as password resets or billing
              notices, are integral and cannot be opted out of. If you prefer
              not to receive promotional communications, you can unsubscribe at
              any time.
            </p>
          </div>

          <div className='mb-5' id='securing-your-data'>
            <a
              href='#securing-your-data'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              Securing Your Data
            </a>

            <p className='text-md lg:text-lg mb-3 text-gray-700'>
              Safeguarding your information is a top priority. When you provide
              sensitive details via our website, rest assured that we employ
              stringent security measures both online and offline. Sensitive
              information, such as credit card data, is encrypted and securely
              transmitted to us.
              <br />
              While we strive to maintain the security of your personally
              identifiable information, it{"'"}s important to recognize that no
              security measures are foolproof. Therefore, we cannot guarantee
              that your personal data will never be disclosed in a manner
              inconsistent with this Privacy Policy. However, in the event of a
              security breach where there is a reasonably likely risk of
              identity theft or as required by law, we will make reasonable
              efforts to notify you within 72 hours.
              <br />
              In addition to online security measures, we also safeguard your
              information offline. Access to personally identifiable information
              is restricted to only those associates who require it for their
              duties. Our servers and databases storing personally identifiable
              information are maintained in a secure environment to ensure the
              utmost protection of your data.
            </p>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
