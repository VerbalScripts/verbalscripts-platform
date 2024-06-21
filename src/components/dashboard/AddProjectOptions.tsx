/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {  useRef, useState } from 'react';
import LocalFilePLoad from '@/components/dashboard/LocalFilePLoad';
import DropboxUpload from '@/components/uploadOptions/DropboxUpload';
import GoogleUpload from '@/components/uploadOptions/GoogleUpload';
import YoutubeLinkUpload from '@/components/modals/YoutubeLinkUpload';
import OneDrivePicker from '@/components/uploadOptions/OneDrivePicker';
import DashboardUploadPreview from '@/components/dashboard/DashboardUploadPreview';

export default function AddProjectOptions() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openYoutube, setOpenYoutube] = useState(false);
  const [openDirectLink, setOpenDirectLink] = useState(false);

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
      <div className=''>
      

        <DashboardUploadPreview
          openDropBoxPicker={launchDropBoxPicker}
          openGoogleDrivePicker={launchGoogleDrivePicker}
          openOneDrivePicker={launchOneDrivePicker}
          openDirectLink={() => setOpenDirectLink(!openDirectLink)}
          openYoutube={() => setOpenYoutube(!openYoutube)}
        />
      <div className=''>
        <LocalFilePLoad />
      </div>
      </div>

    </div>
  );
}
