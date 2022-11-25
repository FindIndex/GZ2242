import React, { useEffect } from "react";
import { Routes, Route, useParams, useLoaderData } from "react-router-dom";

export async function loader() {
  const contacts = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "nick", age: 17 });
    }, 5000);
  });
  return { contacts };
}

export default function User() {
  const { contacts } = useLoaderData();
  // 等到获取到数据之后再跳转路由
  console.log(contacts);

  let { userId } = useParams();
  useEffect(function () {
    console.log(userId);
  });

  return (
    <div>
      User {userId} <p>{JSON.stringify(contacts)}</p>
    </div>
  );
}
