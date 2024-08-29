import React, { useContext } from 'react'
import { MyContext } from './App'

const Child2 = () => {
    // const data = useContext(MyContext)
    // console.log("shared data")
  return (
    <>
          Child 2 component 
          <MyContext.Consumer>
              {
                  (data) => {
                      return <p>{data + "us"}</p>
                  }
              }
              
        </MyContext.Consumer>
    </>
  )
}

export default Child2
