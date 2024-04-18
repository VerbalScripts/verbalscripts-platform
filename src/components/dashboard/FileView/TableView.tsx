import { DocumentIcon, FolderIcon } from '@heroicons/react/24/outline';
import { Checkbox, Table } from 'flowbite-react';
import React, { useState } from 'react';
import TableMenuDropDown from '../TableMenuDropDown';
import { bytesToMB } from '@/utils/bytesToMb';
import { classNames } from '@/utils/classNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import AxiosProxy from '@/utils/AxiosProxy';

interface TableViewProps {
  folders: OrderFolder[];
  orders: OrderFile[];
  showFolders: boolean;
  openFolder: (arg0: { id: string; label: string }) => void;
  callback: (arg0: number) => void;
  updatedSelectedFiles: (
    id: string,
    remove: boolean,
    clearAll: boolean,
  ) => void;
  selectedFiles: string[];
  renameFile: (id: string) => void;
  renameFolder: (id: string) => void;
  removeFile: (id: string) => void;
  isNavigating: boolean;
  selectedFolderId: string;
}

export default function TableView({
  folders,
  orders,
  openFolder,
  showFolders,
  updatedSelectedFiles,
  selectedFiles,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renameFile,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renameFolder,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeFile,
  callback,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isNavigating,
  selectedFolderId,
}: TableViewProps) {
  const [draggedRowIndex, setDraggedRowIndex] = useState<number | null>(null);

  // for setting dragged over folders
  const [draggedOverIndex, setDraggedOverIndex] = useState<number | null>(null);

  const handleDragStart = (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event: DragEvent<Element>,
    rowIndex: number,
  ) => {
    setDraggedRowIndex(rowIndex);
  };

  const handleDragEnd = async () => {
    // Handle row reordering logic (provided by onRowReorder)

    setTimeout(() => {
      setDraggedOverIndex(null);
      setDraggedRowIndex(null);
    });
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handelDragOverHandler = (ev: DragEvent<Element>, rowIndex: number) => {
    ev.preventDefault();
    setDraggedOverIndex(rowIndex);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onDropHandler = async (ev: DragEvent<Element>) => {
    console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    // check for null
    if (draggedRowIndex == null || draggedOverIndex == null) return false;

    const folder = folders[draggedOverIndex];
    const file = orders[draggedRowIndex];

    if (typeof folder == 'undefined' || typeof file == 'undefined')
      return false;

    const status = await moveFileIntoFolder(folder.id, file.id);

    if (status) {
      // update parent array
      callback(draggedRowIndex);
    }

    setDraggedOverIndex(null);
    setDraggedRowIndex(null);
  };

  const moveFileIntoFolder = async (folderId: string, fileId: string) => {
    try {
      const response = await AxiosProxy.patch(`/files/${fileId}`, { folderId });

      if (response.status == 200) {
        if (response.data.responseCode == 0) {
          return true;
        }
      }
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const handelDragEnterHandler = (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ev: DragEvent<Element>,
  ) => {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    // setDraggedOverIndex(rowIndex);
  };

  // const GoToDashboard = () => {
  //   router.push('/dashboard/pending?new=true');
  // }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handelDragLeaveHandler = (ev: DragEvent<Element>) => {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    setDraggedOverIndex(null);
  };

  const selectAllOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (((event as any).target as HTMLInputElement).checked) {
      updatedSelectedFiles('', false, true);
    } else {
      updatedSelectedFiles('', true, true);
    }
  };

  const isSelected = (id: string) => {
    const result = selectedFiles.find((item: string) => item == id);
    return result == undefined ? false : true;
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const addSelected = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if ((event.target as HTMLInputElement).checked) {
      updatedSelectedFiles(id, false, false);
    } else {
      updatedSelectedFiles(id, true, false);
    }
  };

  return (
    <div className='px-6 md:px-16 xl:px-16 overflow-x-auto min-h-svh'>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className='p-4'>
            <Checkbox
              disabled={folders.length == 0 && orders.length == 0}
              onChange={selectAllOnChange}
            />
          </Table.HeadCell>
          <Table.HeadCell>File Name</Table.HeadCell>
          <Table.HeadCell>Size</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell>
            <span className='sr-only'>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {showFolders &&
            folders.map((folder, index) => (
              <Table.Row
                key={folder.id}
                onDragEnter={handelDragEnterHandler}
                onDragLeave={handelDragLeaveHandler}
                onDrop={onDropHandler}
                onDragOver={(event) => handelDragOverHandler(event, index)}
                className={classNames(
                  'transition dark:border-gray-700 dark:bg-gray-800 py-2',
                  isNavigating && selectedFolderId == folder.id
                    ? 'bg-gray-300'
                    : 'bg-white',
                  draggedOverIndex == index
                    ? 'bg-indigo-100 border-dashed'
                    : '',
                )}
              >
                <Table.Cell className='px-4 py-0'>
                  {/* <Checkbox /> */}
                </Table.Cell>
                <Table.Cell>
                  <div
                    className=' cursor-pointer flex gap-x-3 items-center'
                    onClick={() =>
                      openFolder({ id: folder.id, label: folder.label })
                    }
                  >
                    <FolderIcon className='text-gray-700 h-8 w-8 items-center' />
                    <span className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                      {folder.label}
                    </span>
                    {draggedOverIndex == index ? (
                      <span className='flex gap-x-5 ml-10'>
                        <span className=''>
                          <FontAwesomeIcon
                            icon={faCopy}
                            className='text-indigo-500 w-6 h-6'
                          />
                        </span>
                        <span className='text-gray-600 font-semibold text-md'>
                          Release to Move Into {folder.label}
                        </span>
                      </span>
                    ) : null}
                  </div>
                </Table.Cell>
                <Table.Cell>--</Table.Cell>
                <Table.Cell>Folder</Table.Cell>
                <Table.Cell>---</Table.Cell>
                <Table.Cell>
                  <div className='flex items-center gap-x-1'>
                    <TableMenuDropDown
                      remove={() => {}}
                      rename={() => renameFolder(folder.id)}
                      duplicate={() => {}}
                      share={() => {}}
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          {orders.map((order, index) => (
            <Table.Row
              draggable={true}
              onDragStart={(event) => handleDragStart(event, index)}
              onDragEnd={handleDragEnd}
              key={order.fileId}
              className={classNames(
                'bg-white dark:border-gray-700 dark:bg-gray-800',
                draggedRowIndex == index ? 'bg-gray-200' : '',
              )}
            >
              <Table.Cell className='px-4 py-2'>
                <Checkbox
                  onChange={(event) => addSelected(event, order.id)}
                  checked={isSelected(order.id)}
                />
              </Table.Cell>
              <Table.Cell className='flex gap-x-3 items-center py-2'>
                <DocumentIcon className='text-gray-700 h-7 w-7' />
                <span className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  {order.label}
                </span>
              </Table.Cell>
              <Table.Cell className='py-2'>{bytesToMB(order.size)}</Table.Cell>
              <Table.Cell className='py-2'>
                <span className='uppercase'>
                  {order.mimetype.split('/')[1]}
                </span>
              </Table.Cell>
              <Table.Cell className='py-2'>
                <span className='capitalize bg-indigo-100 text-sm text-indigo-500 px-3 py-1.5 rounded-xl'>
                  {order.status}
                </span>
              </Table.Cell>
              <Table.Cell className='py-2'>
                <div className='flex items-center gap-x-1'>
                  <TableMenuDropDown
                    // remove={() => removeFile(order.id)}
                    // rename={() => renameFile(order.id)}
                    // duplicate={() => {}}
                    // share={() => {}}
                    remove={() => {}}
                    rename={() => {}}
                    duplicate={() => {}}
                    share={() => {}}
                  />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
