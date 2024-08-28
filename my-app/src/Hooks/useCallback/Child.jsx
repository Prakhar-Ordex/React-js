import React from 'react'

const Child = ({incremnt }) => {
    console.log("Child Component ")
  return (
    <div>
          <h3>Child Component</h3>
          
          <button onClick={incremnt}>Child Button </button>
    </div>
  )
}

export default Child
