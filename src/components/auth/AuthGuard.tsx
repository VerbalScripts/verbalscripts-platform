/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import AxiosProxy from '@/utils/AxiosProxy';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';
import React, { useEffect } from 'react';

export default function AuthGuard() {
  const verifyAuthenticationStatus = async () => {
    const auth_token = window.localStorage.getItem('rft-btt');
    if (auth_token == null) return null;
    try {
      const response = await AxiosProxy.post(
        '/auth/refresh',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + auth_token,
          },
        },
      );

      if (response.status == 201) {
        GetOrStoreAuthToken(response.data.access_token);
        window.localStorage.setItem('rft-btt', response.data.refresh_token);

        window.location.href = '/dashboard/pending';
      }
    } catch (err) {
      // @ts-ignore
      if (err.code == 'ERR_BAD_REQUEST') {
        // @ts-ignore
        console.log(err.code);
      }
      // @ts-ignore
      if (err.code == 'ERR_NETWORK') {
        // @ts-ignore
        console.log(err.code);
      }
    }
  };

  useEffect(() => {
    verifyAuthenticationStatus();
  }, []);

  return <div></div>;
}
