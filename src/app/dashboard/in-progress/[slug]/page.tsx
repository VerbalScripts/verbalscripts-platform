import { Metadata } from 'next';
import DetailsWrapper from './components/DetailsWrapper';

export const metadata: Metadata = {
  title: 'Dashboard | In Progress',
};

interface Props {
  params: { slug: string };
}

export default function Page({ params: { slug } }: Props) {
  return (
    <div className='bg-white dark:bg-zinc-800 min-h-screen'>
      <DetailsWrapper slug={slug} />
    </div>
  );
}
