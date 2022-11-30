import axios from "./axios.js";

export const getHomeBanner = () => axios.get("Banner");
export const getHomeRecommend = () => axios.get("HomeRecommend");
export const getComicDetail = (comic_id) =>
  axios.get("ComicDetail", {
    params: { comic_id },
  });
