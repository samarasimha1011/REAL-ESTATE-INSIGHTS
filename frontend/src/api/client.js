// frontend/src/api/client.js
import axios from "axios";

// Base URL of your backend API
const API_BASE_URL = "http://localhost:8080/api";

// Fetch all properties
export const fetchProperties = async () => {
  return axios.get(`${API_BASE_URL}/properties`);
};

// Fetch summary insights
export const fetchInsights = async () => {
  return axios.get(`${API_BASE_URL}/insights/summary`);
};

// Optional: Predict property price (example POST)
export const estimatePrice = async (payload) => {
  return axios.post(`${API_BASE_URL}/insights/estimate`, payload);
};
