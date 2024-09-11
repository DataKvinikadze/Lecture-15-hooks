import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log("Hello World");
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Click Me!</button>
    </>
  );
}

export default App;
