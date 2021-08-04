import axios from "axios";

const api = axios.create({
  baseURL: "https://sheltered-beyond-43580.herokuapp.com",
});

export default api;
