import React, { useRef } from 'react'

const App = () => {
    const inputRef = useRef(null);
    console.log(inputRef)

  const handleClick = () => {
    inputRef.current.focus();
    //  console.log(inputRef.current) // get the current input element referencein
      console.log(inputRef.current.value)
      console.log(inputRef)
    }
  return (
    <div>
          <h4>Use Ref hook in React js</h4>

          <input type="text" ref={inputRef}  />
          
          <button onClick={handleClick}>Get Input Value</button>
    </div>
  )
}

export default App
