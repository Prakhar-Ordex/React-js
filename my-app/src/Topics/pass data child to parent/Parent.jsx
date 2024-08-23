import React, { useState } from 'react'
import Children from './Children'
import ChildrenA from './ChildrenA'

const Parent = () => {
    const data1 = "lorem Ips "
    const [data, setData] = useState()
    
    const handleChange = (value) => {
        console.log(data)
      setData(value)
    }
    
  return (
      <div>
          <h4>Pass Data parent to children</h4>
          <Children data1={data1} data={data} handleChange={handleChange} />
          <ChildrenA data={data}/>
    </div>
  )
}

export default Parent
