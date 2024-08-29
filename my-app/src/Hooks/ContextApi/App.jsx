import React, { createContext } from "react";
import Child1 from "./Child1";

const MyContext = createContext();
const App = () => {
  const sharedData = "shared data";
  return (
    <>
      <h4>context Api</h4>
      <p>pass data any component </p>
      <MyContext.Provider value={sharedData}>
        <Child1 />
      </MyContext.Provider>
    </>
  );
};

export default App;
export { MyContext };
