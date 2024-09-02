import React, { useState } from "react";
import styled from "styled-components";
import deleteIcon from "../assets/delete.png";
import {
  addTodo,
  clearTodo,
  editTodo,
  removeTodo,
} from "../store/fetures/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const TodoList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.todos);
  const [id, setId] = useState(0);
  //   console.log(data);
  const [newTodo, setNewTodo] = useState("");

  const handleClick = () => {
      if (!newTodo) {
          toast.error("please fill some text", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
          });
          return;
      } 
      if (id) {
          dispatch(editTodo({ id, text: newTodo }));
          setNewTodo("");
          setId(0);
      } else {
        dispatch(addTodo({ id: Date.now(), text: newTodo }));
        setNewTodo("");
      }
  
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const clearAll = () => {
    if (!data.legnth) {
      toast.error("No todo to clear", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    dispatch(clearTodo(null));
  };

  const handleUpdate = (id) => {
    setNewTodo(data.find((item) => item.id === id).text);
    // dispatch(editTodo({ id, text: newTodo }));
    setId(id);
  };
  return (
    <div>
      {/* Todo List */}
      <Container>
        <h1>Todo List</h1>
        <Wrapper>
          <input
            type="text"
            placeholder="Add a new todo..."
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
          />
          <button onClick={handleClick}>Add List </button>
        </Wrapper>
        {data.map((value) => (
          <TodoItem key={value.id}>
            <div className="todoText">{value.text}</div>
            <div className="deleteIcon" onClick={() => handleDelete(value.id)}>
              <img src={deleteIcon} alt="delete" />
            </div>
            <button
              style={{
                border: "none",
                background: "blue",
                padding: "5px",
                color: "white",
                borderRadius: "5px",
              }}
              onClick={() => handleUpdate(value.id)}
            >
              update
            </button>
          </TodoItem>
        ))}

        <ClearButton onClick={clearAll}>clear all</ClearButton>
      </Container>
    </div>
  );
};

export default TodoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 20px;
  border-radius: 40px;
  background: transparent;
  box-shadow: 0 4px 20px -2px #e9e9e9;

  input {
    width: 330px;
    height: 20px;
    padding: 20px;
    font: bold 13px "lucida sans", "trebuchet MS", "Tahoma";
    border: 0;
    background: #fff;
    border-radius: 40px;
    border-top-style: none;
  }

  input:focus {
    outline: 0;
  }

  input::-webkit-input-placeholder {
    color: #999;
    font-weight: normal;
    font-style: italic;
    padding-left: 20px;
  }

  input:-moz-placeholder {
    color: #999;
    font-weight: normal;
    font-style: italic;
  }

  input:-ms-input-placeholder {
    color: #999;
    font-weight: normal;
    font-style: italic;
    border-style: none;
  }

  button {
    overflow: visible;
    position: relative;
    float: right;
    border: 0;
    padding: 0;
    cursor: pointer;
    height: 40px;
    width: 110px;
    font: 13px/40px "lucida sans", "trebuchet MS", "Tahoma";
    color: #fff;
    text-transform: uppercase;
    background: #198cff;
    border-radius: 40px;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
  }
  button:active,
  button:focus {
    background: #198cff;
    outline: 0;
  }

  button:focus:before,
  button:active:before {
    border-right-color: #c42f2f;
  }
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  width: 400px;
  padding: 5px 20px;
  border-radius: 5px;
  justify-content: center;
  background-color: rgba(25, 140, 255, 0.09);

  .todoText {
    width: 50%;
    text-align: left;
  }
  .deleteIcon {
    width: 50%;
    text-align: right;
    background: transparent;
    color: white;
    border: none;
    padding: 5px;
    margin-left: 10px;
    cursor: pointer;

    img {
      width: 25px;
    }
  }
`;

const ClearButton = styled.button`
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  text-align: right;
`;
