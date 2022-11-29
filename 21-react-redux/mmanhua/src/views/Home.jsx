import React, { useState, useEffect } from "react";

import { getHomeBanner } from "@/api/index.js";

export default function Home() {
  const [banner, setbanner] = useState([]);

  useEffect(() => {
    (async () => {
      console.log("123");
      const { data } = await getHomeBanner();
      // console.log(data);
      setbanner(data.data);

      return () => {};
    })();
  }, []);
  return <div>Home {JSON.stringify(banner)}</div>;
}
