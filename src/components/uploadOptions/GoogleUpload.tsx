/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Script from 'next/script';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let tokenClient: any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let accessToken: any;
let pickerInited: boolean = false;
let gisInited: boolean = false;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global gapi */
export default function GoogleUpload() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

  // TODO(developer): Set to client ID and API key from the Developer Console
  const CLIENT_ID =
    '324780422094-bgi1n0ofg62989rhr2vganu9u7dpma7c.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyA9cL8ZhmuPBaUgv5Ohx-Dj6L-ZtkjR6lE';

  // TODO(developer): Replace with your own project number from console.developers.google.com.
  const APP_ID = 'verbal-platform ';

  /**
   * Callback after api.js is loaded.
   */
  function gapiLoaded() {
    if (typeof window.gapi != 'undefined') {
      window.gapi.load('client:picker', initializePicker);
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
    console.log('picker loaded !!');
    console.log(tokenClient);

    maybeEnableButtons();
  }

  /**
   * Callback after Google Identity Services are loaded.
   */
  function gisLoaded() {
    console.log('loaded google gis');

    // @ts-ignore
    tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: () => {
        console.log('something happened');
      }, // defined later
    });

    gisInited = true;
    maybeEnableButtons();
  }

  /**
   * Enables user interaction after all libraries are loaded.
   */
  function maybeEnableButtons() {
    if (pickerInited && gisInited) {
      setLoading(false);
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  async function handleAuthClick() {
    if (tokenClient == undefined) {
      setError('Failed to Authenticate');
      return;
    }

    tokenClient.callback = async (response: {
      error: undefined;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      access_token: any;
    }) => {
      if (response.error !== undefined) {
        throw response;
      }
      accessToken = response.access_token;
      console.log(accessToken);
      // document.getElementById('signout_button')!.style.visibility = 'visible';
      // document.getElementById('authorize_button')!.innerText = 'Refresh';
      await createPicker();
    };

    
    if (accessToken === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      console.log( 'access token exists using session' );
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: '' });
    }
  }

  /**
   *  Sign out the user upon button click.
   */
  // function handleSignoutClick() {
  //   if (accessToken) {
  //     accessToken = null;
  //     google.accounts.oauth2.revoke(accessToken);
  //     document.getElementById('content')!.innerText = '';
  //     document.getElementById('authorize_button')!.innerText = 'Authorize';
  //     document.getElementById('signout_button')!.style.visibility = 'hidden';
  //   }
  // }

  /**
   *  Create and render a Picker object for searching images.
   */
  function createPicker() {
    // @ts-ignore
    const view = new window.google.picker.View(google.picker.ViewId.DOCS);
    // view.setMimeTypes('image/png,image/jpeg,image/jpg');
    // @ts-ignore
    const picker = new window.google.picker.PickerBuilder()
      // @ts-ignore
      .enableFeature(window.google.picker.Feature.NAV_HIDDEN)
      // @ts-ignore
      .enableFeature(window.google.picker.Feature.MULTISELECT_ENABLED)
      .setDeveloperKey(API_KEY)
      .setAppId(APP_ID)
      .setOAuthToken(accessToken)
      .addView(view)
      // @ts-ignore
      .addView(new window.google.picker.DocsUploadView())
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
    // @ts-ignore
    if (data.action === window.google.picker.Action.PICKED) {
      let text = `Picker response: \n${ JSON.stringify( data, null, 2 ) }\n`;
      console.log(data)
      // @ts-ignore
      const document = data[window.google.picker.Response.DOCUMENTS][0];
      // @ts-ignore
      const fileId = document[window.google.picker.Document.ID];
      console.log(fileId);
      // @ts-ignore
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

      <div className='px-6 py-10 lg:py-12'>
        {error != '' ? <div className='bg-red-300 text-gray-500 p-5 rounded-xl'>{error}</div> : null}
        <p className='text-gray-600'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          laudantium consequatur magni est similique praesentium accusantium
          culpa molestiae enim iure.
        </p>

        <div className='mt-5'>
          <button
            disabled={loading}
            onClick={() => handleAuthClick()}
            className='px-7 py-3 font-semibold bg-indigo-500 rounded-xl text-white'
          >
            {loading ? 'File picker loading ... ' : 'Choose File '}
          </button>
        </div>
      </div>

      <pre
        id='content'
        className='text-white'
        style={{ whiteSpace: 'pre-wrap' }}
      ></pre>
    </div>
  );
}
