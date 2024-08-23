import React, { memo } from 'react'

const Child1 = ({data}) => {
    console.log("Child Component")
  return (
    <div>
          <h4>Child component</h4>
          <p>{data}</p>
    </div>
  )
}

export default memo(Child1);
