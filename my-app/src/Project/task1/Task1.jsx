import React, { useState } from "react";
import "./task1.css";

const Task1 = () => {
  const [status, setStautus] = useState(true);
  return (
    <div>
      <button onClick={() => setStautus(false)}>Hide</button>
      <button onClick={() => setStautus(true)}>Show</button>
      <button onClick={() => setStautus((pre) => !pre)}>toggle</button>
      {
        status ? <div className="div"></div> : null // conditional rendering based on status state
      }
    </div>
  );
};

export default Task1;
