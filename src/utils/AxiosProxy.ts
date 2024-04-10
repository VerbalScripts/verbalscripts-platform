import axios, { AxiosHeaders } from 'axios';
import { hostUrl } from '../../config';
import { GetOrStoreAuthToken } from './GetOrStoreAuthToken';
import { v4 as uuid } from 'uuid';

interface CustomHeaders extends AxiosHeaders {
  'x-token'?: string;
}

const token = GetOrStoreAuthToken();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const headers: CustomHeaders = {};
if (token) {
  headers['Authorization'] = `Bearer ${token}`;
} else {
  headers['x-token'] = uuid();
}

export default axios.create({
  baseURL: hostUrl,
  headers,
});
