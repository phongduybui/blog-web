import axios from 'axios';

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_API,
});

export const fetcher = (url: string) =>
  request.get(url).then((res) => res.data);
