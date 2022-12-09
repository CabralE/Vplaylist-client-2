import axios from "axios";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

//http://localhost:3001/api
//https://ec-vlist-server.herokuapp.com
//https://vplayserver-production.up.railway.app
const api = axios.create({
  baseURL: "https://vplayserver-production.up.railway.app",
});

api.interceptors.request.use(
  async function (config) {
    config.headers["Authorization"] = await getToken();
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;
