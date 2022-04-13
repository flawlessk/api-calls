import axios from 'axios';
import { WEB_URL, WEB_URL_V1 } from './Config';


export const productsAPI = async () => {
  const results = await axios.get(WEB_URL + 'products');
  return results.data;
};

export const addProduct = async (data) => {
  const results = await axios.post(WEB_URL + 'products', data);
  console.log(results.data, "data")
  return results.data;
};

export const getProduct = async (id) => {
  const results = await axios.get(WEB_URL + `products/${id}`);
  console.log(results.data, "data1")
  return results.data;
};

export const updateProduct = async (id, data) => {
  const results = await axios.put(WEB_URL + `products/${id}`, data);
  console.log(results.data, "data2")
  return results.data;
};