import React, { useDeferredValue, useState, useTransition } from "react";
import List from "./List";

const App = () => {
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value)
    }
  
  return (
    <div>
      <h4>useDeferredValue hook </h4>
      <p>it is use to defer updating a part of the ui</p>

      <div>

        <input type="text" value={input} onChange={handleChange} />
              <List input={input} />
      </div>
    </div>
  );
};

export default App;
