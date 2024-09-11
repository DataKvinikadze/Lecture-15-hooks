import React, { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    console.log("Component was Created");
    return () => {
      console.log("Component was Deleted");
    };
  }, []);
  return (
    <div>
      <div>Hello</div>
    </div>
  );
};

export default MyComponent;
