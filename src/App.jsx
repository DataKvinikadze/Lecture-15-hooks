import { useState } from "react";
import "./App.css";
import MyComponent from "./component/MyComponent";

function App() {
  const [state, setState] = useState(false);

  const onClickHandler = () => {
    setState((prev) => !prev);
  };

  return (
    <>
      <h1>Hello World</h1>
      {state ? <MyComponent /> : null}
      <button onClick={onClickHandler}>Click Me!</button>
    </>
  );
}

export default App;
