/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef, useState } from 'react';
import LocalFilePLoad from '@/components/dashboard/LocalFilePLoad';
import { useRecoilState } from 'recoil';
import { userState } from '@/store/configureStore';
import DropboxUpload from '@/components/uploadOptions/DropboxUpload';
import GoogleUpload from '@/components/uploadOptions/GoogleUpload';
import YoutubeLinkUpload from '@/components/modals/YoutubeLinkUpload';
import OneDrivePicker from '@/components/uploadOptions/OneDrivePicker';
import DashboardUploadPreview from '@/components/dashboard/DashboardUploadPreview';

export default function EmptyUploadsPrompt() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useRecoilState(userState);
  const [openYoutube, setOpenYoutube] = useState(false);
  const [openDirectLink, setOpenDirectLink] = useState(false);

  useEffect(() => {
    console.log('check update', user);
  }, [user]);

  // drag and drop files and folders

  const triggerDropBoxPicker = useRef(null);
  const triggerGooglePicker = useRef(null);
  const triggerOneDrivePicker = useRef(null);

  const launchDropBoxPicker = () => {
    if (triggerDropBoxPicker.current) {
      // @ts-ignore
      triggerDropBoxPicker.current.initFilePicker();
    }
  };

  const launchGoogleDrivePicker = () => {
    if (triggerGooglePicker.current) {
      // @ts-ignore
      triggerGooglePicker.current.handleAuthClick();
    }
  };
  const launchOneDrivePicker = () => {
    if (triggerGooglePicker.current) {
      // @ts-ignore
      triggerGooglePicker.current.initPicker();
    }
  };

  return (
    <div className='py-2 '>
      <DropboxUpload ref={triggerDropBoxPicker} visible={false} />
      <GoogleUpload ref={triggerGooglePicker} visible={false} />
      <OneDrivePicker ref={triggerOneDrivePicker} visible={false} />
      <YoutubeLinkUpload open={openYoutube} setOpen={setOpenYoutube} />
      {/* fancy welcome if orders are empty */}
      <div className='pt-10 md:pt-16'>
        <div className='mb-10'>
          <div className='mb-5 text-4xl md:text-6xl capitalize font-bold footer-title'>
            Hello, {user.isAuth ? user.firstName : 'Guest'}
          </div>

          <div className='text-3xl md:text-4xl font-semibold text-gray-600 dark:text-gray-500'>
            Are you ready to transcript?{' '}
            <span className='underline text-blue-500'>Choose An Option</span>
          </div>
        </div>

        <DashboardUploadPreview
          openDropBoxPicker={launchDropBoxPicker}
          openGoogleDrivePicker={launchGoogleDrivePicker}
          openOneDrivePicker={launchOneDrivePicker}
          openDirectLink={() => setOpenDirectLink(!openDirectLink)}
          openYoutube={() => setOpenYoutube(!openYoutube)}
        />
      </div>

      <div className=''>
        <LocalFilePLoad />
      </div>
    </div>
  );
}
