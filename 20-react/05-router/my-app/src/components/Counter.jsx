import React, { useState } from "react";
import "./Counter.css";
export default function Counter() {
  const [count, setCount] = useState(10);
  return (
    <div className="counter" onClick={() => setCount(count + 1)}>
      you clicked {count} times
    </div>
  );
}
