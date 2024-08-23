import React from 'react'

const Array = () => {
    const array = ['apple', 'banana', 'cherry', 'cheese paste', ' Dates'];

    const array2 = [
        {
            id: 1,
            name: "John",
            age: 30
        },
        {
            id: 2,
            name: "Jane",
            age: 25
        },

        {
            id: 3,
            name: "Tom",
            age: 35
        },
        {
            id: 4,
            name: "Bob",
            age: 28
        },
        {
            id: 5,
            name: "Alice",
            age: 27
        },

    ]
  return (
    <div>
      <h4>Array with map</h4>
          <ul>
              {
                  array.map((item, index) => {
                    return <li key={index} style={{background:"red",color:"blue",margin:"10px" }}>{item}</li>
                  })

                  // or using arrow function
              }
          </ul>
          <ul>
              {
                  array2.map((item, index) => {
                      return <li key={item.id} style={{ background: "green", color: "yellow", margin: "10px" }}>
                          {item.name} - {item.age}
                      </li>
                  })
              }
          </ul>
    </div>
  )
}

export default Array
