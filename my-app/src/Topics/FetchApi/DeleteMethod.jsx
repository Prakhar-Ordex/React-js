import React, { useState } from 'react'

const DeleteMethod = () => {
    const [data, setData] = useState();
    console.log(data)
    const [isLoading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts/1",
                {
                    method: "DELETE",
                }
            );
            const result = await response.json();
            setData(result);
            console.log(result)
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data: ", error);
            setLoading(false);
        }
    }
  return (
    <div>
          <h4>delete Method     </h4>
          {
              isLoading? (
                  <p>Loading...</p>
              ) : (
                  <button onClick={fetchData}>Delete</button>
              )
          }
    </div>
  )
}

export default DeleteMethod
