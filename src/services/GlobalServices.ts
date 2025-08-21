import axios, { type AxiosResponse } from "axios";
import { getHeaderInfo } from "../utilities/ApiHeaders";
import { Env } from "../config/Env";

const axiosInstance = axios.create({
  baseURL: Env.API_URL,
});

const handleResponse = async (response: AxiosResponse) => {
  if (response.status === 401) {
    return Promise.reject(response.data);
  }
  if (
    response.status === 200 ||
    response.status === 201 ||
    response.status === 204
  ) {
    return response.data;
  }
  return Promise.reject(response.data);
};

export const get = async function <T>(url: string, params: T) {
  const header = getHeaderInfo();
  try {
    const response = await axiosInstance.get(url, {
      ...header,
      params,
    });
    return handleResponse(response);
  } catch (err: any) {
    return handleResponse(err?.response);
  }
};
