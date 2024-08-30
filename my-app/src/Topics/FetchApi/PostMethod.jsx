import React, { useState } from 'react'

const PostMethod = () => {
    const [data, setData] = useState({ title: "", content: "" });
    // console.log(data)
    const [isLoading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { value, name } = e.target;
        setData((pre) => ({...pre, [name]: value }));
    }

    const sendData = async () => {
        const apiUrl = "https://jsonplaceholder.typicode.com/posts"
        try {
            setLoading(true)
            const sendData = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            if (!sendData.ok) {
                throw new Error(`HTTP error! status: ${sendData.status}`);
            }
            const result = await sendData.json();
            console.log(result);
            setData({ title: "", content: "" });
        } catch (error) {
            console.log(`error : ${error}`)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
        sendData();
        
    }
  return (
    <div>
          <h4>Fetch Api Post Method</h4>
          <form onSubmit={handleSubmit}>
              <label htmlFor="">Tittle</label>
              <input type="text" id="" name="title" value={ data.title} onChange={handleChange} />
              <label htmlFor="">Content</label>
              <input id="" name="content" value={data.content} onChange={handleChange} /> 
              <button type='submit'>{isLoading ? "Loading....." : "Submit"}</button>
          </form>
    </div>
  )
}

export default PostMethod
