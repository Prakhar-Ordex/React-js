import React from "react";
import TodoList from "./components/TodoList";
import { Provider } from 'react-redux'
import { store } from "./store"; 

const App = () => {
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <p>this is management library to use manage state </p>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
};

export default App;
