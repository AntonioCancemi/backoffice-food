import api from "../api";
const url = "http://localhost:8082/api/";

export const getAllProducts = (config = {}) => {
  return api.get(`${url}menuitems`, config);
};

export const getProductsGroupByCategory = (config = {}) => {
  return api.get(`${url}menuitems/category`, config);
};

export const getProductById = (id, config = {}) => {
  return api.get(`${url}menuitems/${id}`, config);
};

export const deleteProduct = (id, config = {}) => {
  return api.del(`${url}menuitems/${id}`, config);
};

export const updateProduct = (id, updatedProduct, config = {}) => {
  return api.put(`${url}menuitems/${id}`, updatedProduct, config);
};

export const createProduct = (id, newProduct, config = {}) => {
  return api.post(`${url}menuitems/${id}`, newProduct, config);
};
