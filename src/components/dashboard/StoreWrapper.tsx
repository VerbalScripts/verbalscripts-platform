/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import AxiosProxy from '@/utils/AxiosProxy';
import { userState as globalUser } from '@/store/configureStore';
import {
  AuthUsingRefreshToken,
  cleanExpiredSession,
} from '@/utils/AuthenticateRefreshToken';

export default function StoreWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userState, setUserState] = useRecoilState(globalUser);
  const fetchUser = async () => {
    try {
      const response = await AxiosProxy('/user/get-client');

      if (response.status == 200) {
        if (response.data.isAuth) {
          setUserState({
            email: response.data.email,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            userId: response.data.userId,
            isAuth: true,
          });
        } else {
          const response = await AuthUsingRefreshToken();
          if (!response) {
            // clean up
            cleanExpiredSession();
            setUserState({
              ...userState,
              isAuth: false,
            });
            return;
          } else {
            setUserState({
              email: response.email,
              firstName: response.firstName,
              lastName: response.lastName,
              userId: response.userId,
              isAuth: true,
            });

            window.localStorage.setItem('x-token', response.access_token);
            window.localStorage.setItem('rft-btt', response.refresh_token);
          }
        }
      }
    } catch (err: any) {
      console.log('beige killer');
      if (err.code == 'NETWORK_ERR') {
        console.log('network failure');
      }
      if (err.code == 'ERR_BAD_REQUEST') {
        //   use refresh token
        const response = await AuthUsingRefreshToken();
        if (!response) {
          // clean up
          cleanExpiredSession();
          setUserState({
            ...userState,
            isAuth: false,
          });
          return;
        } else {
          setUserState({
            email: response.email,
            firstName: response.firstName,
            lastName: response.lastName,
            userId: response.userId,
            isAuth: true,
          });

          window.localStorage.setItem('x-token', response.access_token);
          window.localStorage.setItem('rft-btt', response.refresh_token);
        }
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return <div>{children}</div>;
}
