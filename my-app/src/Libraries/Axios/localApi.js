import axios from 'axios'

const BASE_URL = "https://jsonplaceholder.typicode.com";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
   
})

// Get request

export const getPosts = () => {
    return axiosInstance.get("/posts")
}

// post request

export const createPost = (postData) => {
    return axiosInstance.post("/posts", postData)
}

// update request

export const updatePost = (postId, postData) => {
    return axiosInstance.put(`/posts/${postId}`, postData)
}

// delete request

export const deletePost = (postId) => {
    return axiosInstance.delete(`/posts/${postId}`)
}