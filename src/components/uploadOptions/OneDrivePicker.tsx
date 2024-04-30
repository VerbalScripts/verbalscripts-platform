/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// import { IFilePickerOptions } from '@pnp/picker-api';

interface OneDrivePickerProps {
  trigger?: string;
  visible?: boolean;
}
export default function OneDrivePicker({
  visible = true,
  trigger,
}: OneDrivePickerProps) {
  const paramsTest = {
    sdk: '8.0',
    entry: {
      oneDrive: {},
    },
    authentication: {},
    messaging: {
      origin: 'http://localhost:3000',
      channelId: '27',
    },
    selection: {
      mode: 'multiple',
    },
    typesAndSources: {
      // filters: [".docx"],
      mode: 'files',
      pivots: {
        oneDrive: true,
        recent: true,
      },
    },
  };

  return <div></div>;
}
