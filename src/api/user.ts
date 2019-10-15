import axios, { ResponseData } from './index';
import { AxiosPromise } from 'axios';

interface LoginReqArguIterface {
  user_name: string;
  password: number | string;
}

export const loginReq = (data: LoginReqArguIterface): AxiosPromise<ResponseData> => {
  return axios.request({
    url: '/api/user/login',
    data,
    method: 'POST',
  });
};
