import React from 'react'
import useCounter from './useCounter'

const App = () => {
    const { count, increment, decrement } = useCounter(0,1000);
  return (
    <div>
          <h4>make custom hook </h4>
          <p>Count : {count}</p>
          
          <button onClick={increment}>update</button>
          <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default App
