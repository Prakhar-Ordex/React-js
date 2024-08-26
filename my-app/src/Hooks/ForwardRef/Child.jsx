import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const Child = (props, ref) => {
    console.log(ref)
    const childRef = useRef();

    const handleButtonClick = () => {
        console.log("child button")
    }

    useImperativeHandle(ref, () =>( {
        handleButtonClick,
    }))

  return (
    <div>
          <h4>Child Component </h4>
          <input type="text" ref={ref} />

          <button ref={childRef} >Click me </button>
    </div>
  )
}

export default forwardRef(Child);
