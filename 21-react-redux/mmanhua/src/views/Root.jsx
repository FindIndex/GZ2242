import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Root() {


  return (
    <section className="root">
      <nav className="nav">
        <NavLink to={"/"}>首页</NavLink> |
        <NavLink to={"/rank"}>排行</NavLink> |
        <NavLink to={"/cate"}>分类</NavLink> |
        <NavLink to={"/shelf"}>书架</NavLink>
      </nav>
      <Outlet />
    </section>
  );
}
