import React from 'react'

const Children = ({data1,data,handleChange}) => {
  return (
      <div>
          
          <h4>Children component  A : </h4>
          <div>{data1}</div>
          <input type="text" value={data} onChange={(e)=>handleChange(e.target.value)} />
    </div>
  )
}

export default Children
