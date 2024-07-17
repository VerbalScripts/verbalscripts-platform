import { Metadata } from 'next';
import InProgressWrapper from './components/InProgressWrapper';

export const metadata: Metadata = {
  title: 'Dashboard | In Progress',
};

export default function Page() {
  return (
    <div className='bg-white dark:bg-zinc-800 min-h-screen'>
      <InProgressWrapper />
    </div>
  );
}
