import React from 'react'
import { IFilePickerOptions } from '@pnp/picker-api';

export default function OneDrivePicker () {
    

    const paramsTest: IFilePickerOptions = {
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

    
  return (
    <div>OneDrivePicker</div>
  )
}
