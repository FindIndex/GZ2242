import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("home", Date.now());
  });
  return <div>Home page</div>;
}
