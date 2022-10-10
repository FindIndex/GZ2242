import axios from "./axios";

// const getAppConfig = () => axios.get("config.json");

// const getAppInit = () => axios.get("init.json");

// $$$$$$$$$$$$$$$$$$
const getHomeRecommended = ({ offset = 0, limit = 10 } = {}) => {
  console.log(offset);
  return axios.get(`home/recommended/${offset}/${limit}`);
};

// export { getAppConfig, getAppInit };
export { getHomeRecommended };
