import React, { useState } from "react";

const ControllComponent = () => {

    // ex 1
    const [inputValue, setInputValue] = useState("");


 
  return (
    <>
      <h4>Controll Component</h4>
          <h1>constroll component manage by hook like use State</h1>
          
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

          <div>
              <>input value : {inputValue}</>
          </div>
    </>
  );
};

export default ControllComponent;
