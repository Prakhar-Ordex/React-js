import React, { useEffect, useState } from "react";
import { createPost, deletePost, getPosts, updatePost } from "./localApi.js";
// import axios from "axios";

const GetData = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState([]);

//   async function timePass() {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }

  // get request
    useEffect(() => {
    //   timePass()
    getPosts()
      .then((Response) => setPosts(Response.data))
      .catch((err) => console.log(err));
  }, []);

  // update post
  const handleUpdate = (id, data) => {
    console.log(id, data);
    updatePost(id, data)
      .then((res) => {
        const updateData = posts.map((post) =>
          post.id === id ? res.data : post
        );
        setPosts(updateData);
      })
      .catch((err) => console.log(err));
  };

  // delete post
  const handleDelete = (id) => {
    deletePost(id).then((res) => {
      console.log(res);
      const filterData = posts.filter((post) => post.id !== id);
      setPosts(filterData);
    });
  };

  // create Post
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(newPost)
      .then((response) => setPosts([...posts, response.data]))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1>Posts</h1>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button
              onClick={() =>
                handleUpdate(post.id, {
                  title: "Updated Title",
                  body: "Updated body",
                })
              }
            >
              update
            </button>{" "}
            <hr />
            <button onClick={() => handleDelete(post.id)}>delete</button>
          </div>
        ))}
      </div>

      <h2>new Data Add</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">title:</label>
        <input
          type="text"
          id="id"
          name="title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <label htmlFor="id1">body:</label>
        <input
          type="text"
          id="id1"
          name="body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default GetData;
