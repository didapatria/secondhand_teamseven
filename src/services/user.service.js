import api from "./api";
import authHeader from "./auth-header";

const getPublicContent = () => {
  return api.get("users");
};

const getUserBoard = () => {
  return api.get("user/check", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
};
