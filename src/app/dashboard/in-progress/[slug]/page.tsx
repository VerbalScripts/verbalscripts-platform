import { Metadata } from 'next';
import DetailsWrapper from './components/DetailsWrapper';

export const metadata: Metadata = {
  title: 'Dashboard | In Progress',
};

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  // Define the possible values for [type]
  const orders = await fetch(
    `https://1eca-105-161-175-143.ngrok-free.app/orders/frontend?status=in-progress`,
  ).then((res) => res.json());

  return orders.map((order) => ({
    slug: order.slug,
  }));
}

export default function Page({ params }: Props) {
  return (
    <div className='bg-white dark:bg-zinc-800 min-h-screen'>
      <DetailsWrapper slug={params.slug} />
    </div>
  );
}
