import api from "./api";

const products = (search, page, size) => {
  return api.get(`s/search=${search}&page=${page}&size=${size}`);
};

const product = (id) => {
  return api.get(`/${id}/images`);
};

export default {
  products,
  product,
};
