import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
// redux
import { Provider } from "react-redux";
import store from "./store/index.js";

// router
import { createHashRouter, RouterProvider } from "react-router-dom";

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
    <RouterProvider router={router} />
  </Provider>
);
