import axios from "axios";

const API_URL = "https://apisecondhand.herokuapp.com/api/product";

const products = (search, page, size) => {
  return axios.get(`${API_URL}s/search=${search}&page=${page}&size=${size}`);
};

const product = (id) => {
  return axios.get(`${API_URL}/${id}/images`);
};

export default {
  products,
  product,
};
