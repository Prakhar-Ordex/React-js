import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HoverUser({ setIsHovered, userData, handleLogout }) {
    const  navigate = useNavigate()
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    
    return (
        <div className="p-4 bg-white border rounded shadow-md absolute top-20  right-10 " onMouseLeave={handleMouseLeave}>
            <h1 className=' text-black p-1 '>Name:{userData && userData?.name}</h1>
            <h1 className=' text-black p-1 '>Email:{userData && userData?.email}</h1>
            <h1 className=' text-black p-1 '>Role:{userData && userData?.role}</h1>
            <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            onClick={()=>navigate("/profile")}>Profile</button>
            <button
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                onClick={handleLogout}
            >
                log Out
            </button>
        </div>
    )
}

export default HoverUser