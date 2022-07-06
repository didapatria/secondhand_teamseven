import axios from "axios";

const API_URL = "https://apisecondhand.herokuapp.com/api/";

const register = (username, email, password) => {
  return axios.post(`${API_URL}register`, {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(
      `${API_URL}login`,
      {
        username,
        password,
      },
      { headers: { "content-type": "multipart/form-data" } },
    )
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response, "local");
        // console.log(response.data, "data local");
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
