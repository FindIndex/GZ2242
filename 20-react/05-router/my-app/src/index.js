import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import "./index.css";

import Root from "./views/Root";
import About from "./views/About";
import Home from "./views/Home";
import User, { loader as rootLoader } from "./views/User";
import Article from "./views/Article";

import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./views/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "user/:userId",
        element: <User />,
        loader: rootLoader,
      },
      {
        path: "article",
        element: <Article />,
      },
    ],
  },
  ,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
