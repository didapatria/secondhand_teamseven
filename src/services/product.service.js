import api from "./api";
import TokenService from "./token.service";

const create = (data) => {
  const user = TokenService.getUser();

  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("price", data.price);
  formData.append("categoryId", data.categoryId);
  formData.append("description", data.description);
  formData.append("images", data.images.files);

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
