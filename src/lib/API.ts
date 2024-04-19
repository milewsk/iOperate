import axios, { CreateAxiosDefaults } from "axios";
import { AxiosResponse } from "axios";

// Axios instance

const axiosConfig: CreateAxiosDefaults = {
  baseURL: "",
  withCredentials: true,
};

const client = axios.create(axiosConfig);

client.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  }
);

const API = {
  get: async function <T>(URL: string, data?: undefined) {
    return await client.get<T, AxiosResponse<T>>(URL, data);
  },

  post: async function <T>(URL: string, data?: undefined) {
    return await client.post<T, AxiosResponse<T>>(URL, data);
  },

  put: async function <T>(URL: string, data?: undefined) {
    return await client.put<T, AxiosResponse<T>>(URL, data);
  },

  delete: async function <T>(URL: string, data?: undefined) {
    return await client.delete<T, AxiosResponse<T>>(URL, data);
  },
};

export default API;
