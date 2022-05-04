import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API } from '../constants';

const request = (options: AxiosRequestConfig) =>
    axios
        .request(options)
        .then((res) => res.data)
        .catch((err) => {
            err.message = `request ${options.url} (${options.method}) --> ${err.message}`;
            throw err;
        });

export const apiRequest = (
    path: string,
    { method = 'get', data, params }: AxiosRequestConfig = {},
): Promise<AxiosResponse> => {
    return request({
        method,
        baseURL: API,
        url: path,
        data,
        params,
    });
};
