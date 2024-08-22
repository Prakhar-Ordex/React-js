import React, { useState } from 'react'

const Input = () => {
    const [inputValue, setInputValue] = useState("")
    const handleChange = (e) => {
        console.log(e.target.value + "   useing function")
        setInputValue(e.target.value)
    }
    
  return (
    <div>
          <h1>Input Component</h1>
          <input type="text" onChange={(e)=> console.log(e.target.value)}/>
          <input type="text" onChange={handleChange} />
          <div>
              <p>input value : { inputValue}</p>
          </div>
    </div>
  )
}

export default Input
