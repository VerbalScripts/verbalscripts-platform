/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import Script from 'next/script';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const gapi: {
  load: (arg0: string, arg1: () => Promise<void>) => void;
  client: {
    load: (arg0: string) => any;
    drive: { files: { get: (arg0: { fileId: any; fields: string }) => any } };
  };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const google: {
  accounts: {
    oauth2: {
      initTokenClient: (arg0: {
        client_id: string;
        scope: string;
        callback: string;
      }) => string;
      revoke: (arg0: string) => void;
    };
  };
  picker: {
    View: new (arg0: any) => any;
    ViewId: { DOCS: any };
    PickerBuilder: new () => {
      (): any;
      new (): any;
      enableFeature: {
        (arg0: any): {
          (): any;
          new (): any;
          enableFeature: {
            (arg0: any): {
              (): any;
              new (): any;
              setDeveloperKey: {
                (arg0: string): {
                  (): any;
                  new (): any;
                  setAppId: {
                    (arg0: string): {
                      (): any;
                      new (): any;
                      setOAuthToken: {
                        (arg0: string): {
                          (): any;
                          new (): any;
                          addView: {
                            (arg0: any): {
                              (): any;
                              new (): any;
                              addView: {
                                (arg0: any): {
                                  (): any;
                                  new (): any;
                                  setCallback: {
                                    (arg0: (data: any) => Promise<void>): {
                                      (): any;
                                      new (): any;
                                      build: { (): any; new (): any };
                                    };
                                    new (): any;
                                  };
                                };
                                new (): any;
                              };
                            };
                            new (): any;
                          };
                        };
                        new (): any;
                      };
                    };
                    new (): any;
                  };
                };
                new (): any;
              };
            };
            new (): any;
          };
        };
        new (): any;
      };
    };
    Feature: { NAV_HIDDEN: any; MULTISELECT_ENABLED: any };
    DocsUploadView: new () => any;
    Action: { PICKED: any };
    Response: { DOCUMENTS: string | number };
    Document: { ID: string | number };
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global gapi */
export default function GoogleUpload() {
  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

  // TODO(developer): Set to client ID and API key from the Developer Console
  const CLIENT_ID = '<YOUR_CLIENT_ID>';
  const API_KEY = 'AIzaSyDw8a5-1aFFbOsM4F0bVAAqCXm_8X0udpI';

  // TODO(developer): Replace with your own project number from console.developers.google.com.
  const APP_ID = '<YOUR_APP_ID>';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let tokenClient: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let accessToken: any;
  let pickerInited: boolean = false;
  let gisInited: boolean = false;

  useEffect(() => {
    if (
      window != null &&
      window.document.getElementById('authorize_button') != null &&
      window.document.getElementById('signout_button')
    ) {
      window.document.getElementById('authorize_button')!.style.visibility =
        'hidden';
      window.document.getElementById('signout_button')!.style.visibility =
        'hidden';
    }
  });

  /**
   * Callback after api.js is loaded.
   */
  function gapiLoaded() {
    if (window.gapi! != null) {
      gapi.load('client:picker', initializePicker);
    }
  }

  /**
   * Callback after the API client is loaded. Loads the
   * discovery doc to initialize the API.
   */
  async function initializePicker() {
    await gapi.client.load(
      'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
    );
    pickerInited = true;
    maybeEnableButtons();
  }

  /**
   * Callback after Google Identity Services are loaded.
   */
  function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    });
    gisInited = true;
    maybeEnableButtons();
  }

  /**
   * Enables user interaction after all libraries are loaded.
   */
  function maybeEnableButtons() {
    if (pickerInited && gisInited) {
      document.getElementById('authorize_button')!.style.visibility = 'visible';
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  function handleAuthClick() {
    tokenClient.callback = async (response: {
      error: undefined;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      access_token: any;
    }) => {
      if (response.error !== undefined) {
        throw response;
      }
      accessToken = response.access_token;
      document.getElementById('signout_button')!.style.visibility = 'visible';
      document.getElementById('authorize_button')!.innerText = 'Refresh';
      await createPicker();
    };

    if (accessToken === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: '' });
    }
  }

  /**
   *  Sign out the user upon button click.
   */
  function handleSignoutClick() {
    if (accessToken) {
      accessToken = null;
      google.accounts.oauth2.revoke(accessToken);
      document.getElementById('content')!.innerText = '';
      document.getElementById('authorize_button')!.innerText = 'Authorize';
      document.getElementById('signout_button')!.style.visibility = 'hidden';
    }
  }

  /**
   *  Create and render a Picker object for searching images.
   */
  function createPicker() {
    const view = new google.picker.View(google.picker.ViewId.DOCS);
    view.setMimeTypes('image/png,image/jpeg,image/jpg');
    const picker = new google.picker.PickerBuilder()
      .enableFeature(google.picker.Feature.NAV_HIDDEN)
      .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
      .setDeveloperKey(API_KEY)
      .setAppId(APP_ID)
      .setOAuthToken(accessToken)
      .addView(view)
      .addView(new google.picker.DocsUploadView())
      .setCallback(pickerCallback)
      .build();
    picker.setVisible(true);
  }

  /**
   * Displays the file details of the user's selection.
   * @param {object} data - Containers the user selection from the picker
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function pickerCallback(data: { [x: string]: any[]; action: any }) {
    if (data.action === google.picker.Action.PICKED) {
      let text = `Picker response: \n${JSON.stringify(data, null, 2)}\n`;
      const document = data[google.picker.Response.DOCUMENTS][0];
      const fileId = document[google.picker.Document.ID];
      console.log(fileId);
      const res = await gapi.client.drive.files.get({
        fileId: fileId,
        fields: '*',
      });
      text += `Drive API response for first document: \n${JSON.stringify(res.result, null, 2)}\n`;
      window.document.getElementById('content')!.innerText = text;
    }
  }

  return (
    <div>
      <Script
        src='https://apis.google.com/js/api.js'
        strategy='lazyOnload'
        onLoad={() => gapiLoaded()}
      />
      <Script
        src='https://accounts.google.com/gsi/client'
        strategy='lazyOnload'
        onLoad={() => gisLoaded()}
      />

      <button
        id='authorize_button'
        className='text-gray-700 p-3 rounded-xl bg-indigo-500 cursor-pointer'
        onClick={() => handleAuthClick()}
      >
        Authorize
      </button>
      <button
        id='signout_button'
        className='text-gray-700 p-3 rounded-xl bg-indigo-500 cursor-pointer'
        onClick={() => handleSignoutClick()}
      >
        Sign Out
      </button>

      <pre id='content' style={{ whiteSpace: 'pre-wrap' }}></pre>
    </div>
  );
}
