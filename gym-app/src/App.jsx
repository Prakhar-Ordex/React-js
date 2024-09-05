import React from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import {Box} from '@mui/material'
import Home from './pages/Home';
import ExerciesDeatails from './pages/ExerciesDeatails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => {
  return (
    <Box width="400px" sx={{width : {xl:'1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/exercise/:id" element={<ExerciesDeatails/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App
