import React from 'react'

const Users = (props) => {
  console.log(props)
  let a = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Tom', age: 35 },
    { name: 'Bob', age: 28 }
  ]
  return (
    <div>
      <h1>Number ; {props.num}</h1>
      hello 
      <div>
        {
          a.map(({name,age},index) => {
            return <p key={Math.random()} style={{ fontSize: "20px" }}>{name}: {age} </p>
          })
        }
      </div>
    </div>
  )
}

export default Users
