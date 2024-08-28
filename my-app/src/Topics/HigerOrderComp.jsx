import React, { useState } from "react";

const HigerOrderComp = () => {
  // Higher Order Component
  const withCounter = (WrappedComponent) => {
    return function WithCounter(props) {
      const [count, setCount] = useState(2);
      const increment = () => {
        setCount((prevCount) => prevCount + 1);
      }

      return(
        <WrappedComponent {...props} count={count} increment={increment}/>
      )
    };
  };

  // functional Component
  const Counter = ({ count, increment }) => {
    return (
      <div>
        <p>Count : {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };

  const CounterwithEnhasment = withCounter(Counter);
  return (
    <div>
      {/*
      Example 1
       <h4>HigerOrder Component</h4>
      <h2>count : {count}</h2>
      <button onClick={() => setCount((pre) => pre * pre)}>Update Count</button> */}

      {/* Example 2 */}
      <h4>Enhanced Component</h4>
      <CounterwithEnhasment />
    </div>
  );
};

export default HigerOrderComp;
