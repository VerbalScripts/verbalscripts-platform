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
}> ) {
  
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
        }
      }
    } catch (err: any) {
      if (err.response == undefined) {
        console.log('network failure');
      }
      if (err.response.status && err.response.data.message == 'jwt expired') {
        //   use refresh token
        const response = await AuthUsingRefreshToken();
        if (!response) {
          // clean up
          cleanExpiredSession();
          return;
        } else {
          setUserState({
            email: response.email,
            firstName: response.firstName,
            lastName: response.lastName,
            userId: response.userId,
            isAuth: true,
          });
        }
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return <div>{children}</div>;
}
