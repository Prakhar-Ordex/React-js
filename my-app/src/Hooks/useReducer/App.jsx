import React, { useState } from 'react'
import Counter from './Counter';

const App = () => {
    // ex1
    const [count, setCount] = useState(0);
  return (
    <div>
          <h4>useReducer Hook</h4>
          <p>use to manage multiple state at a time  and manage complex state</p>

          {/* example 1 */}
          <p>count:{count}</p>
          <button onClick={()=> setCount(count+1)}>Increment Count</button>
          <button onClick={() => setCount(count - 1)}>Dcrement Count</button>
          
          {/* Example 2 */}

          <Counter/>
    </div>
  )
}

export default App
