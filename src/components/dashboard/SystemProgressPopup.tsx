import { systemProcessStatus } from '@/store/features/fileUpload';
import { classNames } from '@/utils/classNames';
import { Toast } from 'flowbite-react';
import { useEffect } from 'react';
import { MdCheckCircle, MdCrisisAlert } from 'react-icons/md';
import { useRecoilState } from 'recoil';

export default function SystemProgressPopup() {
  const [statusBarContent, setStatusBarContent] =
    useRecoilState(systemProcessStatus);

  const closeToast = async () => {
    setTimeout(async () => {
      // reset progress
      setStatusBarContent({
        show: false,
        message: '',
        success: true,
        title: '',
      });
    }, 5000);
  };

  useEffect(() => {
    if (statusBarContent.show) {
      closeToast();
    }
  }, [statusBarContent.show]);

  return (
    <Toast
      className={classNames(
        'fixed transition-all z-50 duration-100 translate-y-10 shadow-2xl opacity-0 bottom-10 right-5  border border-gray-200',
        statusBarContent.show ? 'visible translate-y-0 opacity-1' : 'invisible',
      )}
    >
      <div className='flex items-start'>
        {statusBarContent.success ? (
          <div className='inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg  bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300'>
            <MdCheckCircle className='h-7 w-7' />
          </div>
        ) : (
          <div className='inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg  bg-red-100 text-red-500'>
            <MdCrisisAlert className='h-7 w-7' />
          </div>
        )}
        <div className='ml-3 text-sm font-normal'>
          <span className='mb-1 text-md md:text-lg font-semibold text-gray-900 dark:text-white'>
            {statusBarContent.title}
          </span>
          <div className='mb-2 text-sm  md:text-md font-normal'>
            {statusBarContent.message}
          </div>
          {/* <div className='flex gap-2'>
            <div className='w-auto'>
              <Button size='xs'>Update</Button>
            </div>
            <div className='w-auto'>
              <Button color='light' size='xs'>
                Not now
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </Toast>
  );
}
