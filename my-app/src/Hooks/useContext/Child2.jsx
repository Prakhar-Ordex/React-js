import React, { useContext } from 'react'
import { MyContext } from './App'

const Child2 = () => {
    const data = useContext(MyContext);
    console.log("child2" +  data)
  return (
    <div>
          <h6>child2 component 👇</h6>
          {data}
    </div>
  )
}

export default Child2
