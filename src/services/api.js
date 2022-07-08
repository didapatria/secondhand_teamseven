import axios from "axios";

const instance = axios.create({
  baseURL: "https://apisecondhand.herokuapp.com/api/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default instance;
