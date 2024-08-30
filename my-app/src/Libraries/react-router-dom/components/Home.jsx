import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  return (
    <div>
      <h1>Home page </h1>

      <button onClick={()=> navigate("/about")}>Go To About Page </button>
      <button onClick={()=> navigate("/service")}>Go To Service Page </button>
      <button onClick={()=> navigate("/user")}>Go To User Page </button>
    </div>
  )
}

export default Home
