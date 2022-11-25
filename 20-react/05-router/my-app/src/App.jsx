import Counter from "./components/Counter";
import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("反动派都是");

  useEffect(() => {
    console.log("app load");
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>hello</p>
        <Counter msg={msg} />
        <Counter msg={msg} />
      </header>
    </div>
  );
}

export default App;
