import React, { useState, useEffect } from "react";

import { getHomeBanner } from "@/api/index.js";

import { Button, Swiper, Image } from "react-vant";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  selectHomeRecommend,
  getHomeRecommendThunkCreator,
} from "@/store/homeSlice.js";

import "./Home.scss";

export default function Home() {
  const [banners, setbanners] = useState([]);

  const homeRecommend = useSelector(selectHomeRecommend);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      console.log("123");
      const { data } = await getHomeBanner();
      // console.log(data);
      setbanners(data.data);

      return () => {};
    })();
    if (!homeRecommend.length) {
      dispatch(getHomeRecommendThunkCreator());
    }
  }, []);
  return (
    <div className="home">
      {banners.length && (
        <Swiper autoplay={5000}>
          {banners.map((banner, index) => (
            <Swiper.Item key={banner.id}>
              <Image
                width="690rem"
                height="340rem"
                src={banner.img}
              />
            </Swiper.Item>
          ))}
        </Swiper>
      )}

      <ul>
        {homeRecommend.map((o) => {
          return (
            <li
              key={o.comic_id}
              onClick={() => navigate("/detail/" + o.comic_id)}
            >
              <Image width="690rem" height="340rem" src={o.img} />
              <h3>{o.title}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
