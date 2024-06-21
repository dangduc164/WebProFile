import axios, { Method, AxiosRequestConfig } from "axios";
import getConfig from "next/config";

export type Response<T> = {
  code: number;
  data?: T;
  errorCode?: string;
  message?: string;
};

export type ResList<T> = {
  rows: T[];
  total: number;
};
export type FilterList<T> = {
  filter: any;
  rows: T[];
};

export const fetchApi = async <T>(
  url: string,
  method: Method = "get",
  body?: any,
  headers?: any,
  responseType?: any
): Promise<Response<T>> => {
  let token = localStorage.getItem("token") || "";

  try {
    let opts: AxiosRequestConfig = {
      method,
      url: `${process.env.NEXT_PUBLIC_API_URL.trim()}${url}`,
      timeout: 1 * 1000 * 60, //1phut
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token,
      },
    };
    if (headers) {
      opts = {
        ...opts,
        headers: {
          ...headers,
          [headers.key]: headers.value,
        },
      };
    }
    if (responseType) {
      opts.responseType = responseType;
    }
    if (method === "get") {
      opts.params = body;
    } else {
      opts.data = body;
    }
    let fetchdata = await axios(opts);
    return fetchdata.data;
    // if (fetchdata.data.code !== 200) {
    // }

    return fetchdata.data;
  } catch (error: any) {
    let { response } = error;
    if (response) {
      return response.data;
    }
    return error;
  }
};

export const fetchApiUpload = async <T>(
  url: string,
  body: FormData
): Promise<Response<T>> => {
  let token = localStorage.getItem("token") || "";
  const { publicRuntimeConfig } = getConfig();
  try {
    let opts: AxiosRequestConfig = {
      method: "POST",
      url: `${publicRuntimeConfig.apiUpload.trim()}${url}`,
      timeout: 1 * 1000 * 60, //1phut
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        token: token,
      },
    };
    opts.data = body;
    let fetchdata = await axios(opts);
    if (fetchdata.data.code !== 200) {
      return fetchdata.data;
    }
    return fetchdata.data;
  } catch (error: any) {
    let { response } = error;
    if (response) {
      return response.data;
    }
    return error;
  }
};
