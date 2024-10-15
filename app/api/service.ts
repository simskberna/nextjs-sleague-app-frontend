import axios, { AxiosRequestConfig,AxiosResponse } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers:{
        'Content-Type': 'application/json',
    },
});

const _get = <T>(url:string,config?:AxiosRequestConfig):Promise<AxiosResponse<T>> => {
    return apiClient.get<T>(url,config);
}

export { _get };