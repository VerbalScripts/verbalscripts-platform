/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { useState } from 'react';
import Faqs from '@/components/Faqs';
import { classNames } from '@/utils/classNames';

export default function FaqsPageTab() {
  const human_transcripts: FaqsProp[] = [
    {
      title: 'What sets Verbalscripts apart from other transcription services?',
      content: `<b>Experienced Transcriptionists:</b> Our transcriptionists undergo a thorough recruitment and training process to meet our high standards. They exhibit precise attention to detail, possess a firm grasp of English grammar, and are dedicated to ensuring your transcripts meet the highest standards of quality and accuracy.<br/><br/>
          <b>Value for Money:</b> Verbalscripts offers a cost-effective solution, ensuring high-quality transcripts at a lower rates compared to competitors, allowing you to save without compromising on quality<br/><br/>        
          <b>Accuracy Guarantee:</b> Verbalscripts ensures transcript accuracy through four-step process: transcribing, reviewing, proofreading, and formatting, guaranteeing high-quality transcripts.<br/><br/>
          <b>Dedicated Customer Service:</b> Enjoy personalized support with a dedicated contact person assigned to you, ensuring seamless communication and assistance.<br/><br/>
          <b>Extensive Experience:</b> With a track record of serving over 500 satisfied customers, Verbalscripts brings extensive experience and expertise to every transcription project.
          `,
    },
    {
      title:
        "What is Verbalscripts' accuracy guarantee and how do you achieve it? ",
      content:
        'Verbalscripts is committed to providing accurate transcription services. We achieve this through a meticulous four-step process by our experienced human transcriptionists. This process includes transcribing, reviewing, proofing, and formatting to ensure high-quality transcripts.<br/><br/>In the rare instance that a customer is dissatisfied with their transcript, we offer a comprehensive review process. If any errors are identified that do not meet our stringent standards, we are happy to redo the file to ensure complete satisfaction.',
    },
    {
      title: 'Why are humans considered more reliable than AI and software?',
      content: `Humans possess the ability to grasp context and distinguish voices, even in situations where multiple speakers are talking simultaneously. Conversely, AI and software often struggle to accurately identify speakers and may make erroneous assumptions, particularly with homonyms and similar-sounding words.
      <br/><br/>At Verbalscripts, your transcripts are 100% crafted by experienced transcriptionists, ensuring unparalleled quality and accuracy that software-generated transcripts cannot match.`,
    },
    {
      title: 'Why do Verbalscripts concentrate on 6 industries? ',
      content:
        "At Verbalscripts, we prioritize six key industries due to our transcriptionists' expertise and specialized training in these areas. This specialized training, coupled with their background knowledge, enables them to grasp common terminologies and context within these fields, ensuring an exceptional accuracy in every completed file. Despite this focus, our extensive transcription experience allows us to cover a wide range of subject areas. So, even if your subject doesn't fall within our primary industries, rest assured that we likely have an expert suitable for your needs. Contact us today to discover more about our comprehensive transcription services.",
    },

    {
      title:
        "What is Verbalscripts' accuracy guarantee and how do you achieve it? ",
      content:
        'Verbalscripts is committed to providing accurate transcription services. We achieve this through a meticulous four-step process by our experienced human transcriptionists. This process includes transcribing, reviewing, proofing, and formatting to ensure high-quality transcripts.<br/><br/>In the rare instance that a customer is dissatisfied with their transcript, we offer a comprehensive review process. If any errors are identified that do not meet our stringent standards, we are happy to redo the file to ensure complete satisfaction.',
    },
    {
      title: 'What file formats does Verbalscripts accept?',
      content: `Verbalscripts accommodates any file format required by our customers.`,
    },
    {
      title: 'Does Verbalscripts support transcription for complex topics?',
      content: `Absolutely. Verbalscripts boasts a team of experienced transcribers equipped with the necessary training and expertise to tackle even the most intricate subjects. Rest assured, whether your project is complex or straightforward, we're here to serve your transcription needs.`,
    },
    {
      title: 'What industries does Verbalscripts specialize in?',
      content: `Verbalscripts caters to a diverse range of industries. While our primary focus lies in providing legal transcription services for court reporting and legal purposes, we also specialize in transcription for higher education and general business sectors. Additionally, our services extend to conferences and various other industries such as media, entertainment, government, and finance.`,
    },
    {
      title: 'How does Verbalscripts Human transcription service work?',
      content: `Our human transcription service entails the conversion of audio to text files by our experienced transcribers, all of whom are native English speakers. We guarantee an accuracy of your transcripts. Simply upload or send your files through your preferred method. Our skilled transcribers handle the task, and once our rigorous 3-step process is completed, your transcript will be accessible in your account. Additionally, we'll send you the transcript via email in your preferred format. Any revisions you require will be promptly accommodated.`,
    },
    {
      title: 'What languages do Verbalscripts support?',
      content: `Currently, we only support English. However, we are working on expanding our language offerings. Stay informed about updates by checking our website.`,
    },
    {
      title: 'Can Verbalscripts transcribe multiple speaker files?',
      content: `We pride ourselves on transcribing legal transcription, focus groups, panel discussions, and other multiple-speaker files. No additional fees will be incurred for labelling speakers or formatting to your specific requirements.`,
    },
    {
      title: 'Can Verbalscripts provide timestamped transcripts?',
      content: `Yes. We offer timestamped transcripts upon request. You can indicate your preference for timestamping during the upload process. Additionally, we can provide samples of our completed timestamped transcripts for your review.`,
    },
    {
      title: '. What formats and templates do Verbalscripts accept?',
      content: `We are flexible and can accommodate almost any request when it comes to formats and templates. We tailor our services to your specific needs, as long as they do not involve proprietary software we cannot access.`,
    },
    {
      title: '. How does Verbalscripts communicate with clients?',
      content: `We always prefer email. We prefer to use the primary email supplied with the audio file, but we can also copy any other email ID if you specifically instruct us to do so.<br/>
Based on your comfort, our personnel can also text chat with you to address queries instantaneously if you supply us with your phone number. <br/>
Sometimes our email might not successfully make it through to your mail server. It might get marked as spam or be turned away by your mail server. You can always log in to our website to download your transcripts. <br/>
Lastly, we can call you on your landline or mobile, but we always have this as the last resort. We discreetly discourage our production team from making repeated client calls unless & until absolutely necessary or urgent.
`,
    },
    {
      title: 'Are my transcripts handled by experienced professionals?',
      content: `Absolutely! At Verbalscripts, your transcripts are meticulously crafted by experienced transcriptionists, ensuring unparalleled quality and accuracy that software-generated transcripts cannot match.`,
    },
  ];

  const service_faqs: FaqsProp[] = [
    {
      title: 'What is your turn-around times?',
      content: `Verbalscripts offer various turnaround options tailored to your needs. Our standard turnaround, the most cost-effective option, typically provides a 24 – 48-hour turn-around time. If you require faster service, inquire about our same-day services. Weekend turnaround is also available at no additional charge.`,
    },
    {
      title: 'What quality assurance measures do you implement?',
      content: `Quality assurance measures we follow include:<br/><br/>
      - Stringent 3-level quality checking by editors, reviewers and proofreaders.<br/>
      - Our transcriptionists use software such as Stedman’s Spell check and Webster’s dictionary, along with other legal directories, for error-free results.<br/>
      - We utilize the latest versions of MS Office and WordPerfect and sound/media players and converters for more accurate transcription. <br/>
      `,
    },
    {
      title: 'What format do you deliver your transcripts in?',
      content: `We pride ourselves on offering transcripts in your preferred format. By default, we deliver transcripts via email in Microsoft Word format. However, we can accommodate requests for PDF, Word Perfect, or plain text formats. Please specify your preferred format or send us a template before commencing your project, and we'll gladly meet your needs.`,
    },
    {
      title: 'What are Verbalscripts business days?',
      content: `Our experienced transcribers operate 24/7. Live chat, SMS, and email support are available both on weekdays and weekends.`,
    },
    {
      title: 'Is the turnaround time in calendar days?',
      content: `Yes, the turnaround time includes weekends and holidays.`,
    },
    {
      title:
        'I want only a portion of my audio file to be transcribed, can you do that?',
      content: `Certainly. We can transcribe specific sections of your audio file at no extra cost. Simply inform us before uploading or include instructions during the upload process.`,
    },
    {
      title:
        'I require a customized transcript for my project, how can I request one?',
      content: `Verbalscripts offers professional services tailored to your specific requirements. Please contact us with details about your project, and we'll promptly assist you.`,
    },
    {
      title: 'May I partner with a dedicated point person at Verbalscripts?',
      content: `Yes, we can provide you with a dedicated point of contact. This ensures consistent communication and product delivery from someone who is familiar with the status of your files at all times.`,
    },
    {
      title: 'Is it possible to rush an order?',
      content: `Yes. We prioritize delivering files swiftly. For no additional fees, orders can be expedited at your request. These rush jobs receive top priority and dedicated attention to ensure swift completion.`,
    },
    {
      title: 'Does Verbalscripts refuse any audio quality?',
      content: `No, we accept all kinds of audio quality. However, it's important to note that audio quality directly affects transcript quality. To produce transcripts with optimal quality, we need audio with decent volume equal to normal human hearing and very limited recording instrument interference or background noise.`,
    },
    {
      title: 'Does Verbalscripts produce verbatim transcripts?',
      content: `Yes, we produce verbatim transcripts based on project and specific customer demands. Our verbatim documents will retain every utterance including false starts and filler words like 'Uh', 'duh', 'er', 'um', etc., 'Like', 'I mean', 'you know', 'uh-huh', 'mm-hmm', etc. All slang, e.g., 'kinda', 'sorta', 'gonna', 'cuz', (or 'coz'), 'gotcha', etc. On specific request, all interruptions & crosstalk, laughter, sighs, door closing, system logging in welcome sounds, etc. are also captured as sounds in action within brackets. For example, a speaker laughing at the middle or end of a sentence is captured as '[Laughs]'. You can also decide on specific levels of verbatim by leaving special instructions in the comments box. For example, in a one-to-one conversation, you can leave a comment saying, 'Please remove stutters, but retain all the filler words.' 'Please record ambient sounds like logging on, logging off, and moving from one room to the other, as we want to retain the speakers' actions.`,
    },
  ];

  const security: FaqsProp[] = [
    {
      title: "What is Verbalscripts' confidentiality policy?",
      content: `Verbalscripts prioritizes top-tier security and confidentiality measures. Our process ensures confidentiality by limiting access to your audio and transcript files. Only our Reviewers and Proofers team, who have signed NDAs, have full access to the recordings. Additionally, our platform is built on Amazon Web Services (AWS), renowned for its data security standards. If you have bulk transcription needs requiring a specific NDA, please reach out to us, and we'll gladly accommodate your request.`,
    },
    {
      title: 'Is Confidentiality assured?',
      content: `Yes, we strictly limit access on a need-to-know basis and bind our transcribers with NDAs outlined in our terms of service. We employ multiple security measures to safeguard your data and never sell or share it with third parties.`,
    },
    {
      title: 'Can Verbalscripts sign an NDA?',
      content: `Certainly. Contact us, and we'll respond within 1-2 business days to address your request.`,
    },
    {
      title: 'How do Verbalscripts keep my information secure?',
      content: `We ensure utmost privacy by not sharing your files or personal data with external parties. All personnel working for Verbalscripts are required to sign Non-Disclosure Agreements, preventing discussion of your information with third parties.`,
    },
    {
      title: 'What happens to my material after you’ve completed my job?',
      content: `Upon completion, your work is securely stored on our servers for 90 days for transcripts and 10 days for audio files, facilitating potential revisions or access to digital copies. After this period, all files are deleted. If you require adjustments to this policy or earlier deletion of your material, please inform us, and we'll accommodate your request promptly.`,
    },
  ];

  const career_and_general: FaqsProp[] = [
    {
      title: 'How can I sign up as a transcriber?',
      content: `To embark on your journey as a transcriber with Verbalscripts, please visit our "Become a Transcriber" page for comprehensive instructions on getting started. It's essential to note that applicants must possess a minimum of 5 years of transcription experience and be native English speakers. Additionally, we may request documents such as your ID, Resume, W-9 form, and a video to better understand you better.`,
    },
    {
      title: 'Which businesses need transcription services?',
      content: `Everyone! Attorneys, paralegals, assistants, business professionals, entrepreneurs, civic leaders, community organizers, counselors, advisors, coaches, educators, professors, teachers, students, support staff, executives, administrators, journalists, editors, authors, writers, screenwriters, reporters, keynote speakers, program producers, media executives, podcasters, radio personnel, office managers, project managers, online video contributors, video editors, producers, physicians, medical technicians, holistic practitioners, politicians, government liaisons, religious leaders, secretaries.`,
    },
    {
      title: 'Is accuracy more important than speed in transcription?',
      content: `In transcription, accuracy takes precedence over speed, although both are crucial. When seeking transcription services, it's essential to prioritize accuracy and efficiency. At Verbalscripts we deliver transcripts with the highest accuracy while ensuring timely completion of the task.`,
    },
    {
      title: 'What is the purpose of transcription in the legal industry?',
      content: `In the legal sector, transcription serves the critical function of accurately documenting all courtroom proceedings and internal legal processes. This includes transcribing depositions, testimonies, hearings, interrogations, client letters, briefs, and more to maintain precise records.`,
    },
    {
      title: 'How does transcription help with SEO?',
      content: `Transcription plays a vital role in enhancing search engine optimization (SEO) efforts. Since search engines rely on text, adding transcripts and captions to audio and video content ensures that it can be indexed and made searchable, thus improving rankings.`,
    },
    {
      title: 'Why is transcription necessary in higher education?',
      content: `Transcription in higher education is essential for accessibility, comprehension, reference, language support, and note-taking assistance. It ensures all students can access materials, aids in understanding complex subjects, serves as valuable study tools, supports non-native English speakers, and provides an alternative to traditional note-taking methods. It also ensures compliance with accessibility regulations such as the ADA and Sections 504 and 508 of the Rehabilitation Act.`,
    },
    {
      title: 'Do Verbalscripts transcribe sermons and focus groups?',
      content: `Yes! At Verbalscripts, we specialize in transcribing a wide range of religious content, including sermons, bible study groups, prayer groups, and religious education classes. Additionally, we have extensive experience in transcribing various types and sizes of focus groups. Please also let us know whether you prefer verbatim or semi-verbatim style for your focus group transcription. Verbatim style captures every utterance, including "um"s, filler words, and false starts. On the other hand, semi-verbatim style tidies it up for improved readability.`,
    },
    {
      title: 'Can Verbalscripts partner with my company?',
      content: `
Absolutely. At Verbalscripts, we are always open to partnering with like-minded companies. Please feel free to reach out to us at info@verbalscripts.com with your ideas on how we can establish a synergistic relationship. We look forward to exploring potential partnerships with you.`,
    },
    {
      title: 'What factors can affect the quality of the transcript?',
      content: `The primary factor that can diminish transcript quality is poor sound quality, which includes excessive background noise, recording process disturbances, and inadequate volume. Additionally, challenges arise from multiple speakers, simultaneous speech, group discussions, fast-paced dialogue, and industry-specific terminology. If you believe any of these factors apply to your recording, please reach out to our support team at info@verbalscripts.com for assistance.`,
    },
    {
      title: 'Do you have medical trained transcriptionists?',
      content: `Yes, we have transcriptionists with extensive work experience in both the legal and medical fields.`,
    },
    {
      title: 'Is Verbalscripts hiring?',
      content: `Yes, we are always looking for freelance experienced scoopists, transcribers and proofreaders. We have an open, trustworthy, and efficient method of paying wages. You will undergo a very thorough vetting procedure so make sure you have experience we need. We might request for some documents as part of our verification procedure. For more details, please check the 'Become a Transcriber' page. Please do not contact about work.`,
    },
    {
      title: 'What are Legal Transcription Services?',
      content: `Legal transcription involves converting spoken words from audio or video files into text format, primarily utilized by law firms, paralegals, court reporters, attorneys, and other legal professionals to accurately transcribe various legal proceedings.`,
    },
    {
      title: 'What types of legal documents are transcribed?',
      content: `Legal transcription services cover a wide range of documents and proceedings, including: Depositions, Testimonies, Pleadings, Subpoenas and Summons, Official court hearings, Interrogations, Sworn statements, Client letters, Licensing Appeals, Arbitration proceedings, Legal briefs, Wiretaps and phone calls, Meetings, Wills/trust documents, Surveillance/investigation reports, Conferences, Memorandums, Attorney dictation, General legal correspondence, and more.`,
    },
    {
      title: 'How is transcription performed?',
      content: `Transcription can be done from various audio sources, including physical tapes, digital files, or videos, by outsourcing these transcription tasks to Verbalscripts Transcription Service, legal and business entities can save valuable time and focus on their core tasks.`,
    },
    {
      title: 'Can you explain the steps involved in your transcription process?',
      content: `Once we receive your audio/video files via a secured server, they are decrypted and allocated to our experienced transcribers. After the transcription process, the files are forwarded to our reviewers/proofreaders for review. After the formatting, the work is evaluated by the project manager, and the final copy is sent to you.`,
    },
    {
      title: 'How do I become a Verbalscripts customer?',
      content: `Getting started with Verbalscripts is easy. Simply reach out to us via email, chat, text, or phone call, and we'll set up your account. You can then begin uploading your audio files securely through our 24x7 online services or discuss your project requirements with us directly.`,
    },
  ];


  const order_placement: FaqsProp[] = [
    {
      title: 'How do I get started?',
      content: `To commence with, visit our website Verbalscripts and navigate to our services, submit a quote request, or contact us via email, Live chat or phone, you can also directly upload your files. Our team will promptly review your request and provide you with a competitive quote. Should you have any inquiries, feel free to contact us. We eagerly anticipate working with you.`,
    },
    {
      title: 'What if my file is really large?',
      content: `We have multiple options for handling large files. Our online platform accepts even huge files, or you can use alternative methods that suit your workflow needs.`,
    },
    {
      title: 'Can I email my audio files to you?',
      content: `Yes, you can utilize any preferred method to send your files to us, whether it's through our secure portal, Email, OneDrive, Dropbox, Sync, Box, or any other means.`,
    },
    {
      title: 'Can I scan and email my handwritten notes and text them to you?',
      content: `Absolutely. Your files are secure with Verbalscripts. We accept handwritten notes and text! Easily transfer your files securely through our Upload Media feature on our website. Once uploaded, we'll promptly be notified, and one of our sales representatives will reach out to assist you.`,
    },
    {
      title: 'What is the status of my order?',
      content: `For updates on your order's status, reach out to your sales representative via email or phone. They'll let you with the latest information regarding your order's progress.`,
    },
    {
      title: 'Is it possible to add additional information or instructions to files?',
      content: `Yes, users can include additional comments when submitting a file, either by typing notes or attaching relevant files for enhanced context. We encourage this practice as more context leads to more accurate technical output.`,
    },
    {
      title: 'Is there a minimum duration for files?',
      content: `No, we accept files of all lengths. However, for extensive projects, we can offer discounted rates.`,
    },
    {
      title: 'What if my project has unique transcription requirements?',
      content: `Simply reach out to us and explain your needs. If we can accommodate your request, we will do so. If not, we will provide an explanation and assist you in finding a suitable solution.`,
    },
    {
      title: 'What if I have a project that needs to be completed over the weekend?',
      content: `We can complete weekend projects with advance notice. Please contact your point of contact via phone or email to inform us of your weekend project, ensuring that we have the necessary resources available to meet your deadline.`,
    },
    {
      title: 'What if I have a project that needs to be completed overnight?',
      content: `Please contact us to discuss your overnight project. The feasibility of completing it overnight will depend on various factors, including the volume of work, and our current workload.`,
    },

    {
      title: 'Do you accept links?',
      content: `Yes, we accept links to your files from various sources such as YouTube, your organization's website, or any other platform. You can send the link directly to info@verbalscripts.com. We do not charge any conversion fees.`,
    },
    {
      title: 'What kind of work do you transcribe?',
      content: `We handle a wide range of transcription work, including interviews, dictations, business meetings, conference calls, focus groups, press briefings, lectures, legal depositions, radio shows, video shows, panel discussions, sermons, seminars, and more. Our transcription services cater to professionals across various industries, including professors, teachers, students, insurance professionals, financial professionals, doctors, psychiatrists, preachers, market researchers, corporate meetings, lawyers, and more.`,
    },
    {
      title: 'What is the comments box for in the Quick Get a Quote and Order form?',
      content: `It is designed for you to provide more information about your project. You can include the speakers’ names, technical jargon, acronyms, or any specific instructions you want the transcriptionist to follow. Additionally, you can add a link to the original video/audio or any reference websites.<br/><br/>
If there's anything you do not want the transcriptionist to include, you can specify it in this box as well. Please note that the quality of these notes directly impacts the final transcript quality. The more specific your instructions are, the less time you will spend editing or correcting the transcripts once you receive them. Moreover, detailed instructions eliminate the need for rework by us and resubmission by you.
`,
    },
    {
      title: 'Can I move my order from normal to Rush or Super Rush to speed up?',
      content: `Yes, you can escalate your transcription order to speed up the turnaround even when your project is under process. Please send us an email, chat or call us to help our customer support personnel take you through the steps.`,
    },
    {
      title: 'What is the quickest way to receive a job estimate?',
      content: `For a fast estimate, visit our <a
              class='relative border-b border-indigo-600 group  py-0.5 px-1.5 text-indigo-600'
              href='/get-a-quote'
            >
              <span class='font-semibold'>Get a Quote</span>
              <span class='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all'></span>
            </a> or 
            <a
              class='relative border-b border-indigo-600 group  py-0.5 px-1.5 text-indigo-600'
              href='/contact-us'
            >
              <span class='font-semibold'>Contact Us page</span>
              <span class='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all'></span>
            </a>
             or call us at 
              <a
              class='relative border-b border-indigo-600 group  py-0.5 px-1.5 text-indigo-600'
              href='tel:+1 (727) 966-8531'
            >
              <span class='font-semibold'>+1 (727) 966-8531</span>
              <span class='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all'></span>
            </a>
             . Provide details of your project, and we'll promptly provide a price quote.`,
    },
    {
      title: 'I am working with a client who requires a unique transcript template/format. Do you accommodate such requests?',
      content: `Certainly! Simply email us with your template specifications, and we'll ensure your transcripts meet your exact requirements.`,
    },
    {
      title: 'What if I don\'t need your services very often?',
      content: `No problem! Verbalscripts offers on-demand transcription and translation services, allowing you to pay as you go, whether you require our services occasionally or regularly.`,
    },
    {
      title: 'My audio file pertains to a subject area not listed on your website. Will you still transcribe it?',
      content: `Yes! With our extensive transcription experience and a team of subject-matter experts, we cover almost all subject areas. Even if your subject isn't listed on our website, we likely have an expert suitable for your needs. Contact us to learn more.`,
    },
  ]

  const pricing: FaqsProp[] = [
    {
      title:
        'Why are your prices much lower than other transcription services? ',
      content: `Clients often wonder how Verbalscripts can offer transcription services at a much lower than our competitors while maintaining quality and reliability. Here's the straightforward explanation:<br/><br/>We operate efficiently, we prioritize building long-term relationships with our clients. Unlike some competitors who view clients as one-time transactions, we value customer satisfaction and rely on referrals for continued business success. 
Therefore, we do not engage in price gouging. Transparency is key to our business model. There are no hidden tricks or bait-and-switch tactics. Our commitment to value-
Customers like you ensures that we will remain in business for many years to come.

      `,
    },
    {
      title: 'How do Verbalscripts billing procedures work?',
      content: `We offer flexible billing options. Depending on your preference, we can bill after each file or on a biweekly basis. Most recurring clients opt for monthly billing for the previous month's work, while one-time or less consistent clients may choose upfront or per-file billing.`,
    },
    {
      title: 'How much does transcription cost?',
      content: `Verbalscripts offers competitive pricing that is lower than many of our competitors. We guarantee to meet your accuracy requirements at affordable rates and can even customize pricing based on your specific needs. Feel free to contact us with your requirements and budget, and we'll work with you to find the best solution.`,
    },

    {
      title: 'What payment options are available?',
      content: `We offer various payment methods including <b>direct deposits</b>, <b>wire transfers</b>, <b>PayPal</b>, <b>Payoneer</b>, <b>Wise</b>, <b>Zelle</b>, <b>Venmo</b> and other online payment options which we are currently in the process of integrating.`,
    },
    {
      title:
        'Are there any additional fees or charges besides the agreed rates?',
      content: `No, you only incur charges for the work produced either per page or per minute of the agreed rates. There are no extra fees, charges, or costs involved. This includes no overtime fees, rush fees, or minimum usage requirements.`,
    },
    {
      title:
        'Is there a fee for submitting my work after business hours or on holidays / weekends?',
      content: `No! You can submit your work any time, any day of the year, and expect to receive it at the agreed TNT. Pricing remains the same!`,
    },
    {
      title:
        "Can I cancel my order and get a refund if I've already paid for transcription?",
      content: `Yes, you can cancel your order at any time before the scheduled delivery date if you've already made payment. Refunds are processed within 1 business day. The refund amount is determined by the progress made on the transcription or translation. If the progress is at 0%, you will receive a full refund. However, as progress increases, the refund amount decreases accordingly.`,
    },
    {
      title: 'Do you offer refunds after the transcripts has been delivered?',
      content: `No, we do not offer refunds after the transcripts has been delivered. However, we provide free re-reviews once the transcription has been delivered to ensure your satisfaction.`,
    },
    {
      title: 'Is price same for audio and video transcription?',
      content: `Yes. We treat audio and video files the same way.`,
    },
    {
      title:
        'Is there any option to make the payment after the transcripts are delivered?',
      content: `Yes, customers can sign the postpaid agreement to make the payment after delivery.`,
    },
  ];

  const topics = [
    {
      id: 'all',
      title: 'All Questions',
      items: [
        {
          id: 'service',
          title: 'Service Delivery',
          items: service_faqs,
        },
        {
          id: 'Human',
          title: 'Human Transcription',
          items: human_transcripts,
        },
        {
          id: 'pricing',
          title: 'Pricing & Payment',
          items: pricing,
        },
        {
          id: 'security',
          title: 'Security & Confidentiality',
          items: security,
        },
        {
          id: 'career',
          title: 'Career and General Questions',
          items: career_and_general,
        },
        {
          id: 'order_placement',
          title: 'Order Placement',
          items: order_placement,
        },
      ],
    },
    {
      id: 'service',
      title: 'Service Delivery',
      items: service_faqs,
    },
    {
      id: 'Human',
      title: 'Human Transcription',
      items: human_transcripts,
    },
    {
      id: 'pricing',
      title: 'Pricing & Payment',
      items: pricing,
    },
    {
      id: 'security',
      title: 'Security & Confidentiality',
      items: security,
    },
    {
      id: 'career',
      title: 'Career and General Questions',
      items: career_and_general,
    },
    {
      id: 'order_placement',
      title: 'Order Placement',
      items: order_placement,
    },
  ];

  const [activeTab, setActiveTab] = useState<string>('all');

  const displayFaqsTopic = (id: string) =>
    topics.find((topic) => topic.id == id);

  return (
    <div className='flex flex-wrap lg:flex-nowrap items-start space-y-16 lg:space-x-6 lg:space-y-0 px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='w-full xl:w-[40%] lg:sticky top-[12%]'>
        <h2 className='text-xl font-bold leading-7 capitalize footer-title'>
          What are Your Frequently Asked Questions?
        </h2>
        <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-800  00 section-title'>
          Questions ?
        </p>

        <p className='mt-2 text-md lg:text-lg leading-7   text-left text-gray-600  00 section-title'>
          If you have any question we have answers for you here. Incase we don
          {"'"}t please feel free to reach us here{' '}
          <a
            className='footer-title'
            href='mailto:support@verbalscripts.com?subject=Help Me!'
          >
            support@verbalscripts.com
          </a>
        </p>
        {/* faqs menu */}

        <div className='flex flex-col my-5'>
          {topics.map((faq, index) => (
            <a
              href='#faq-content-tab'
              onClick={() => setActiveTab(faq.id)}
              key={index}
              className={classNames(
                'py-3 px-10 font-bold transition-all duration-100 bg-gray-200 capitalize text-left rounded-md mb-2',

                faq.id == activeTab
                  ? 'faqs-tab-active-button text-white'
                  : ' text-gray-600 ',
              )}
            >
              {faq.title}
            </a>
          ))}
        </div>
      </div>
      <div
        id='faq-content-tab'
        className='
    lg:order-2 lg:min-w-[40rem] xl:min-w-[50rem] w-full'
      >
        {activeTab && activeTab == 'all'
          ? displayFaqsTopic('all')?.items.map((faq_topic) => (
              <div key={faq_topic.id} className='mb-3'>
                <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
                  <p className='mt-2 text-3xl text-left font-bold  section-title text-gray-900 md:text-4xl'>
                    {faq_topic.title}
                  </p>
                </div>

                <div className='md:py-10 md:px-6 mt-5'>
                  {/* @ts-ignore */}
                  <Faqs faqs={faq_topic.items || []} />
                </div>
              </div>
            ))
          : activeTab && (
              <div key={displayFaqsTopic(activeTab)?.id} className='mb-3'>
                <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
                  <p className='mt-2 text-3xl text-left font-bold  section-title text-gray-900 md:text-4xl'>
                    {displayFaqsTopic(activeTab)?.title}
                  </p>
                </div>

                <div className='md:py-10 md:px-6 mt-5'>
                  {/* @ts-ignore */}
                  <Faqs faqs={displayFaqsTopic(activeTab)?.items || []} />
                </div>
              </div>
            )}
      </div>
    </div>
  );
}
