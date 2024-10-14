import axios, { AxiosInstance, AxiosError } from 'axios';

const defaultBaseURL = import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com/';

const createApiClient = (baseURL?: string): AxiosInstance => {
    const apiClient = axios.create({
        baseURL: baseURL || defaultBaseURL,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    apiClient.interceptors.response.use(
        response => response,
        (error: AxiosError) => {
            console.error('API request failed:', error.message);
            return Promise.reject(error);
        }
    );

    return apiClient;
};

export default createApiClient;