import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementWithParam,
} from "store/counterSlice";

export default function Child() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={() => dispatch(increment())}>++</button>
      <p>Child: {count}</p>
      <button onClick={decrementHandler}>--</button>
      <button onClick={() => dispatch(incrementWithParam(5))}>+5</button>
      <button onClick={() => dispatch(incrementWithParam(10))}>+10</button>
    </div>
  );
}
