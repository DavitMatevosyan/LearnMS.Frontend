import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://localhost:1500', // somewhere here, move to config
    
});

axiosClient.interceptors.request.use(config => {  // these work like middlewares
    config.headers.Authorization = 'Bearer GAAGAGAGAG';

    return config;
 })

export default axiosClient
