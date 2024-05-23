import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import AxiosProxy from '@/utils/AxiosProxy';
import { Spinner } from 'flowbite-react';
import { TrashIcon } from '@heroicons/react/20/solid';
import { useSetRecoilState } from 'recoil';
import { systemProcessStatus } from '@/store/features/fileUpload';

interface RemoveFileProps {
  open: boolean;
  fileId: string;
  reload: () => Promise<void>;
  setOpen: (arg0: boolean) => void;
}

export default function RemoveFile({
  open,
  setOpen,
  fileId,
  reload,
}: RemoveFileProps) {
  const cancelButtonRef = useRef(null);

  const [loading, setLoading] = useState<boolean>(false);
  const setSystemProgressContent = useSetRecoilState(systemProcessStatus);

  const createFolderHttp = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setLoading(true);
      const response = await AxiosProxy.delete(`/files/${fileId}`);
      if (response.status == 200) {
        await reload();
        setOpen(false);
        setSystemProgressContent({
          show: true,
          message: `File with '${fileId}' has been deleted`,
          title: 'File Deleted',
          success: true,
        });
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
                    <div className=' mb-5 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-20 sm:w-20'>
                      <TrashIcon
                        className='h-10 w-10 text-indigo-500'
                        aria-hidden='true'
                      />
                    </div>
                    <div className=' sm:ml-4 sm:mt-0 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-center text-xl font-semibold leading-6 text-gray-700'
                      >
                        Are you Sure you want to delete these File ?
                      </Dialog.Title>
                      <div className='mt-2 text-center text-base text-red-300'>
                        Files deleted may not be recovered.
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <button
                    type='button'
                    disabled={loading}
                    className='inline-flex w-full justify-center rounded-xl bg-red-400 px-7 py-2.5  font-semibold text-white shadow-sm hover:bg-red-200 sm:ml-3 sm:w-auto'
                    onClick={() => createFolderHttp()}
                  >
                    {!loading ? (
                      'Delete'
                    ) : (
                      <div>
                        <Spinner color={'pink'} />
                      </div>
                    )}
                  </button>
                  <button
                    type='button'
                    disabled={loading}
                    className='mt-3 inline-flex w-full justify-center rounded-xl bg-white px-3 py-2.5  font-semibold text-gray-800 shadow-sm   sm:mt-0 sm:w-auto'
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
