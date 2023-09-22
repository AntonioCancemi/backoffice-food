import api from "../api";
const url = "http://localhost:8082/api/";
export const registerPostDTO = (data) => {
  return api.post(`${url}auth/register`, data);
};
export const loginPostDTO = (data) => {
  return api.post(`${url}auth/signin`, data);
};
export const getUserData = (username) => {
  return api.get(`${url}auth/${username}`);
};
