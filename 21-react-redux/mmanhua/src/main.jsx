import React from "react";
import ReactDOM from "react-dom/client";
import '@vant/touch-emulator';
// import App from "./App";
// import "./index.css";
// redux
import { Provider } from "react-redux";
import store from "./store/index.js";

// router
import { createHashRouter, RouterProvider } from "react-router-dom";

import LocalStorageSync from "./views/LocalStorageSync";

import Root from "./views/Root";
import Home from "./views/Home";
import Rank from "./views/Rank";
import Cate from "./views/Cate";
import Shelf from "./views/Shelf";
import Detail, { loader as detailLoader } from "./views/Detail";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "rank",
        element: <Rank />,
      },
      {
        path: "cate",
        element: <Cate />,
      },
      {
        path: "shelf",
        element: <Shelf />,
      },
    ],
  },
  {
    path: "detail/:id",
    element: <Detail />,
    loader: detailLoader,
  },
]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <LocalStorageSync />
    <RouterProvider router={router} />
  </Provider>
);



// mumu模拟器 x86架构 某些app闪退
// 安卓真机(11以下） 连接电脑热点（在同一个局域网）=> 配置代理
// sslpin 需要手机 root （手机虚拟机 Vmose pro）