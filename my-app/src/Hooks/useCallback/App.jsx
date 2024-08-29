import React,{useCallback,useState} from 'react'
import Child from './Child';

const App = () => {
    console.log("Parent component ")
    // ex 1
    const [count, setCount] = React.useState(0);
    // ex 2
    const [count2, setCount2] = React.useState(0);

    const incrementCount = useCallback(() => {
        setCount2((pre) => pre + 1)
        console.log("Callback function ")
    },[])
  return (
    <div>
          <h4>useCallback Hook</h4>
          <p>return memoizing functions</p>

          
          <p>Ex1</p>
          <p>Count 1:{count}</p>
          <button onClick={() => setCount((pre) => pre + 1)}>update count</button>
          
          <p>ex2</p>
          <p>Count 2: {count2}</p>
          <Child incremnt={ incrementCount} />
          
    </div>
  )
}

export default App
