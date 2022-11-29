import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment } from "./store/counterSlice";

function App() {
  const [count, setCount] = useState(0);
  const c = useSelector(selectCount);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("app");
  });
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p onClick={() => dispatch(increment())}>{c}</p>
    </div>
  );
}

export default App;
