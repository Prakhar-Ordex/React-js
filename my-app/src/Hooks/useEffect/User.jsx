import React, { useEffect, useState } from 'react'

const User = ({data,count}) => {
    useEffect(() => {
        // console.log("child component")
    })
    
    useEffect(() => {
        console.log("count is click")
    },[count])
   
    useEffect(() => {
        console.log("data is click")
    },[data])
   
  return (
    <div>
          <p>{data}</p>

          
          {/* example:2 */}
          <h5>Count : {count}</h5>
       
    </div>
  )
}

export default User
