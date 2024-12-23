import axios from "axios";


export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});
