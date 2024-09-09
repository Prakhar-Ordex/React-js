import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { removeTodo } from "../fetures/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);


  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id}/>
        ))}
      </ul>
    </>
  );
};

export default Todos;
