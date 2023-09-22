import api from "../api";
const url = "http://localhost:8082/api/";

export const getAllCategories = (config = {}) => {
  return api.get(`${url}categories`, config);
};

export const getCategoryById = (id, config = {}) => {
  return api.get(`${url}categories/${id}`, config);
};

export const deleteCategory = (id, config = {}) => {
  return api.del(`${url}categories/${id}`, config);
};

export const updateCategory = (id, updatedCategory, config = {}) => {
  return api.put(`${url}categories/${id}`, updatedCategory, config);
};

export const createCategory = (id, newCategory, config = {}) => {
  return api.post(`${url}categories/${id}`, newCategory, config);
};
