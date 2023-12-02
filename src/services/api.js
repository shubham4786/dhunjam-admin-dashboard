import axios from "axios";

const API_BASE_URL = "https://stg.dhunjam.in/account/admin";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginAdmin = (username, password) =>
  api.post("/login", { username, password });

export const getAdminDetails = (id) => api.get(`/${id}`);

export const updatePrice = (id, data) => api.put(`/${id}`, data);
