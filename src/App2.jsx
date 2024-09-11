import React, { useState } from "react";
import "./App.css";

const App2 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn((prev) => !prev);
    console.log(isOn);
  };
  return (
    <>
      <div className={`container ${isOn ? "light-on" : "light-off"}`}>
        {/* ON or OFF */}
        <p>This Light is {isOn ? "ON" : "OFF"}</p>
        <button onClick={toggleLight}>Turn {isOn ? "OFF" : "ON"}</button>
      </div>
    </>
  );
};

export default App2;
