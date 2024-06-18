/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import AxiosProxy from '@/utils/AxiosProxy';
import { systemProcessStatus } from '@/store/features/fileUpload';
import { useSetRecoilState } from 'recoil';
import ComponentSpinner from '../ComponentSpinner';

interface CancelOrderProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
  id: string;
  orderId: string;
  reload: () => Promise<void>;
}
export default function CancelOrder({
  open,
  setOpen,
  id,
  orderId,
  reload,
}: CancelOrderProps) {
  const cancelButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const setSystemProgressContent = useSetRecoilState(systemProcessStatus);

  const httpCancelOrder = async () => {
    try {
      setLoading(true);
      const response = await AxiosProxy.patch(`/orders/cancel/${id}`);

      if (response.status == 200) {
        await reload();
        setSystemProgressContent({
          show: true,
          message: `Order with '${orderId}' has been cancelled`,
          title: 'Order Cancelled',
          success: true,
        });
      }
    } catch (err) {
      // @ts-ignore
      if (err.code == 'NETWORK_ERR') {
        throw new Error('There was a problem with Your Internet Connection');
      }

      setSystemProgressContent({
        show: true,
        message: `An Unknown error ocurred and request failed`,
        title: 'Order cancel Failed',
        success: false,
      });
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-50'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                      <ExclamationTriangleIcon
                        className='h-6 w-6 text-red-600'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-semibold leading-6 text-gray-900'
                      >
                        Cancel Order
                      </Dialog.Title>
                      <div className='mt-2'>
                        <p className='text-gray-500'>
                          Are you sure you want to cancel order <br />
                          <span className='font-bold text-gray-700'>
                            # {orderId}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <button
                    type='button'
                    disabled={loading}
                    className='inline-flex w-full justify-center rounded-md focus:ring-4 focus:outline-none focus:ring-red-200 bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
                    onClick={() => httpCancelOrder()}
                  >
                    {loading ? <ComponentSpinner /> : <span></span>}
                    Cancel Order
                  </button>
                  <button
                    type='button'
                    disabled={loading}
                    className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
