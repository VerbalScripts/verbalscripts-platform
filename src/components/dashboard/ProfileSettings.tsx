'use client';

import { systemProcessStatus } from '@/store/features/fileUpload';
import AxiosProxy from '@/utils/AxiosProxy';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import ComponentSpinner from '../ComponentSpinner';

interface ProfileSettingsProps extends User {
  updater: (arg0: User) => void;
}
export default function ProfileSettings({
  email,
  firstName,
  lastName,
  city,
  companyName,
  address,
  country,
  updater,
}: ProfileSettingsProps) {
  const countryMap = new Map([
    ['US', 'United States'],
    ['CA', 'Canada'],
    ['IN', 'India'],
    ['CN', 'China'],
    ['JP', 'Japan'],
    ['MX', 'Mexico'],
    ['DE', 'Germany'],
    ['GB', 'United Kingdom'],
    ['FR', 'France'],
    ['BR', 'Brazil'],
    ['RU', 'Russia'],
    ['IT', 'Italy'],
    ['NG', 'Nigeria'],
    ['EG', 'Egypt'],
    ['IR', 'Iran'],
    ['TR', 'Turkey'],
    ['TH', 'Thailand'],
    ['ID', 'Indonesia'],
    ['PK', 'Pakistan'],
    ['SA', 'Saudi Arabia'],
    ['VN', 'Vietnam'],
    ['ES', 'Spain'],
    ['DZ', 'Algeria'],
    ['MA', 'Morocco'],
    ['PH', 'Philippines'],
    ['ET', 'Ethiopia'],
    ['KZ', 'Kazakhstan'],
    ['TZ', 'Tanzania, United Republic of'],
    ['IQ', 'Iraq'],
    ['TH', 'Thailand'],
    ['KE', 'Kenya'],
    ['CO', 'Colombia'],
    ['AR', 'Argentina'],
    ['AE', 'United Arab Emirates'],
    ['ZA', 'South Africa'],
    ['MM', 'Myanmar'],
    ['SD', 'Sudan'],
    ['PL', 'Poland'],
    ['UKR', 'Ukraine'],
    ['AF', 'Afghanistan'],
    ['NE', 'Niger'],
    ['YEMEN', 'Yemen'],
    ['MZ', 'Mozambique'],
    ['NP', 'Nepal'],
    ['TW', 'Taiwan, Province of China'],
    ['MG', 'Madagascar'],
    ['CM', 'Cameroon'],
    ['CI', "Côte d'Ivoire"],
    ['AU', 'Australia'],
    ['PE', 'Peru'],
  ]);

  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [is_error, showErrors] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [apiError, setApiError] = useState(false);

  const setSystemProgressContent = useSetRecoilState(systemProcessStatus);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (
    data: FieldValues,
    event?: React.BaseSyntheticEvent,
  ) => {
    event?.preventDefault();
    // check for errors
    if (errors.email || errors.password) {
      showErrors(true);
    } else {
      try {
        setLoading(true);
        const response = await AxiosProxy.patch('/user/client', { user: data });

        if (response.status == 200) {
          updater({
            email: response.data.email,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            country: response.data.country,
            address: response.data.address,
            city: response.data.address,
            companyName: response.data.companyName,
          });
          setSystemProgressContent({
            show: true,
            message: `User updated success`,
            title: 'Account Update',
            success: true,
          });
        }
      } catch (err) {
        setApiError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-12'>
        <div className='pb-12'>
          <h2 className='text-2xl font-semibold leading-7 text-gray-900 dark:text-gray-100'>
            Personal Information
          </h2>
          <p className='mt-1 text-md leading-6 text-gray-600 dark:text-gray-200'>
            Use a permanent address where you can receive mail.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
              >
                First name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  id='first-name'
                  defaultValue={firstName}
                  {...register('firstName', { required: true, maxLength: 80 })}
                  autoComplete='given-name'
                  className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
              >
                Last name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('lastName', { required: true, maxLength: 80 })}
                  defaultValue={lastName}
                  autoComplete='family-name'
                  className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
                />
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  defaultValue={email}
                  readOnly
                  autoComplete='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
              </div>
            </div>

            <div className='sm:col-span-2 sm:col-start-1'>
              <label
                htmlFor='company_name'
                className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
              >
                Company Name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('companyName', {
                    required: true,
                    maxLength: 80,
                  })}
                  defaultValue={companyName}
                  autoComplete='address-level2'
                  className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='country'
                className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
              >
                Country
              </label>
              <div className='mt-2'>
                <select
                  id='country'
                  defaultValue={country}
                  autoComplete='country-name'
                  {...register('country', { required: true, maxLength: 80 })}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  {Array.from(countryMap.entries()).map(([code, scountry]) =>
                    scountry == country ? (
                      <option selected key={code} value={code}>
                        {scountry}
                      </option>
                    ) : (
                      <option value={code} key={code}>
                        {scountry}
                      </option>
                    ),
                  )}
                </select>
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='address'
                className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
              >
                Street address
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  id='address'
                  defaultValue={address}
                  {...register('address', { required: false, maxLength: 80 })}
                  autoComplete='street-address'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
              </div>
            </div>

            <div className='sm:col-span-2 sm:col-start-1'>
              <label
                htmlFor='city'
                className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
              >
                City
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  id='city'
                  defaultValue={city}
                  {...register('city', { required: false, maxLength: 80 })}
                  autoComplete='address-level2'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-start gap-x-6'>
        <button
          type='submit'
          disabled={loading}
          className='rounded-full inline-flex items-center space-x-2 bg-indigo-500 px-8 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          {loading ? <ComponentSpinner /> : null}
          <span>Save Changes</span>
        </button>
      </div>
    </form>
  );
}
