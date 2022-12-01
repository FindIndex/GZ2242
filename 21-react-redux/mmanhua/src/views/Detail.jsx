import React, { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";

import { getComicDetail } from "@/api/index.js";
import { add, remove, selectBooks } from "@/store/shelfSlice.js";
import { useSelector, useDispatch } from "react-redux";

export async function loader({ params }) {
  console.log(params.id);

  const { data } = await getComicDetail(params.id);
  //   const data = { name: "nick" };
  //   console.log(data);
  return data;
}

export default function Detail() {
  const dispatch = useDispatch();

  const { data: detail } = useLoaderData();

  const shelfBooks = useSelector(selectBooks);

  // useEffect(() => {
  //   console.log(shelfBooks);
  // }, [shelfBooks]);

  return (
    <div>
      <h1>{detail.title}</h1>
      <p>{detail.evaluate}</p>
      {shelfBooks.some((o) => o.id === detail.id) ? (
        <button onClick={() => dispatch(remove(detail.id))}>
          取消
        </button>
      ) : (
        <button onClick={() => dispatch(add(detail))}>追漫</button>
      )}
    </div>
  );
}
