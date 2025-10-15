import axios from "axios";

const API_URL = "http://localhost:5000/api/items";

// Get all items
export const getItems = () => axios.get(API_URL);

// Add new item
export const addItem = (item) => axios.post(API_URL, item);

// Update item
export const updateItem = (id, item) => axios.put(`${API_URL}/${id}`, item);

// Delete item
export const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);
