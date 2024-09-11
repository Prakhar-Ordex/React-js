import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/countSlice";

const Page = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(store)
  return (
    <div>
      <button
        className="bg-blue-500 p-2 rounded-md "
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <span className="p-2 bg-gray-300">{state.count}</span>
      <button
        className="bg-blue-500 p-2 rounded-md "
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button
        className="bg-red-200 p-2 rounded-md"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
};

export default Page;
