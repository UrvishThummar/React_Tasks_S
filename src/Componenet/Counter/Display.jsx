import React from "react";
import { useSelector } from "react-redux";

function Display() {
  const count = useSelector((state) => state.count);

  return (
    <h2 style={{ fontSize: "35px", margin: "20px" }}>
      Current Count: {count}
    </h2>
  );
}

export default Display;

