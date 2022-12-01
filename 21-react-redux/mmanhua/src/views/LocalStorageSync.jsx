import React, { useEffect } from "react";
import { selectBooks } from "@/store/shelfSlice.js";
import { useSelector } from "react-redux";
export default function LocalStorageSync() {
  const shelfBooks = useSelector(selectBooks);

  useEffect(() => {
    // console.log("Store mount");
    // console.log(shelfBooks);
    window.localStorage.setItem(
      "shelfBooks",
      JSON.stringify(shelfBooks)
    );
    return () => {
      //   console.log("Store unmount");
    };
  }, [shelfBooks]);

  return null;
}
