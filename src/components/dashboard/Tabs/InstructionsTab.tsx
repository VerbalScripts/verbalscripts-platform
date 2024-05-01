import React from 'react';

interface InstructionsTabProps {
  instructions: string;
  setInstructions: (arg0: string) => void;
}

export default function InstructionsTab({
  instructions,
  setInstructions,
}: InstructionsTabProps) {
  const updateInstructions = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const content = (event as unknown as HTMLFormElement).target.value;
    setInstructions(content ? content : '');
  };

  return (
    <section className='flex flex-col gap-10  divide-gray-400'>
      <div className=''>
        <label htmlFor='message' className='flex flex-col leading-6 '>
          <span className='font-semibold text-lg text-gray-700'>
            Instructions
          </span>
          <span className='text-md text-gray-600'>
            Please enter special instructions, terms, acronyms, keywords, names
            of places, speaker names, etc.
          </span>
        </label>
        <div className='mt-2.5'>
          <textarea
            name='message'
            id='message'
            rows={4}
            onKeyDown={(event) => updateInstructions(event)}
            defaultValue={instructions}
            className='block w-full rounded-md border-0 px-3.5 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
    </section>
  );
}
