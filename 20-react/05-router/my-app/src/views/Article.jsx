import React from "react";
import { useSearchParams } from "react-router-dom";
export default function Article() {
  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("id"));

  return <div>Article</div>;
}
