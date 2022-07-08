import api from "./api";
import TokenService from "./token.service";

const register = (fullName, email, password) => {
  return api.post("register", {
    fullName,
    email,
    password,
  });
};

const login = (email, password) => {
  return api
    .post("login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.data.accessToken) {
        TokenService.setUser(response.data.data);
      }

      return response.data.data;
    });
};

const logout = () => {
  TokenService.removeUser();
};

export default {
  register,
  login,
  logout,
};
