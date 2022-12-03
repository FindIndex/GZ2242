import React, { useState } from "react";

import {
  useGetRankListQuery,
  useGetRankListPostTestMutation,
} from "../store/apiSlice.js";

export default function Rank() {
  const [type, setType] = useState(3);

  const {
    data: ranks,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetRankListQuery(type);

  const [addNewPost, { isPostLoading }] =
    useGetRankListPostTestMutation(type);

  return (
    <div>
      {[3, 4, 1].map((o) => (
        <button onClick={() => setType(o)}>{o}</button>
      ))}
      <div>Rank {JSON.stringify(ranks)}</div>

      <hr />

      <button
        onClick={async () => {
          await addNewPost({ name: "nick", age: 17 });
          refetch();
        }}
      >
        post
      </button>
    </div>
  );
}
