import axios from "axios";

const API = "http://localhost:5000/api";

// 🛍️ Get all products
export const getProducts = () => {
  return axios.get(`${API}/products`);
};

// 📄 Get single product
export const getProduct = (id) => {
  return axios.get(`${API}/products`)
    .then(res => ({
      data: res.data.find(p => p._id === id)
    }));
};