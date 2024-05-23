'use client';

import React, { useEffect, useState } from 'react';

import ProfileSettings from '@/components/dashboard/ProfileSettings';
import SecuritySettings from '@/components/dashboard/SecuritySettings';
import AxiosProxy from '@/utils/AxiosProxy';

import { Tabs } from 'flowbite-react';
import { HiUserCircle } from 'react-icons/hi';
import { MdSettings } from 'react-icons/md';
import SystemProgressPopup from '@/components/dashboard/SystemProgressPopup';

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
  }, []);

  return (
    <div className='min-h-screen'>
      <title>Verbal Dashboard | Account</title>

      <SystemProgressPopup />
      {!loading && user ? (
        <section className='relative px-6 py-10 md:py-14  lg:px-14'>
          <div className='mx-auto max-w-4xl text-left'>
            {/* profile update */}

            <Tabs
              aria-label='Tabs with icons'
              style='underline'
              className='text-gray-800 dark:text-white'
            >
              <Tabs.Item
                active
                title='Account Settings'
                className=' text-xl font-semibold'
                icon={HiUserCircle}
              >
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
              </Tabs.Item>
              <Tabs.Item title='Security' icon={MdSettings}>
                <SecuritySettings />
              </Tabs.Item>
            </Tabs>

            {/* password update */}
          </div>
        </section>
      ) : isAuth ? (
        <div></div>
      ) : null}
    </div>
  );
}
