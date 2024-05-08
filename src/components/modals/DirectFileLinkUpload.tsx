import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import AxiosProxy from '@/utils/AxiosProxy';
import { Spinner } from 'flowbite-react';

interface DirectFileLinkUploadProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export default function DirectFileLinkUpload({
  open,
  setOpen,
}: DirectFileLinkUploadProps) {
  const cancelButtonRef = useRef(null);
  const folderRef = useRef(null);

  const [loading, setLoading] = useState<boolean>(false);

  const createFolderHttp = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (
        folderRef.current != null &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        folderRef.current!.value &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        folderRef.current!.value.length == 0
      )
        return;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const label = folderRef.current!.value;
      setLoading(true);
      const response = await AxiosProxy.post('/folders/create', {
        label,
      });
      if (response.status == 201) {
        console.log(response.data);
        setOpen(false);
      } else {
        setOpen(false);
        console.log('success');
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-[80]'
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
                  <div className='sm:flex flex-col sm:items-center'>
                    <div className=' mb-5 mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-20 sm:w-20'>
                      <Image
                        src='/icons/link.png'
                        height={35}
                        width={35}
                        alt='direct link upload'
                      />
                    </div>
                    <div className='text-center sm:ml-4 sm:mt-0 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg text-center font-semibold leading-6 text-gray-700'
                      >
                        Copy and Paste a downloadable link to to the target file
                        to begin upload.
                      </Dialog.Title>
                      <div className='mt-2'></div>
                    </div>
                  </div>
                  <form className='space-y-6' action='#' method='POST'>
                    <div>
                      <div className='mt-2 w-full'>
                        <input
                          id='folder-name'
                          name='name'
                          type='text'
                          ref={folderRef}
                          autoComplete='name'
                          required
                          placeholder='https:// or http://'
                          className='block w-full rounded-md border-0 py-3.5 text-gray-600 shadow-sm text-lg font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6'
                        />
                      </div>
                    </div>
                    <div className='text-gray-700 px-3 py-2 bg-gray-100 rounded-md'>
                      <span className='font-bold text-gray-900'>Note:</span>
                      The link should be downloadable by your browser.
                    </div>
                  </form>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <button
                    type='button'
                    disabled={loading}
                    className='inline-flex w-full justify-center rounded-xl bg-indigo-500 px-7 py-2.5  font-semibold text-white shadow-sm hover:bg-indigo-400 sm:ml-3 sm:w-auto'
                    onClick={() => createFolderHttp()}
                  >
                    {!loading ? (
                      'Add Link'
                    ) : (
                      <div>
                        <Spinner color={'pink'} />
                      </div>
                    )}
                  </button>
                  <button
                    type='button'
                    disabled={loading}
                    className='mt-3 inline-flex w-full justify-center rounded-xl px-3 py-2.5  font-semibold text-gray-800 shadow-sm   sm:mt-0 sm:w-auto'
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
