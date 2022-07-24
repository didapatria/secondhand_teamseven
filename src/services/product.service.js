import api from "./api";
import TokenService from "./token.service";

const get = (id) => {
  return api.get(`product/${id}/detail`);
};

const create = (data) => {
  const user = TokenService.getUser();

  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("price", data.price);
  formData.append("categoryId", data.categoryId);
  formData.append("description", data.description);
  for (let i = 0; i < data.images.length; i += 1) {
    formData.append("images", data.images[i]);
  }
  formData.append("address", data.address);

  return api.post("product/save", formData, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

const update = (id, data) => {
  const user = TokenService.getUser();

  return api.put(`product/${id}/save`, data, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

const remove = (id) => {
  const user = TokenService.getUser();

  return api.delete(`product/${id}/delete`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
};

export default {
  get,
  create,
  update,
  remove,
};
