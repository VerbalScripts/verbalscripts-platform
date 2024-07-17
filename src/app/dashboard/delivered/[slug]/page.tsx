import { Metadata } from 'next';
import DeliveredWrapper from './components/DeliveredWrapper';

export const metadata: Metadata = {
  title: 'Dashboard | Delivered',
};

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const orders = await fetch(
    `https://1eca-105-161-175-143.ngrok-free.app/orders/frontend?status=completed`,
  ).then((res) => res.json());

  return orders.map((order) => ({
    slug: order.slug,
  }));
}

export default function Page({ params }: Props) {
  return (
    <div className='bg-white dark:bg-zinc-800 min-h-screen'>
      <DeliveredWrapper slug={params.slug} />
    </div>
  );
}
