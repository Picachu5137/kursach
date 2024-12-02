import axios from "axios";


export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.example.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});
