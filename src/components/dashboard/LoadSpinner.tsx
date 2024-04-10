import { Spinner } from 'flowbite-react';

export default function LoadSpinner() {
  return (
    <div className='flex flex-col items-center py-10  md:py-36'>
      <Spinner
        color={'warning'}
        aria-label='Default status example'
        size={'xl'}
      />
    </div>
  );
}
