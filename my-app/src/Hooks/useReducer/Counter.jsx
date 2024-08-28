import React, { useReducer } from "react";

// reducer function
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "UPDATE_TEXT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const intialState = { count: 0,text:"p" };
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <p>useReducer Example </p>
      <p>count:{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment Count
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Dcrement Count
      </button>

      <p>ex:2</p>
      <input
        type="text"
        value={state.text}
        onChange={(e) =>
          dispatch({ type: "UPDATE_TEXT", payload: e.target.value })
        }
        placeholder="Type something"
      />
      <p>Text: {state.text}</p>
    </>
  );
};

export default Counter;
