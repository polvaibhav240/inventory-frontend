import axios from "axios";

const BASE_URL = "https://inventory-frontend-1-80l6.onrender.com/api/items";


// Configure axios
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Get all items
export const getItems = () => axios.get(API_URL);

// Add new item
export const addItem = (item) => axios.post(API_URL, item);

// Update item
export const updateItem = (id, item) => axios.put(`${API_URL}/${id}`, item);

// Delete item
export const deleteItem = (id) => {
  if (!id) {
    throw new Error('Item ID is required for deletion');
  }
  return axios.delete(`${API_URL}/${id}`);
};
