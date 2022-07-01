import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://apisecondhand.herokuapp.com/api/";

const getPublicContent = () => {
  return axios.get(`${API_URL}users`);
};

const getUserBoard = () => {
  return axios.get(`${API_URL}user/check`, { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
};
