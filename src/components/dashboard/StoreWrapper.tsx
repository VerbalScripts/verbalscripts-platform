/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import AxiosProxy from '@/utils/AxiosProxy';
import { userState as globalUser } from '@/store/configureStore';
import { cleanExpiredSession } from '@/utils/AuthenticateRefreshToken';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';

export default function StoreWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userState, setUserState] = useRecoilState(globalUser);

  const verifyAuthenticationStatus = async () => {
    const auth_token = window.localStorage.getItem('rft-btt');
    if (auth_token == null) {
      setUserState({
        email: '',
        firstName: '',
        lastName: '',
        userId: '',
        isAuth: false,
      });
      return null;
    }
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
        await fetchUser();
      }
    } catch (err) {
      // @ts-ignore
      if (err.code == 'ERR_NETWORK') {
        throw new Error('Error, Check your Network Connection');
      } else {
        cleanExpiredSession();
      }
      // failed authentication
      setUserState({
        email: '',
        firstName: '',
        lastName: '',
        userId: '',
        isAuth: false,
      });
    }
  };

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
        }
      }
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  useEffect(() => {
    verifyAuthenticationStatus();
  }, []);
  return <div>{children}</div>;
}
