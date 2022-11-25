import React from "react";
import { Outlet, Link, NavLink, useLoaderData } from "react-router-dom";

// import { getContacts } from "../contacts";

export default function Root() {
  return (
    <section>
      <nav>
        <NavLink to={`/`}>home</NavLink> |<NavLink to={`/about`}>about</NavLink>{" "}
        |<NavLink to={`/user/123`}>/user/123</NavLink> |
        <NavLink to={`/user/456`}>/user/456</NavLink> |
        <NavLink to={`/article?id=123`}>/article?id=123</NavLink> |
        <NavLink to={`/article?id=456`}>/article?id=456</NavLink>
      </nav>
      <hr />
      <Outlet />
    </section>
  );
}
