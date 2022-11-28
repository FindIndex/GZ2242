import React from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { selectCount, selectMsg } from "./store/counterSlice";

function App() {
  const count = useSelector(selectCount);
  const msg = useSelector(selectMsg);
  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
