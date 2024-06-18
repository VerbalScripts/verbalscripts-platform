/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import LoadSpinner from '@/components/dashboard/LoadSpinner';

// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
import SystemProgressUpload from '@/components/dashboard/SystemProgressUpload';
import AxiosProxy from '@/utils/AxiosProxy';
import {
  ArrowDownOnSquareIcon,
  ArrowPathIcon,
  CheckBadgeIcon,
  ClockIcon,
  ExclamationCircleIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';
import { ArrowLeftIcon, GiftIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
import { classNames } from '@/utils/classNames';
import CancelOrder from '@/components/modals/CancelOrder';
import ComponentSpinner from '@/components/ComponentSpinner';
import VideoPlayer from '@/components/modals/VideoPlayer';
import SystemProgressPopup from '@/components/dashboard/SystemProgressPopup';
import { Table } from 'flowbite-react';
import moment from 'moment';
import { DurationFromSeconds } from '@/utils/DurationFromSeconds';
import { bytesToMB } from '@/utils/bytesToMb';
import { useSetRecoilState } from 'recoil';
import { systemProcessStatus } from '@/store/features/fileUpload';

interface PageProps {
  params: { slug: string };
}

type OrderStatus =
  | 'Received'
  | 'assigned'
  | 'unassigned'
  | 'completed'
  | 'cancelled';

export default function Page({ params: { slug } }: PageProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [processLoad, setProcessLoad] = useState(false);
  const [order, setOrder] = useState<InprogressOrder>();
  const [open, setOpen] = useState(false);
  const [statusOrder, setOrderStatus] = useState<OrderStatus[]>([
    'Received',
    'unassigned',
    'assigned',
    'completed',
  ]);

  const [position, setPosition] = useState(0);

  const instructionsRef = useRef(null);
  const [openPlayer, setOpenPlayer] = useState(false);
  const [videoId, setVideoId] = useState('');

  const setSystemProgressContent = useSetRecoilState(systemProcessStatus);


  useEffect(() => {
    if (videoId != '') {
      setOpenPlayer(true);
    }
  }, [videoId]);

  const fetchOrderInfo = async () => {
    try {
      const response = await AxiosProxy.get(`/orders/client/${slug}`);

      if (response.status == 200) {
        const order: InprogressOrder = response.data.order;
        setOrder(order);
        if (order.orderStatus == 'cancelled') {
          setOrderStatus((prev) => [
            ...prev.map((pre) => {
              if (pre == 'assigned') {
                return 'cancelled';
              }
              return pre;
            }),
          ]);
        }
      }
    } catch (err) {
      throw new Error('Network Problem');
    } finally {
      setLoading(false);
    }
  };

  const updateOrder = async () => {
    try {
      if (instructionsRef == null) return false;

      // @ts-ignore
      const instructions = instructionsRef?.current.value;

      setProcessLoad(true);

      await AxiosProxy.patch(`/orders/client/${slug}`, {
        order: { configuration: { instructions } },
      });

      setSystemProgressContent({
        show: true,
        message: `User updated success`,
        title: 'Account Update',
        success: true,
      });

    } catch (err) {
      // throw new Error('Network Problem');
      console.log(err);
    } finally {
      setProcessLoad(false);
    }
  };

  const reload = async () => {
    await fetchOrderInfo();
  };

  useEffect(() => {
    if (order != null) {
      setPosition(() =>
        statusOrder.findIndex((rorder) => rorder == order.orderStatus),
      );
    }
  }, [statusOrder]);

  useEffect(() => {
    if (slug) {
      fetchOrderInfo();
    }
  }, [slug]);

  return (
    <>
      <title>Dashboard | # {slug}</title>
      <div className='bg-white dark:bg-zinc-800 min-h-screen'>
        {/* system progress */}
        <SystemProgressUpload />
        <SystemProgressPopup />

        <VideoPlayer
          open={openPlayer}
          setOpen={setOpenPlayer}
          fileId={videoId}
          resetPlayer={setVideoId}
        />

        {/* cancel order  modal*/}
        <CancelOrder open={open} setOpen={setOpen} reload={reload} orderId={(order && order!.orderId) || slug} id={slug} />

        {loading ? (
          <LoadSpinner />
        ) : (
          <div className='px-6  md:px-16 xl:px-16  py-3'>
            {/* back button */}
            <div className='flex items-center space-x-3'>
              <button
                onClick={() => router.back()}
                className='w-8 h-8 rounded-full cursor-pointer'
              >
                <ArrowLeftIcon className='w-7 text-gray-500 dark:text-gray-200' />
              </button>
              <span className='font-semibold text-gray-500 dark:text-gray-200'>
                Orders
              </span>
              <span className='font-semibold text-gray-500 dark:text-gray-200'>
                /
              </span>
              <span className='font-semibold text-gray-500 dark:text-gray-200'>
                # {order?.orderId}
              </span>
            </div>
            <div className='py-5 flex justify-between items-start space-x-5'>
              <div className='flex flex-col space-y-2'>
                <div className='flex items-center space-x-3'>
                  <span className='font-semibold text-gray-800 dark:text-white text-md lg:text-xl capitalize'>
                    # {order?.orderId}
                  </span>
                  <span
                    className={classNames(
                      '  rounded-md uppercase px-3 text-sm lg:text-md font-semibold py-1.5',
                      order?.orderStatus == 'unassigned'
                        ? 'bg-orange-100 text-orange-500'
                        : order?.orderStatus == 'assigned'
                          ? 'bg-indigo-100 text-indigo-500'
                          : order?.orderStatus == 'completed'
                            ? 'bg-green-100 text-green-500'
                            : 'bg-red-100 text-red-500',
                    )}
                  >
                    {order?.orderStatus}
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <span className='inline-block font-semibold text-gray-500 dark:text-gray-200'>
                    Tracking Id:{' '}
                  </span>

                  <div className='w-full max-w-[16rem]'>
                    <div className='relative'>
                      <label
                        htmlFor='npm-install-copy-button'
                        className='sr-only'
                      >
                        Label
                      </label>
                      <input
                        id='npm-install-copy-button'
                        type='text'
                        className='col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        value={order?.id}
                        readOnly
                        disabled
                      />
                      <button
                        data-copy-to-clipboard-target='npm-install-copy-button'
                        data-tooltip-target='tooltip-copy-npm-install-copy-button'
                        className='absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center'
                      >
                        <span id='default-icon'>
                          <svg
                            className='w-3.5 h-3.5'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            viewBox='0 0 18 20'
                          >
                            <path d='M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z' />
                          </svg>
                        </span>
                        <span
                          id='success-icon'
                          className='hidden inline-flex items-center'
                        >
                          <svg
                            className='w-3.5 h-3.5 text-blue-700 dark:text-blue-500'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 16 12'
                          >
                            <path
                              stroke='currentColor'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              stroke-width='2'
                              d='M1 5.917 5.724 10.5 15 1.5'
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        id='tooltip-copy-npm-install-copy-button'
                        role='tooltip'
                        className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
                      >
                        <span id='default-tooltip-message'>
                          Copy to clipboard
                        </span>
                        <span id='success-tooltip-message' className='hidden'>
                          Copied!
                        </span>
                        <div className='tooltip-arrow' data-popper-arrow></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type='button'
                  onClick={() => setOpen(true)}
                  className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2'
                >
                  <svg
                    aria-hidden='true'
                    className='w-6 h-5 me-2 -ms-1'
                    viewBox='0 0 2405 2501'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {' '}
                    <g clip-path='url(#clip0_1512_1323)'>
                      {' '}
                      <path
                        d='M2278.79 1730.86L2133.62 2221.69L1848.64 2143.76L2278.79 1730.86Z'
                        fill='#E4761B'
                        stroke='#E4761B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1848.64 2143.76L2123.51 1767.15L2278.79 1730.86L1848.64 2143.76Z'
                        fill='#E4761B'
                        stroke='#E4761B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M2065.2 1360.79L2278.79 1730.86L2123.51 1767.15L2065.2 1360.79ZM2065.2 1360.79L2202.64 1265.6L2278.79 1730.86L2065.2 1360.79Z'
                        fill='#F6851B'
                        stroke='#F6851B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1890.29 1081.17L2285.34 919.338L2265.7 1007.99L1890.29 1081.17ZM2253.21 1114.48L1890.29 1081.17L2265.7 1007.99L2253.21 1114.48Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M2253.21 1114.48L2202.64 1265.6L1890.29 1081.17L2253.21 1114.48ZM2332.34 956.82L2265.7 1007.99L2285.34 919.338L2332.34 956.82ZM2253.21 1114.48L2265.7 1007.99L2318.65 1052.01L2253.21 1114.48Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1542.24 2024.17L1641 2055.7L1848.64 2143.75L1542.24 2024.17Z'
                        fill='#E2761B'
                        stroke='#E2761B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M2202.64 1265.6L2253.21 1114.48L2296.64 1147.8L2202.64 1265.6ZM2202.64 1265.6L1792.71 1130.55L1890.29 1081.17L2202.64 1265.6Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1987.86 617.696L1890.29 1081.17L1792.71 1130.55L1987.86 617.696Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M2285.34 919.338L1890.29 1081.17L1987.86 617.696L2285.34 919.338Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1987.86 617.696L2400.16 570.1L2285.34 919.338L1987.86 617.696Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M2202.64 1265.6L2065.2 1360.79L1792.71 1130.55L2202.64 1265.6Z'
                        fill='#F6851B'
                        stroke='#F6851B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M2382.31 236.33L2400.16 570.1L1987.86 617.696L2382.31 236.33Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M2382.31 236.33L1558.3 835.45L1547.59 429.095L2382.31 236.33Z'
                        fill='#E2761B'
                        stroke='#E2761B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M934.789 380.309L1547.59 429.095L1558.3 835.449L934.789 380.309Z'
                        fill='#F6851B'
                        stroke='#F6851B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1792.71 1130.55L1558.3 835.449L1987.86 617.696L1792.71 1130.55Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1792.71 1130.55L2065.2 1360.79L1682.65 1403.04L1792.71 1130.55Z'
                        fill='#E4761B'
                        stroke='#E4761B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1682.65 1403.04L1558.3 835.449L1792.71 1130.55L1682.65 1403.04Z'
                        fill='#E4761B'
                        stroke='#E4761B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1987.86 617.696L1558.3 835.45L2382.31 236.33L1987.86 617.696Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M940.144 2134.24L1134.69 2337.11L869.939 2096.16L940.144 2134.24Z'
                        fill='#C0AD9E'
                        stroke='#C0AD9E'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1848.64 2143.75L1940.86 1793.33L2123.51 1767.15L1848.64 2143.75Z'
                        fill='#CD6116'
                        stroke='#CD6116'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M151.234 1157.92L487.978 803.917L194.666 1115.67L151.234 1157.92Z'
                        fill='#E2761B'
                        stroke='#E2761B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M2123.51 1767.15L1940.86 1793.33L2065.2 1360.79L2123.51 1767.15ZM1558.3 835.449L1230.48 824.74L934.789 380.309L1558.3 835.449Z'
                        fill='#F6851B'
                        stroke='#F6851B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M2065.2 1360.79L1940.86 1793.33L1930.74 1582.12L2065.2 1360.79Z'
                        fill='#E4751F'
                        stroke='#E4751F'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1682.65 1403.04L2065.2 1360.79L1930.74 1582.12L1682.65 1403.04Z'
                        fill='#CD6116'
                        stroke='#CD6116'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1230.48 824.74L1558.3 835.449L1682.65 1403.04L1230.48 824.74Z'
                        fill='#F6851B'
                        stroke='#F6851B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1230.48 824.74L345.784 6.08252L934.79 380.309L1230.48 824.74ZM934.195 2258.58L165.513 2496.56L12.0146 1910.53L934.195 2258.58Z'
                        fill='#E4761B'
                        stroke='#E4761B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M265.465 1304.27L555.803 1076.41L799.14 1132.93L265.465 1304.27Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M799.139 1132.93L555.803 1076.41L686.098 538.567L799.139 1132.93Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M194.666 1115.67L555.803 1076.41L265.465 1304.27L194.666 1115.67Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1930.74 1582.12L1780.81 1506.56L1682.65 1403.04L1930.74 1582.12Z'
                        fill='#CD6116'
                        stroke='#CD6116'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M194.666 1115.67L169.083 980.618L555.803 1076.41L194.666 1115.67Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1749.88 1676.72L1780.81 1506.56L1930.74 1582.12L1749.88 1676.72Z'
                        fill='#233447'
                        stroke='#233447'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1940.86 1793.33L1749.88 1676.72L1930.74 1582.12L1940.86 1793.33Z'
                        fill='#F6851B'
                        stroke='#F6851B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M555.803 1076.41L169.082 980.618L137.55 866.982L555.803 1076.41ZM686.098 538.567L555.803 1076.41L137.55 866.982L686.098 538.567ZM686.098 538.567L1230.48 824.74L799.139 1132.93L686.098 538.567Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M799.14 1132.93L1230.48 824.74L1422.65 1411.96L799.14 1132.93ZM1422.65 1411.96L826.508 1399.47L799.14 1132.93L1422.65 1411.96Z'
                        fill='#E4761B'
                        stroke='#E4761B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M265.465 1304.27L799.14 1132.93L826.508 1399.47L265.465 1304.27ZM1682.65 1403.04L1422.65 1411.96L1230.48 824.74L1682.65 1403.04Z'
                        fill='#F6851B'
                        stroke='#F6851B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1780.81 1506.56L1749.88 1676.72L1682.65 1403.04L1780.81 1506.56Z'
                        fill='#CD6116'
                        stroke='#CD6116'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M345.784 6.08252L1230.48 824.74L686.098 538.567L345.784 6.08252Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M12.0146 1910.53L758.088 1879.59L934.195 2258.58L12.0146 1910.53Z'
                        fill='#E4761B'
                        stroke='#E4761B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M934.194 2258.58L758.088 1879.59L1124.58 1861.75L934.194 2258.58Z'
                        fill='#CD6116'
                        stroke='#CD6116'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1749.88 1676.72L1940.86 1793.33L2046.16 2041.42L1749.88 1676.72ZM826.508 1399.47L12.0146 1910.53L265.465 1304.27L826.508 1399.47ZM758.088 1879.59L12.0146 1910.53L826.508 1399.47L758.088 1879.59ZM1682.65 1403.04L1731.43 1580.33L1495.83 1594.02L1682.65 1403.04ZM1495.83 1594.02L1422.65 1411.96L1682.65 1403.04L1495.83 1594.02Z'
                        fill='#F6851B'
                        stroke='#F6851B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1134.69 2337.11L934.194 2258.58L1631.48 2375.79L1134.69 2337.11Z'
                        fill='#C0AD9E'
                        stroke='#C0AD9E'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M265.465 1304.27L151.234 1157.91L194.666 1115.67L265.465 1304.27Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1710.61 2288.92L1631.48 2375.79L934.194 2258.58L1710.61 2288.92Z'
                        fill='#D7C1B3'
                        stroke='#D7C1B3'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1748.09 2075.93L934.194 2258.58L1124.58 1861.75L1748.09 2075.93Z'
                        fill='#E4761B'
                        stroke='#E4761B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M934.194 2258.58L1748.09 2075.93L1710.61 2288.92L934.194 2258.58Z'
                        fill='#D7C1B3'
                        stroke='#D7C1B3'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M137.55 866.982L110.777 409.462L686.098 538.567L137.55 866.982ZM194.665 1115.67L115.536 1035.35L169.082 980.618L194.665 1115.67Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1289.38 1529.76L1422.65 1411.96L1403.61 1699.92L1289.38 1529.76Z'
                        fill='#CD6116'
                        stroke='#CD6116'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1422.65 1411.96L1289.38 1529.76L1095.43 1630.31L1422.65 1411.96Z'
                        fill='#CD6116'
                        stroke='#CD6116'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M2046.16 2041.42L2009.87 2014.65L1749.88 1676.72L2046.16 2041.42Z'
                        fill='#F6851B'
                        stroke='#F6851B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1095.43 1630.31L826.508 1399.47L1422.65 1411.96L1095.43 1630.31Z'
                        fill='#CD6116'
                        stroke='#CD6116'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1403.61 1699.92L1422.65 1411.96L1495.83 1594.02L1403.61 1699.92Z'
                        fill='#E4751F'
                        stroke='#E4751F'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M89.3589 912.199L137.55 866.982L169.083 980.618L89.3589 912.199Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1403.61 1699.92L1095.43 1630.31L1289.38 1529.76L1403.61 1699.92Z'
                        fill='#233447'
                        stroke='#233447'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M686.098 538.567L110.777 409.462L345.784 6.08252L686.098 538.567Z'
                        fill='#763D16'
                        stroke='#763D16'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1631.48 2375.79L1664.2 2465.03L1134.69 2337.12L1631.48 2375.79Z'
                        fill='#C0AD9E'
                        stroke='#C0AD9E'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1124.58 1861.75L1095.43 1630.31L1403.61 1699.92L1124.58 1861.75Z'
                        fill='#F6851B'
                        stroke='#F6851B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M826.508 1399.47L1095.43 1630.31L1124.58 1861.75L826.508 1399.47Z'
                        fill='#E4751F'
                        stroke='#E4751F'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1495.83 1594.02L1731.43 1580.33L2009.87 2014.65L1495.83 1594.02ZM826.508 1399.47L1124.58 1861.75L758.088 1879.59L826.508 1399.47Z'
                        fill='#F6851B'
                        stroke='#F6851B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1495.83 1594.02L1788.55 2039.64L1403.61 1699.92L1495.83 1594.02Z'
                        fill='#E4751F'
                        stroke='#E4751F'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1403.61 1699.92L1788.55 2039.64L1748.09 2075.93L1403.61 1699.92Z'
                        fill='#F6851B'
                        stroke='#F6851B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1748.09 2075.93L1124.58 1861.75L1403.61 1699.92L1748.09 2075.93ZM2009.87 2014.65L1788.55 2039.64L1495.83 1594.02L2009.87 2014.65Z'
                        fill='#F6851B'
                        stroke='#F6851B'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M2068.18 2224.07L1972.99 2415.05L1664.2 2465.03L2068.18 2224.07ZM1664.2 2465.03L1631.48 2375.79L1710.61 2288.92L1664.2 2465.03Z'
                        fill='#C0AD9E'
                        stroke='#C0AD9E'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1710.61 2288.92L1768.92 2265.72L1664.2 2465.03L1710.61 2288.92ZM1664.2 2465.03L1768.92 2265.72L2068.18 2224.07L1664.2 2465.03Z'
                        fill='#C0AD9E'
                        stroke='#C0AD9E'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M2009.87 2014.65L2083.05 2059.27L1860.54 2086.04L2009.87 2014.65Z'
                        fill='#161616'
                        stroke='#161616'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1860.54 2086.04L1788.55 2039.64L2009.87 2014.65L1860.54 2086.04ZM1834.96 2121.15L2105.66 2088.42L2068.18 2224.07L1834.96 2121.15Z'
                        fill='#161616'
                        stroke='#161616'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M2068.18 2224.07L1768.92 2265.72L1834.96 2121.15L2068.18 2224.07ZM1768.92 2265.72L1710.61 2288.92L1748.09 2075.93L1768.92 2265.72ZM1748.09 2075.93L1788.55 2039.64L1860.54 2086.04L1748.09 2075.93ZM2083.05 2059.27L2105.66 2088.42L1834.96 2121.15L2083.05 2059.27Z'
                        fill='#161616'
                        stroke='#161616'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1834.96 2121.15L1860.54 2086.04L2083.05 2059.27L1834.96 2121.15ZM1748.09 2075.93L1834.96 2121.15L1768.92 2265.72L1748.09 2075.93Z'
                        fill='#161616'
                        stroke='#161616'
                        stroke-width='5.94955'
                      />{' '}
                      <path
                        d='M1860.54 2086.04L1834.96 2121.15L1748.09 2075.93L1860.54 2086.04Z'
                        fill='#161616'
                        stroke='#161616'
                        stroke-width='5.94955'
                      />{' '}
                    </g>{' '}
                    <defs>
                      {' '}
                      <clipPath id='clip0_1512_1323'>
                        {' '}
                        <rect
                          width='2404'
                          height='2500'
                          fill='white'
                          transform='translate(0.519043 0.132812)'
                        />{' '}
                      </clipPath>{' '}
                    </defs>{' '}
                  </svg>
                  {order?.orderStatus == 'cancelled'
                    ? 'Restore Order'
                    : 'Cancel Order'}
                </button>
              </div>
            </div>
            <div className=''>
              <div className='p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <ol className='flex items-center w-full'>
                  {statusOrder.map((rorder, index) => (
                    <li
                      key={index}
                      className={classNames(
                        index == statusOrder.length - 1
                          ? ' '
                          : 'w-full flex flex-col',
                      )}
                    >
                      <div
                        className={classNames(
                          'flex   dark:text-blue-500 ',
                          index == statusOrder.length - 1
                            ? ''
                            : "w-full items-center after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block ",
                          index <= position
                            ? 'after:border-green-200 dark:after:border-green-200'
                            : 'after:border-gray-300 dark:after:border-gray-300',
                        )}
                      >
                        <span
                          className={classNames(
                            'flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12  shrink-0',
                            index <= position
                              ? 'bg-green-200 dark:bg-green-200'
                              : 'bg-gray-300 dark:bg-gray-300',
                          )}
                        >
                          {index <= position ? (
                            <CheckBadgeIcon className='w-6 text-green-600 dark:dark:text-gray-600' />
                          ) : statusOrder[index] == 'unassigned' ? (
                            <ClockIcon className='w-6 text-gray-700 dark:text-gray-600' />
                          ) : statusOrder[index] == 'assigned' ? (
                            <ArrowPathIcon className='w-6 text-gray-700 dark:text-gray-600' />
                          ) : statusOrder[index] == 'completed' ? (
                            <GiftIcon className='w-6 text-gray-700 dark:text-gray-600' />
                          ) : statusOrder[index] == 'cancelled' ? (
                            <ExclamationCircleIcon className='w-6 text-red-700 dark:text-red-600' />
                          ) : (
                            <CheckBadgeIcon className='w-6 text-gray-700 dark:text-gray-600' />
                          )}
                        </span>
                      </div>
                      <div className='mt-3 text-gray-500 text-md font-semibold dark:text-white'>
                        {statusOrder[index]}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* order details */}
              <div className='my-5 border-b border-gray-200 pb-5'>
                <div className='grid justify-evenly grid-cols-1 md:grid-cols-3   lg:gap-x-8 gap-y-10  lg:grid-cols-4 lg:gap-y-16'>
                  <div className=''>
                    <div className='text-sm text-gray-600 dark:text-gray-300'>
                      ID
                    </div>
                    <div className='text-gray-800 font-semibold dark:text-white'>
                      {order?.id}
                    </div>
                  </div>
                  <div className=''>
                    <div className='text-sm text-gray-600 dark:text-gray-300'>
                      Paid
                    </div>
                    <div className='text-gray-800 font-semibold dark:text-white'>
                      {'Not Paid'}
                    </div>
                  </div>
                  <div className=''>
                    <div className='text-sm text-gray-600 dark:text-gray-300'>
                      Status
                    </div>
                    <div className='text-gray-800 font-semibold dark:text-white'>
                      {order?.orderStatus}
                    </div>
                  </div>
                </div>
              </div>

              {/* configuration */}

              <div className='mb-5 border-b border-gray-200 pb-5'>
                <div className='mb-3'>
                  <div className='text-sm text-gray-600 uppercase dark:text-gray-300'>
                    Transcription Configuration
                  </div>
                </div>
                <div className='grid justify-evenly grid-cols-1 md:grid-cols-3   lg:gap-x-8 gap-y-10  lg:grid-cols-4 lg:gap-y-16'>
                  <div className=''>
                    <div className='text-sm text-gray-600 dark:text-gray-300'>
                      Language
                    </div>
                    <div className='text-gray-800 font-semibold dark:text-white'>
                      {order?.configuration.language}
                    </div>
                  </div>
                  <div className=''>
                    <div className='text-sm text-gray-600 dark:text-gray-300'>
                      Apply Timestamps
                    </div>
                    <div className='text-gray-800 font-semibold dark:text-white'>
                      {order?.configuration.apply_timestamps}
                    </div>
                  </div>
                  <div className=''>
                    <div className='text-sm text-gray-600 dark:text-gray-300'>
                      Text Format (Verbatim)
                    </div>
                    <div className='text-gray-800 font-semibold dark:text-white'>
                      {order?.configuration.text_format == 'clean'
                        ? 'Clean Verbatim'
                        : 'Full Verbatim'}
                    </div>
                  </div>
                  <div className=''>
                    <div className='text-sm text-gray-600 dark:text-gray-300'>
                      Speakers
                    </div>
                    <div className='text-gray-800 font-semibold dark:text-white'>
                      {order?.configuration.speakers}
                    </div>
                  </div>
                </div>
              </div>

              {/* instructions */}
              <div className='my-3'>
                <label
                  htmlFor='message'
                  className='block uppercase mb-2 text-sm  text-gray-600 dark:text-white'
                >
                  Instructions
                </label>
                <textarea
                  id='message'
                  rows={4}
                  ref={instructionsRef}
                  defaultValue={order?.configuration.instructions}
                  className='block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Write your thoughts here...'
                ></textarea>

                <div className='my-4'>
                  <button
                    type='button'
                    disabled={processLoad}
                    onClick={() => updateOrder()}
                    className='text-white text-lg font-semibold bg-indigo-500 hover:bg-indigo-400 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-indigo-100  rounded-lg  px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-indigo-500 dark:border-gray-700 dark:text-white dark:hover:bg-indigo-400 me-2 mb-2'
                  >
                    {processLoad ? <ComponentSpinner /> : <span></span>}
                    Save
                  </button>
                </div>
              </div>

              {/* samples */}
              <div className='mb-5'>
                <div className='mb-3'>
                  <div className='text-sm text-gray-600 uppercase dark:text-gray-300'>
                    FILE SAMPLES
                  </div>
                </div>
                <div className='space-y-2'>
                  {order?.configuration.samples.map((sample, index) => (
                    <div key={index} className='flex items-center'>
                      <ArrowDownOnSquareIcon className='w-5 text-gray-600 dark:text-white' />
                      <a
                        href=''
                        download={sample}
                        className='text-indigo-500 underline underline-offset-4 hover:text-indigo-400'
                      >
                        {sample}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {/* show files preview */}

              <div className='mb-5'>
                <div className='mb-3'>
                  <div className='text-sm text-gray-600 dark:text-gray-300 uppercase flex items-center space-x-2'>
                    Ordered Files{' '}
                    <span className='bg-indigo-500 text-white w-8 h-8 rounded-full text-sm flex items-center justify-center'>
                      {order?.files.length}
                    </span>
                  </div>
                </div>
                <div className='space-y-2'>
                  <Table hoverable>
                    <Table.Head className='dark:border-gray-700 dark:bg-zinc-800'>
                      <Table.HeadCell>Label</Table.HeadCell>
                      <Table.HeadCell>Duration</Table.HeadCell>
                      <Table.HeadCell>Duration</Table.HeadCell>
                      <Table.HeadCell>Created At</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className='divide-y'>
                      {order?.files.map((orderFile) => (
                        <Table.Row
                          is='a'
                          key={order.id}
                          className={classNames(
                            'bg-white  dark:border-gray-700 dark:bg-gray-800',
                          )}
                        >
                          <Table.Cell className='flex gap-x-3 items-center py-2'>
                            {orderFile.mimetype &&
                            (orderFile.mimetype.split('/')[0] == 'video' ||
                              orderFile.mimetype.split('/')[0] == 'audio') ? (
                              <button
                                className='cursor-pointer transition-all duration-100 '
                                onClick={() => setVideoId(orderFile.id)}
                              >
                                <PlayIcon className='text-gray-800  dark:text-white w-5' />
                              </button>
                            ) : (
                              <span className=' w-5 text-white'>Not audio</span>
                            )}

                            <span className='overflow-hidden truncate md:w-[18rem] font-medium text-gray-900 dark:text-white'>
                              {orderFile.label}
                            </span>
                          </Table.Cell>

                          <Table.Cell className='py-2'>
                            {bytesToMB(orderFile.size)} {'MBs'}
                          </Table.Cell>
                          <Table.Cell className='py-2'>
                            <span className='uppercase'>
                              {orderFile.duration
                                ? DurationFromSeconds(orderFile.duration)
                                : '-'}
                            </span>
                          </Table.Cell>
                          <Table.Cell className='py-2'>
                            <span className='capitalize text-sm text-gray-900 dark:text-white'>
                              {moment(orderFile.createdAt).format('L')}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
