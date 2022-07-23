import api from "./api";
import TokenService from "./token.service";

const create = (data) => {
  const user = TokenService.getUser();

  return api.post("product/save", data, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export default {
  create,
};
