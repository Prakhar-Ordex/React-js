import { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
      console.log("task submited ");
      if (value) {
          addTodo(value);
          setValue("");
      }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input"
          placeholder="what is today task....."
        />
        <button type="submit" className="todo-btn">
          Add Task{" "}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
