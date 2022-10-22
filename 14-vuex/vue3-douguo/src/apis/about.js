import axios from "axios";

const getTest = () => {
  return axios.get("/test.json");
};

export { getTest };
