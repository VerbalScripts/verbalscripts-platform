/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef } from 'react';
// import { IFilePickerOptions } from '@pnp/picker-api';

interface OneDrivePickerProps {
  visible?: boolean;
}
interface OneDrivePickerRef {
  visible?: boolean;
}
const OneDrivePicker = forwardRef<OneDrivePickerRef, OneDrivePickerProps>(
  ({ visible = true }, ref) => {
    // @ts-ignore
    React.useImperativeHandle(ref, () => ({
      initPicker,
    }));

    const initPicker = () => {};
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
  },
);

export default OneDrivePicker;
