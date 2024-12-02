import React from "react";

import { apiClient } from "./ApiHandler";
import { data } from "react-router-dom";


export async function handleLogin(username, password) {
    try {
        const response = await apiClient.post(data = {
            username,
            password,
        });

        localStorage.setItem("authToken", response.data.token);

        return { success: true, token: response.data.token };
    } catch (err) {
        return { success: false, message: "Invalid credentials" };
    }
};