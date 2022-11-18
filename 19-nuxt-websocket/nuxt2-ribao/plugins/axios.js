import axios from "axios";
const myaxios = axios.create({
  baseURL: "https://apis.netstart.cn/zhihudaily/",
  // ...
});
myaxios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // ...
  }
);

export default myaxios;
