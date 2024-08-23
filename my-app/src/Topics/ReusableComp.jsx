import React from 'react'

const ReusableComp = ({text,onClick}) => {
  return (
    <div>
          <h4>React Reusable Component </h4>
          <button onClick={onClick}>
              {
                  text
              }
          </button>
    </div>
  )
}

export default ReusableComp
