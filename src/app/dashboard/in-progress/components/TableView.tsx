import { classNames } from '@/utils/classNames';
import { Table } from 'flowbite-react';
import React from 'react';
import moment from 'moment';

interface Props {
  orders: InprogressOrder[];
  openOrder: (id: string) => void;
}

export default function TableView({ orders, openOrder }: Props) {
  return (
    <div className='mt-2 overflow-x-auto min-h-svh'>
      <Table hoverable>
        <Table.Head className='dark:border-gray-700 bg-gray-100 dark:bg-zinc-800'>
          <Table.HeadCell>
            <span className='footer-title'>Order Id</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className='footer-title'>Progress</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className='footer-title'>Payment</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className='footer-title'>Created At</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {orders.map((order) => (
            <Table.Row
              is='a'
              onClick={() => openOrder(order.id)}
              key={order.id}
              className={classNames(
                'bg-white cursor-pointer dark:border-gray-700 dark:bg-gray-800',
              )}
            >
              <Table.Cell className='flex items-center space-x-3'>
                <span className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  #{order.orderId || order.id}
                </span>
                <span className='bg-indigo-500 flex items-center font-bold justify-center  rounded-full w-5 h-5 text-white'>
                  {order.files.length}
                </span>
              </Table.Cell>

              <Table.Cell className='py-1'>
                <span className='capitalize bg-indigo-50 text-sm font-semibold text-indigo-500 px-3 py-1.5 rounded-xl'>
                  {order.orderStatus}
                </span>
              </Table.Cell>

              <Table.Cell className=''>
                <span className='py-1.5 bg-orange-50 text-orange-500 px-2 font-semibold rounded-xl'>
                  {'Not Paid'}
                </span>
              </Table.Cell>
              <Table.Cell className='py-1'>
                <span className='whitespace-nowrap font-medium text-sm text-gray-900 dark:text-white'>
                  {moment(order.createdAt).format('L')}
                </span>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
