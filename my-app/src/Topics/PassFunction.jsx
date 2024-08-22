import React from 'react'

const PassFunction = () => {
    const handleButtonClick = () => {
      console.log("pass this function as props")
    }
    
  return (
    <div>
          <h5>Pass Function as a props</h5>
          
          <div>
              <User fn={ handleButtonClick} />
          </div>
    </div>
  )
}

const User = ({ fn }) => {
    console.log(fn)
    return (
        <div>
            <h6>user component</h6>
            <button onClick={fn}>click me</button>
        </div>
    )
}

export default PassFunction
