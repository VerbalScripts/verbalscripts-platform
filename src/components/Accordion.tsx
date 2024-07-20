
import { useState, useEffect } from 'react';

interface AccordionpProps {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
};

export default function Accordion({
  children,
  title,
  id,
  active = false,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, [active]);

  return (
    <div className='py-2'>
      <h2>
        <button
          className='flex items-start justify-between   space-x-4 md:space-x-7 w-full text-left font-semibold py-2 px-5'
          onClick={() => setAccordionOpen(!accordionOpen)}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span className='text-gray-700 dark:text-white text-md md:text-xl font-semibold'>
            {title}
          </span>
          <span className=' h-9 w-9 flex -mt-1  justify-center items-center rounded-full'>
            <svg
              className='fill-orange-500 shrink-0'
              width='16'
              height='16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                y='7'
                width='16'
                height='2'
                rx='1'
                className={`transform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`}
              />
              <rect
                y='7'
                width='16'
                height='2'
                rx='1'
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`}
              />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role='region'
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-lg text-slate-700 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className='overflow-hidden'>
          <div className='pb-3'>{children}</div>
        </div>
      </div>
    </div>
  );
}
