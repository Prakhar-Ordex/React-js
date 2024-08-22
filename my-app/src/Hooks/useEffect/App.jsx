import React, { useEffect, useState } from 'react'
import User from './User'

const App = () => {
    const [data,setData] = useState(0)
    useEffect(() => {
        console.log("first")
    }, [data])
    
    const [count,setCount] = useState(0)
    const [total,setTotal] = useState(100)
  return (
    <div>
          <h3>useEffect hook</h3>
          <p>{data}</p>
          <button onClick={() => setData(data + 1)}>click</button>
          
          {/* example:2 */}
          <h5>Count : {count}</h5>
          <button onClick={() => setCount(count + 1)}>click</button>

          <User count={count} data={data}/>
    </div>
  )
}

export default App
