import React, { useState } from 'react'
import Child1 from './Child1';

const Memo = () => {
  const [data, setData] = useState(0);
  console.log("parent component")
  return (
    <div>
      <h4>Memo in react js </h4>
      <h2>count: {data}</h2>
      <button onClick={()=> setData(data+1)}>Count++</button>
      <button onClick={()=> setData(data-1)}>Count--</button>
      <Child1 data={data}/>
    </div>
  )
}

export default Memo
