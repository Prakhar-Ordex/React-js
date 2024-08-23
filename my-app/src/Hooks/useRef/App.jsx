import React, { useRef } from 'react'
import { useReducer } from 'react'

const App = () => {
    const inputRef = useRef(null);
    console.log(inputRef)

    const handleClick = () => {
        console.log(inputRef.current.value)
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
