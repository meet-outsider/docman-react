import axios, { AxiosRequestConfig } from "axios";
import cache from "@/utils/cache";
import { openAlert } from '@/features/alert/alertSlice';
import store from "@/config/store";

export interface RequestOption extends AxiosRequestConfig {
  headers?: { [key: string]: string };
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

// const skipUrls = ["/login", "/registry"]
// 添加请求拦截器
axiosInstance.interceptors.request.use(function (config) {
  const token = cache.getToken();
  if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['x-token'] = token; // 设置 x-token 请求头
  return config;

}, function (error) {
  console.log("请求错误");

  // message.error(error)
  // 对请求错误做些什么
  // return Promise.reject(error);
  return error;
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(response => {
  // 如果响应状态码是 200，直接返回响应数据
  if (response.status === 200) {
    return response;
  }
  // message.info(`${response.status}: ${response.data}`);
  // 如果响应状态码是其他值，抛出异常
  throw new Error(`HTTP error status ${response.status}`);
},
  error => {
    const { response } = error
    const { dispatch } = store;
    dispatch(openAlert('nothing todo !just notify you'));
    console.log(response.status);
    console.log(response.data);
  });
