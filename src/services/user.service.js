import api from "./api";
import authHeader from "./auth-header";
import tokenService from "./token.service";

const getPublicContent = () => {
  return api.get("users");
};

const getUserBoard = () => {
  return api.get("user-info", { headers: authHeader() });
};

const updateUser = (data) => {
  const user = tokenService.getUser();

  return api.put("user/update", data, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export default {
  getPublicContent,
  getUserBoard,
  updateUser,
};
