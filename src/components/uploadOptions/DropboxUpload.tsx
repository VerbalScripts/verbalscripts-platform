/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import FileDownloadProgress from './FileDownloadProgress';
import AxiosProxy from '@/utils/AxiosProxy';

interface DropBoxFile {
  link: string;
  name: string;
  bytes: number;
  icon: string;
  thumbnailLink: string;
}

let timeoutRef: ReturnType<typeof setInterval> | undefined = undefined;

export default function DropboxUpload() {
  const [loading, setLoading] = useState(false);
  const [keepGoing, setkeepGoing] = useState(true);
  const [files, setFiles] = useState<DropBoxFile[]>([]);
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ids, setIds] = useState<string[]>([]);

  const API_KEY = '8uva3lg9uiheidq';

  const options = {
    // Required. Called when a user selects an item in the Chooser.
    success: async function (files) {
      setFiles(() => [...files]);
      await pushUploadLink(files);
    },

    // Optional. Called when the user closes the dialog without selecting a file
    // and does not include any parameters.
    cancel: function () {
      console.log('user closed');
    },

    // Optional. "preview" (default) is a preview link to the document for sharing,
    // "direct" is an expiring link to download the contents of the file. For more
    // information about link types, see Link types below.
    linkType: 'direct', // or "direct"

    // Optional. A value of false (default) limits selection to a single file, while
    // true enables multiple file selection.
    multiselect: true, // or true

    // Optional. This is a list of file extensions. If specified, the user will
    // only be able to select files with these extensions. You may also specify
    // file types, such as "video" or "images" in the list. For more information,
    // see File types below. By default, all extensions are allowed.
    extensions: ['video', 'images', 'documents'],

    // Optional. A value of false (default) limits selection to files,
    // while true allows the user to select both folders and files.
    // You cannot specify `linkType: "direct"` when using `folderselect: true`.
    folderselect: false, // or true

    // Optional. A limit on the size of each file that may be selected, in bytes.
    // If specified, the user will only be able to select files with size
    // less than or equal to this limit.
    // For the purposes of this option, folders have size zero.
  };

  const dropboxLoaded = () => {
    setLoading(false);
    console.log('loaded script');
  };

  const initFilePicker = () => {
    if (typeof window.Dropbox != 'undefined') {
      // @ts-ignore
      window.Dropbox.choose(options);
    }
  };

  const pushUploadLink = async (_files: DropBoxFile[]) => {
    try {
      setOpen(true);
      const dataFiles = _files.map((item) => {
        return {
          size: item.bytes,
          label: item.name,
          filename: item.name,
          link: item.link,
          thumbnail: item.thumbnailLink,
        };
      });
      const response = await AxiosProxy.post(
        '/uploads/upload-cloud-provider?source=dropbox',
        { files: dataFiles },
      );
      if (response.status == 201) {
        // add to queque
        const ids = response.data.filesIds;
        setIds(ids);
        setkeepGoing(true);

        pingDownloadCompletion(ids);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const pingStatus = async (ids: string[]) => {
    const ids_join = ids.join(',');
    try {
      const response = await AxiosProxy.get(
        `/files/ping-cloud-download-status?ids=${ids_join}`,
      );
      if (response.status == 200) {
        // add to queque
        const idsResponse: { id: string; status: string }[] =
          response.data.fileIds;

        let flag = true;
        idsResponse.forEach((statusOb) => {
          if (statusOb.status != 'complete') {
            flag = false;
          }
        });

        if (flag) {
          setkeepGoing(false);
        }

        // setOpen(false);
      }
    } catch (err) {
      setLoading(false);
      clearInterval(timeoutRef);
      setOpen(false);
    }
  };

  useEffect(() => {
    if (timeoutRef != undefined && !keepGoing) {
      clearTimeout(timeoutRef);
      setOpen(false);
    }
  }, [keepGoing]);

  const pingDownloadCompletion = (ids: string[]) => {
    timeoutRef = setInterval(async () => {
      await pingStatus(ids);
    }, 1500);
  };

  const retryUpload = async () => {
    await pushUploadLink(files);
  };

  return (
    <div>
      <Script
        id='dropboxjs'
        src='https://www.dropbox.com/static/api/2/dropins.js'
        strategy='lazyOnload'
        data-app-key={API_KEY}
        onLoad={() => dropboxLoaded()}
      />

      <FileDownloadProgress
        retryUpload={retryUpload}
        open={open}
        loading={loading}
        source={'DropBox'}
        setOpen={setOpen}
      />

      <div className='px-6 py-10 lg:py-12'>
        <p className='text-gray-600'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          laudantium consequatur magni est similique praesentium accusantium
          culpa molestiae enim iure.
        </p>

        <div className='mt-5'>
          <button
            disabled={loading}
            onClick={() => initFilePicker()}
            className='px-7 py-3 font-semibold bg-indigo-500 rounded-xl text-white'
          >
            {loading ? 'File picker loading ... ' : 'Choose File '}
          </button>
        </div>
      </div>
    </div>
  );
}
