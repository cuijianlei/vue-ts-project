import axios, { ResponseData } from './index';
import { AxiosPromise } from 'axios';

interface LoginReqArguIterface {
  user_name: string;
  password: number | string;
}

export const loginReq = (data: LoginReqArguIterface): AxiosPromise<ResponseData> => {
  return axios.request({
    url: '/user/login',
    data,
    method: 'POST',
  });
};

interface GetInfoReqArguInterface {
  user_id: string;
}

export const getInfoReq = (data: GetInfoReqArguInterface): AxiosPromise<ResponseData> => {
  return axios.request({
    url: '/api/user/get_info',
    data,
    method: 'POST',
  });
};
