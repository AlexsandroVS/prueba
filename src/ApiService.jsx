// src/ApiService.js
import axios from 'axios';

const API_ROOT = "https://django-railway-7fog.onrender.com/api/v1/";

const ApiService = {
    getAll: (endpoint) => axios.get(`${API_ROOT}${endpoint}`),
    getOne: (endpoint, id) => axios.get(`${API_ROOT}${endpoint}/${id}/`),
    create: (endpoint, data) => axios.post(`${API_ROOT}${endpoint}/`, data),
    update: (endpoint, id, data) => axios.put(`${API_ROOT}${endpoint}/${id}/`, data),
    delete: (endpoint, id) => axios.delete(`${API_ROOT}${endpoint}/${id}/`),
};

export default ApiService;
