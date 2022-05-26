import axios from 'axios';

const api = () => {
    const { API_KEY, BASE_URL } = process.env;

    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        params: {
            apiKey: API_KEY
        }
    })

    return axiosInstance;
}

export default api;
