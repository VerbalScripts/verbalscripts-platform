import React from 'react';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verbalscripts - Customers Confidentiality Agreement',

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
          <h1 className='relative z-10 text-5xl font-bold  text-white lg:text-5xl xl:text-6xl'>
            Transcription Confidentiality Agreement
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
            <p className='text-md lg:text-lg text-gray-700'>
              THIS AGREEMENT (the “Agreement”) made in duplicate, regarding
              transcription services provided by Verbalscripts to [Your Name]is
              effective as of [Month], [Date] [Year]; BETWEEN:{' '}
              <b>Verbalscripts Transcription Services</b> Hereinafter referred
              to as the “Contractor” and [Your Name] Hereinafter referred to as
              the “Client”.
              <br></br>
              WHEREAS the Contractor has entered into an agreement with (“the
              Client”) for the provision of transcription services regarding
              audio, video and transcripts (“confidential data”);
              <br></br>
              AND WHEREAS the Contractor is providing transcription services to
              the Client;
              <br></br>
              AND WHEREAS the Contractor is transcribing audio (“confidential
              data”) provided by the Client to the Contractor;
              <br></br>
              AND WHEREAS the Client requires that the Contractor and any
              individuals providing transcription services regarding
              confidential data enter into a Confidentiality Agreement;
              <br></br>
              NOW THEREFORE the Contractor, in consideration for being given the
              opportunity to provide transcription services regarding
              confidential data, agrees as follows:
              <br></br>
              The Contractor desires to provide transcription services to the
              Client. During the provision of services, the Client may share
              certain information with the Contractor. Therefore, in
              consideration of the mutual promises and covenants contained in
              this Agreement the parties agree as follows:
            </p>
          </div>

          <div className='mb-5' id='our-policy'>
            <a
              href='#defining-of-confidential-information'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              1. Definition of Confidential Information.
            </a>

            <ol className='text-md lg:text-lg mb-3 text-gray-700 list-[lower-alpha] ml-10'>
              <li>
                <span>
                  For purposes of this Agreement, “Confidential Information”
                  means any data or information that is proprietary to the
                  Client and not generally known to the public, whether in
                  tangible or intangible form, whenever and however disclosed,
                  including, but not limited to:
                </span>
                <ol className='text-md lg:text-lg mb-3 text-gray-700 list-[lower-roman] ml-5 my-5'>
                  <li>Information contained in audio and video recordings;</li>
                  <li>Transcripts of audio and video recordings;</li>
                  <li>Documents aiding the transcription process;</li>
                  <li>
                    Any other information that should reasonably be recognized
                    as confidential information of the Client.
                  </li>
                </ol>
              </li>
              <li>
                <span>
                  Notwithstanding the above, Confidential Information shall not
                  include information which:
                </span>
                <ol className='text-md lg:text-lg mb-3 text-gray-700 list-[lower-roman] ml-5 my-5'>
                  <li>
                    Was known by the Contractor prior to receiving the
                    Confidential Information from the Client;
                  </li>
                  <li>
                    Becomes rightfully known to the Contractor from a
                    third-party source not known (after diligent inquiry) by the
                    Contractor to be under an obligation to the Client to
                    maintain confidentiality;
                  </li>

                  <li>
                    Is or becomes publicly available through no fault of, or
                    failure to act by, the Contractor in breach of this
                    Agreement;
                  </li>
                  <li>
                    Is required to be disclosed in a judicial or administrative
                    proceeding, or is otherwise requested or required to be
                    disclosed by law or regulation
                  </li>
                </ol>
              </li>
              
            </ol>
          </div>

          <div className='mb-5' id='how-we-collect-data'>
            <a
              href='#disclosure-of-confidential-information'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              2. Disclosure of Confidential Information.
            </a>

            <p className='text-md lg:text-lg text-gray-700'>
              In accordance with seeking transcription services the Client may
              disclose Confidential Information to the Contractor. The
              Contractor will:
            </p>

            <ol className='text-md lg:text-lg mb-3 text-gray-700 list-[decimal] ml-10 my-5'>
              <li>
                Limit disclosure of any Confidential Information to its
                transcribers, proofreaders, or team members (collectively
                “Representatives”) who have a need to know such Confidential
                Information in order to provide the transcription services to
                which this Agreement relates, and only for that purpose;
              </li>
              <li>
                Advise its Representatives of the very private and very
                confidential nature of the Confidential Information and of the
                obligations set forth in this Agreement and require their
                Representatives to sign similar legally binding Confidentiality
                Agreements with the Contractor;
              </li>
              <li>
                Shall keep all Confidential Information strictly confidential by
                using a high degree of care and security; and
              </li>
              <li>
                Not disclose any Confidential Information received by it to any
                third parties (except as otherwise provided for herein).
              </li>
              
            </ol>
          </div>

          <div className='mb-5' id='how-we-use-your-data'>
            <a
              href='#use-of-confidential-information'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              3. Use of Confidential Information.
            </a>

            <p className='text-md lg:text-lg text-gray-700'>
              The Contractor agrees to use the Confidential Information solely
              in connection with the provision of transcription services and not
              for any purpose other than as authorized by this Agreement without
              the prior written consent of an authorized representative of the
              Client. No other right or license, whether expressed or implied,
              in the Confidential Information is granted to the Contractor
              hereunder. Title to the Confidential Information will remain
              solely in the Client. All use of Confidential Information by the
              Contractor shall be for the benefit of the Client and any
              modifications and improvements thereof by the Contractor shall be
              the sole property of the Client.
            </p>
          </div>

          <div className='mb-5' id='how-we-use-your-data'>
            <a
              href='#Return-of-confidential-information'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              4. Return of Confidential Information.
            </a>

            <p className='text-md lg:text-lg text-gray-700'>
              The Contractor shall return, delete, or destroy all recordings
              containing the Confidential Information provided, including all
              transcripts and audio and video recordings, upon the earlier of:
            </p>

            <ol className='text-md lg:text-lg mb-3 text-gray-700 list-[decimal] ml-10 my-5'>
              <li>
                The completion or termination of the project between the parties
                as contemplated herein;
              </li>
              <li>The termination of this Agreement;</li>
              <li>At such time as the Client may request;</li>
              <li>In accordance with privacy terms.</li>
            </ol>
          </div>

          <div className='mb-5' id='how-we-use-your-data'>
            <a
              href='#Return-of-confidential-information'
              className='max-w-4xl block after:content-["#"] cursor-pointer after:text-gray-100 after:transition-all transition-all after:ml-5 after:hover:text-gray-300 mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-600  hover:text-gray-700 lg:text-2xl '
            >
              5. Miscellaneous
            </a>


            <ol className='text-md lg:text-lg mb-3 text-gray-700 list-[lower-alpha] ml-10'>
              <li>
               This Agreement constitutes the entire understanding between the parties and supersedes any and all prior understandings and agreements, whether oral or written, between the parties, with respect to the subject matter hereof. This Agreement can only be modified by a written amendment signed by the party against whom enforcement of such modification is sought. 
              </li>
              <li>The validity, construction and performance of this Agreement shall be governed and construed in accordance with the law applicable to contracts made and to be wholly performed within such state, without giving effect to any conflict of laws provisions thereof. The court shall have sole and exclusive jurisdiction over any disputes arising under the terms of this Agreement.</li>
              <li>In the event of any controversy or claim arising out of or relating to this agreement, or the breach thereof, the parties shall:</li>
              <ol className='text-md lg:text-lg mb-3 text-gray-700 list-[decimal] ml-5 my-5'>
                  <li>
                    <b>Negotiation</b>:
                    Enter into negotiation with each other, recognizing their mutual interests, and attempt to reach a solution satisfactory to both parties. If a settlement is not reached within 7 days, then either party may proceed to mediation.
                  </li>
                  <li>
                   <b>Mediation</b>: By notice to the other party and an online-based recognized mediator, demand mediation under the Mediation Rules of the International Centre for Dispute Resolution. If a settlement is not reached within 7 days after the written demand for mediation, either party may proceed to arbitration.
                  </li>

                  <li>
                   <b>Arbitration</b>: Any unresolved controversy or claim arising out of or relating to this contract shall be settled by arbitration administered by the law.
                  </li>
                 
                </ol>
            </ol>
          </div>

          <div className='mb-5'>
            <h4 className='max-w-4xl mb-5 lg:max-w-4xl xl:max-w-5xl relative z-10 text-2xl font-bold  text-gray-800 lg:text-2xl '>
              Conclusion
            </h4>

            <p className='text-md lg:text-lg text-gray-700 mb-5'>
            Paragraph headings used in this Agreement are for reference only and shall not be used or relied upon in the interpretation of this Agreement. 
            <br/>
            <br/>
            IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the date first above written.
            </p>


            <ul className='text-gray-800 space-y-2'>
              <li>
                <span>CONTRACTOR:</span>
                 <span className='ml-3 font-bold'>VerbalScripts</span>
              </li>
              <li>
                <span>CLIENT:</span>
                 <span className='ml-3 font-bold'>{"auto name"}</span>
              </li>
             
            </ul>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
