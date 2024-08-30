import React, { useEffect, useState } from "react";

const PutMethod = () => {
  const [postData, setPostData] = useState({ id: 1, title: "", body: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const postId = postData.id;
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setPostData(responseData))
      .catch((error) => console.error(`Error : ${error}`));
  }, [postData.id]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const url = `https://jsonplaceholder.typicode.com/posts/${postData.id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        })
         .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
         .then((data) => {
            setMessage("Post updated successfully");
             setLoading(false);
             console.log(data)
          })
         .catch((error) => {
            console.error(`Error : ${error}`);
            setMessage("Failed to update post");
            setLoading(false);
          });
  
    }
  return (
    <div>
      <h4>Fetch Api Put Mehtod</h4>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="id">title:</label>
        <input
          type="text"
          id="id"
          name="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <label htmlFor="id1">body:</label>
        <input
          type="text"
          id="id1"
          name="body"
          value={postData.body}
          onChange={(e) => setPostData({ ...postData, body: e.target.value })}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default PutMethod;
