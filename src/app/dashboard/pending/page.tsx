'use client';

import FileEmpty from '@/components/dashboard/FileEmpty';
import React, { useEffect, useState } from 'react';
import { Checkbox, Table } from 'flowbite-react';
import axios, { AxiosHeaders, AxiosResponse } from 'axios';
import { hostUrl } from '../../../../config';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';
import { v4 as uuid } from 'uuid';
import TableMenuDropDown from '@/components/dashboard/TableMenuDropDown';
import LoadSpinner from '@/components/dashboard/LoadSpinner';
import { bytesToMB } from '@/utils/bytesToMb';

export default function Page() {
  const [orders, setOrders] = useState<OrderFile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  interface CustomHeaders extends AxiosHeaders {
    'x-token'?: string;
  }

  useEffect(() => {
    const fetchPendingOrders = async () => {
      const token = GetOrStoreAuthToken();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const headers: CustomHeaders = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      } else {
        headers['x-token'] = uuid();
      }

      setLoading(true);

      const response: AxiosResponse = await axios.get(`${hostUrl}/files`, {
        headers,
      });

      if (response.status == 200) {
        setOrders(response.data);
      }
      setLoading(false);
    };

    if (orders.length == 0) {
      fetchPendingOrders();
    }
  }, [orders]);

  return (
    <div className='px-6 md:px-16 xl:px-16 py-8'>
      {loading ? (
        <LoadSpinner />
      ) : orders.length == 0 ? (
        <FileEmpty />
      ) : (
        <div>
          <div className='flex  justify-end mb-8'>
            <button className='rounded-full bg-indigo-500 font-semibold px-4 py-2 text-white'>
              Add Files
            </button>
          </div>
          <div className='overflow-x-auto'>
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell className='p-4'>
                  <Checkbox />
                </Table.HeadCell>
                <Table.HeadCell>File Name</Table.HeadCell>
                <Table.HeadCell>Size</Table.HeadCell>
                <Table.HeadCell>Duration</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
                <Table.HeadCell>
                  <span className='sr-only'>Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className='divide-y'>
                {orders.map((order) => (
                  <Table.Row
                    key={order.fileId}
                    className='bg-white dark:border-gray-700 dark:bg-gray-800'
                  >
                    <Table.Cell className='p-4'>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                      {order.label}
                    </Table.Cell>
                    <Table.Cell>{bytesToMB(order.size)}</Table.Cell>
                    <Table.Cell>
                      <span className='uppercase'>
                        {order.mimetype.split('/')[1]}
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <div className='flex items-center gap-x-1'>
                        <TableMenuDropDown />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}
