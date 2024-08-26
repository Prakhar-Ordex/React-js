import React, { useRef } from 'react'
import Child from './Child'

const App = () => {
    const inputRef = useRef(null);
    const childRef = useRef(null);
    console.log(inputRef)
    // const updateInput = () => {
    //     inputRef.current.value = "10000";
    //     inputRef.current.style.color = "red";
    //     inputRef.current.style.background = "blue";
    // };
    
    const handleButtonClick = () => { 
        if (childRef.current) {
            childRef.current.handleButtonClick();
        }
    }
  return (
    <>
          <h4>forwardRef hook</h4>
          <p>to use allows to forward a ref from a parent component to a child component it is primarily used when you need to acess the DOM element or component intance of the child component form its parent.</p>
          {/* Example 1 */}
          {/* <Child ref={inputRef} /> */}
          {/* <button onClick={updateInput}>Update Button</button> */}

          {/* Exmaple 1 */}
            <Child ref={childRef}   /> 
          <button onClick={handleButtonClick}>Parent Button </button>
    </>
  )
}

export default App
