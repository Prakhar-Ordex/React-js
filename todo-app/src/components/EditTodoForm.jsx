import React, {useState} from 'react';

function EditTodoForm({editTodo, task}) {
    const [value, setValue] = useState(task.text);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(task.id, value)
    }
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
        <input 
        type="text"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        className="todo-input"
        placeholder="Update Task..." />
        <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
}

export default EditTodoForm