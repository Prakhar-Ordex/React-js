import React, { createContext } from "react";
import Child1 from "./Child1";

const MyContext = createContext();

const App = () => {
  const sharedData = "hello this is parent componrent";
  return (
    <div>
      <h4>useContext hook </h4>
      <p>use to pass props easily any component </p>
      <p>three important points : create,provider, useContext</p>
      <MyContext.Provider   value={sharedData}>
        <Child1 />
      </MyContext.Provider>
    </div>
  );
};

export default App;

export {MyContext}
