import { Metadata } from 'next';
import DeliveredWrapper from './components/DeliveredWrapper';

export const metadata: Metadata = {
  title: 'Dashboard | Delivered Transcripts',
};

export default function Page() {
  return (
    <div className='bg-white dark:bg-zinc-800 min-h-screen'>
      <DeliveredWrapper />
    </div>
  );
}
