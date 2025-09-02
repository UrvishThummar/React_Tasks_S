import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Action";

function Counter() {
  const dispatch = useDispatch();

  return (
    <div >
      <button style={{'marginLeft':10}} onClick={() => dispatch(increment())}> Increment</button>
      <button style={{'marginLeft':10}} onClick={() => dispatch(decrement())}> Decrement</button>
      <button style={{'marginLeft':10}} onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
