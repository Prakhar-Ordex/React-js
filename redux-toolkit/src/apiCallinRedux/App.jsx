import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((states) => states.todo);
  console.log(state);

  if (state.isLoading) { 
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1 className="bg-green-500 rounded-md p-2">Redux Toolkit Api Call </h1>
      <button onClick={() => dispatch(fetchTodos())}>fetch tools</button>
      {state?.data?.map((item) => (
        <div key={item.id}>{item.email}</div>
      ))}
    </div>
  );
};

export default App;
