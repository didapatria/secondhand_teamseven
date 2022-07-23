import api from "./api";
import TokenService from "./token.service";

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

export default {
  create,
};
