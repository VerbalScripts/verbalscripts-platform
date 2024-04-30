'use client';

import React, { useEffect, useState } from 'react';

import ProfileSettings from '@/components/dashboard/ProfileSettings';
import SecuritySettings from '@/components/dashboard/SecuritySettings';
import Head from 'next/head';
import AxiosProxy from '@/utils/AxiosProxy';

export default function Page() {
  const [user, setUser] = useState<User>();
  const [isAuth, isAuthenticated] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    try {
      const response = await AxiosProxy.get('/user/get-client');
      if (response.status == 200) {
        if (response.data.isAuth) {
          setUser({
            email: response.data.email,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            country: response.data.country,
            address: response.data.address,
            city: response.data.address,
            companyName: response.data.companyName,
          });
          isAuthenticated(true);
        } else {
          isAuthenticated(false);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  });

  return (
    <div>
      <Head>
        <title>Verbal Dashboard | Account</title>
        <meta
          property='og:title'
          content='Verbal Dashboard | Account'
          key='title'
        />
      </Head>
      {!loading && user ? (
        <section className='relative px-6 py-10 md:py-14  lg:px-14'>
          <div className='mx-auto max-w-4xl text-left'>
            {/* profile update */}

            <ProfileSettings
              email={user.email}
              firstName={user.firstName}
              lastName={user.lastName}
              companyName={user.companyName}
              city={user.city}
              country={user.country}
              address={user.address}
              updater={setUser}
            />
            {/* divider */}
            {/* <div className='my-4 border-b border-gray-200'></div> */}

            {/* password update */}
            <SecuritySettings />
          </div>
        </section>
      ) : isAuth ? (
        <div></div>
      ) : null}
    </div>
  );
}
