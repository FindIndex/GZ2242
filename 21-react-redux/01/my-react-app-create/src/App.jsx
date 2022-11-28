import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { selectCount } from "./store/counterSlice";
import Child from "./components/Child.jsx";

function App() {
  const count = useSelector(selectCount);

  useEffect(() => {
    console.log("app");
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>react-redux</h1>
        <p>App组件: {count}</p>
      </header>
      <hr />
      <Child />
    </div>
  );
}

export default App;
