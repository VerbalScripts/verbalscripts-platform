'use client';

import AxiosProxy from '@/utils/AxiosProxy';
import { UserIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

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

        if (response.status == 201) {
          updater({
            email: response.data.email,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            country: response.data.country,
            address: response.data.address,
            city: response.data.address,
            companyName: response.data.companyName,
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
        <div className='border-b border-gray-900/10 pb-12'>
          <div className='py-5 mb-10'>
            <div className='h-16 w-16 md:w-24 md:h-24 bg-indigo-100 flex items-center justify-center rounded-full'>
              <UserIcon className='h-12 w-12 md:w-16 md:h-16 text-indigo-500' />
            </div>
          </div>
          <h2 className='text-2xl font-semibold leading-7 text-gray-900'>
            Personal Information
          </h2>
          <p className='mt-1 text-md leading-6 text-gray-600'>
            Use a permanent address where you can receive mail.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-gray-900'
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
                  className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Last name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('lastName', { required: true, maxLength: 80 })}
                  defaultValue={lastName}
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
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
                  className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2 sm:col-start-1'>
              <label
                htmlFor='company_name'
                className='block text-sm font-medium leading-6 text-gray-900'
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
                  className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='country'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Country
              </label>
              <div className='mt-2'>
                <select
                  id='country'
                  defaultValue={country}
                  autoComplete='country-name'
                  {...register('country', { required: true, maxLength: 80 })}
                  className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
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

            <div className='col-span-full'>
              <label
                htmlFor='address'
                className='block text-sm font-medium leading-6 text-gray-900'
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
                  className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2 sm:col-start-1'>
              <label
                htmlFor='city'
                className='block text-sm font-medium leading-6 text-gray-900'
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
                  className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='button'
          className='text-md px-4 py-2.5 font-semibold leading-6 text-gray-900'
        >
          Cancel
        </button>
        <button
          type='submit'
          disabled={loading}
          className='rounded-full bg-indigo-500 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          {loading ? (
            <div
              className='inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
              role='status'
            >
              <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                Loading...
              </span>
            </div>
          ) : null}
          Save Changes
        </button>
      </div>
    </form>
  );
}
