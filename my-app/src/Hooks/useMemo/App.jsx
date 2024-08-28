import React, { useMemo, useState } from 'react'

const App = () => {
    const [num1,setNum1] = useState()
    const [num2,setNum2] = useState()
    const [count, setCount] = useState(0)
    
    // const sum= () => {
    //     console.log("calculate the sum")
    //     return num1+num2
    // }

    const sum = useMemo(() => {
        console.log("calculating sum ....")
        return num1 + num2;
    },[num1,num2])
    
  return (
    <div>
          <h4>useMemo Hook in React js</h4>
          <p>use Memo hook return value</p>
          <div>
              <input type="number" value={num1}  onChange={(e)=> setNum1(Number(e.target.value))}/>
              <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />

              {/* <p>sum:{sum()}</p> */}
              <p>sum:{sum}</p>
              <p>count number : {count}</p>
              <button onClick={()=> setCount(count+1)}>Click Me</button>
          </div>
    </div>
  )
}

export default App
