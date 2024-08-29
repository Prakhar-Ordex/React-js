import React, { useState } from 'react'

const useCounter = (intialValue=0,step=1  ) => {
    const [count, setCount] = useState(intialValue)
    
    const increment = () => {
        setCount(count + step)
    }
    
    const decrement = () => {
        setCount(count - step)
    }

    return {
        count,
        increment,
        decrement
    }
}

export default useCounter
