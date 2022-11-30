import React, { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";

import { getComicDetail } from "@/api/index.js";

export async function loader({ params }) {
  console.log(params.id);
  const { data } = await getComicDetail(params.id);
  //   const data = { name: "nick" };
  //   console.log(data);
  return data;
}

// export async function loader() {
//   const contacts = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: "nick", age: 17 });
//     }, 1000);
//   });
//   return { contacts };
// }

export default function Detail() {
  //   const { contacts } = useLoaderData();

  //   const { id } = useParams();
  //   const [detail, setdetail] = useState(null);
  const { data: detail } = useLoaderData();

  useEffect(() => {
    console.log(detail);
  }, []);

  return (
    <div>
      <h1>{detail.title}</h1>
      <p>{detail.evaluate}</p>
    </div>
  );
}
