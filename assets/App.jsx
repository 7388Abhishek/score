import { useState } from "react";
import "./App.css";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <div className="parent">
        <h1>Score 1</h1>
      <h1>{count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Click</button>
      </div>
      <div className="child">
        <h1>Score 2</h1>
       <h1>{count2}</h1>
      <button onClick={() => setCount2(count2 + 1)}>Click</button>
      </div>
    </>
  );
}

export default App;
