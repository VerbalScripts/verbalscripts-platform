import React, { useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';
import AxiosProxy from '@/utils/AxiosProxy';

interface FileDownloaderProps {
  url: string;
  reset: (arg0: string) => void;
}
function FileDownloader({ url, reset }: FileDownloaderProps) {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  let cancelTokenSource: CancelTokenSource | undefined;

  const downloadFile = async (downloadUrl: string) => {
    setDownloading(true);
    setProgress(0);

    try {
      cancelTokenSource = axios.CancelToken.source();

      const response = await AxiosProxy({
        url: downloadUrl, // Adjust the URL according to your setup
        method: 'GET',
        responseType: 'blob',
        cancelToken: cancelTokenSource.token,
        onDownloadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            );
            setProgress(percentCompleted);
          }
        },
      });

      const filename = response.headers['content-disposition']
        .split('filename=')[1]
        .split(';')[0];

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = filename; // Change the filename if needed
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();

      // Cleanup
      // window.URL.revokeObjectURL(url);

      // Reset downloading state
      setDownloading(false);
      setProgress(0);
      reset('blank');
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.error('Error downloading file:', error);
      }
      setDownloading(false);
      setProgress(0);
      reset('blank');
    }
  };

  useEffect(() => {
    if (url && url != 'blank') {
      downloadFile(url);
    }
  }, [url]);

  const cancelDownload = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('Download canceled by the user');
    }
  };

  return (
    <div>
      {downloading && (
        <button onClick={cancelDownload} disabled={!downloading}>
          Cancel Download
        </button>
      )}
      {downloading && <progress value={progress} max='100' />}
    </div>
  );
}

export default FileDownloader;
