import React, { useState } from 'react'

const HigerOrderComp = () => {
    const [count, setCount] = useState(2);

    // functional Component
    const Counter = ({ count, increment }) => {
        return (
            <div>
                <p>Count : {count}</p>
                <button onClick={increment}>Increment</button>
            </div>
        )
    }
  return (
    <div>
          <h4>HigerOrder Component</h4>
          <h2>count : {count}</h2>
          <button onClick={()=> setCount((pre)  =>  pre*pre )}>Update Count</button>
    </div>
  )
}

export default HigerOrderComp
