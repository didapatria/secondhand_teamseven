import axios from "axios";

const instance = axios.create({
  baseURL: "https://apisecondhand.herokuapp.com/api/",
});

export default instance;
