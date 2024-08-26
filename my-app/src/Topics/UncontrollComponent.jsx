import React, {  useRef } from 'react'

const UncontrollComponent = () => {
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const submitForm = (e) => {
        e.preventDefault();
        console.log("first input Value" + inputRef.current.value)
        console.log("second input Value" + inputRef2.current.value)
    }
    
  return (
    <div>
          <h4>UncontrollCompnent Component</h4>
          <p>UncontrollCompnent is a component  ehose state is managed by the dom rather than beign controlle by react itself</p>

          <p>In this component, the state is managed by the DOM, not react, so when the user types into the input field, the state does not change. React only updates the DOM when necessary.</p>

          <form onSubmit={submitForm}>
              <input type="text" ref={inputRef}/>
              <input type="text"  ref={inputRef2}/>
              <button type="submit">Submit</button>
          </form>
    </div>
  )
}

export default UncontrollComponent
