import { Metadata } from 'next';
import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  title: 'Dashboard | Home',
};

export default function Page() {
  return (
    <div className='min-h-screen'>
      <PageWrapper />
    </div>
  );
}
