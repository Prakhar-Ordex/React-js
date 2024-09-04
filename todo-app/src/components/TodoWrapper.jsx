import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

const TodoWrapper = () => {
  const [todo, setTodo] = useState([]);
  const addTodo = (value) => {
    setTodo([
      ...todo,
      { id: Date.now(), text: value, completed: false, isEditing: false },
    ]);
  };


  const toggleComplete = (id) => {
    const index = todo.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const updatedTodo = [...todo];
      updatedTodo[index].completed = !updatedTodo[index].completed;
      setTodo(updatedTodo);
    }
  };

  const deleteTodo = (id) => {
    const updatedTodo = todo.filter((todo) => todo.id !== id);
    setTodo(updatedTodo);
  };

  const edit = (id, newText) => {
    const index = todo.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const updatedTodo = [...todo];
      updatedTodo[index].text = newText;
      updatedTodo[index].isEditing = false;
      setTodo(updatedTodo);
    }
  };

  const editTodo = (id) => {
    const index = todo.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const updatedTodo = [...todo];
      updatedTodo[index].isEditing = true;
      setTodo(updatedTodo);
    }
  };

  return (
    <div className="TodoWrapper">
      <h1>Today Tasks!</h1>
      <TodoForm addTodo={addTodo} />

      {todo.map((item) => (
        <>
          {item.isEditing ? (
            <EditTodoForm editTodo={edit} task={item} />
          ) : (
            <Todo
              key={item.id}
              task={item}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default TodoWrapper;
