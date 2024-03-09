import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { BASE_URL } from "../Constants/Urls"

function ApiClient()  {
    const client = axios.create({
        baseURL: BASE_URL
    });

    client.defaults.headers.post['Content-Type'] = 'application/json';

    client.interceptors.request.use(config => {  // these work like middlewares
        config.headers["Content-Type"] = 'application/json';
        // config.headers.Authorization = 'Bearer GAAGAGAGAG';

        return config;
     })


    const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
        return client.get<T>(url, config);
      };
    
    const post = async <T>(url: string, data?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
        return client.post<T>(url, data, config);
    };

    const handleErrors = (response: AxiosResponse) => {
    if (!response.data.success) {
        // Handle error scenarios
        console.error('API error:', response.data.error);
    }
    return response;
    };

    return { get, post, handleErrors };
}
    
export default ApiClient;
