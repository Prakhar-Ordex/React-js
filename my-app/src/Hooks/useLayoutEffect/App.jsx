import React, { useLayoutEffect, useRef, useState } from "react";

const App = () => {
  const [width, setWidth] = useState(0);
  const element = useRef(null);

  useLayoutEffect(() => {
    if (element.current) {
      setWidth(element.current.getBoundingClientRect().width);
    }
  },[])
  return (
    <div>
      <h4>useLayoutEffect hook</h4>
      <div>
        <h3>Width Mesurement Example</h3>
        <div ref={element} style={{ width: "auto", background: "lightblue", margin: "auto" }}>Element Whose Width Is Mesured </div>
        <p>Width:{width }</p>
      </div>
    </div>
  );
};

export default App;
