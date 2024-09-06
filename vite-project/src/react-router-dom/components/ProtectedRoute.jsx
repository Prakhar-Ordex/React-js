import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectRout({ Component }) {
    const loggin = localStorage.getItem('loginUser')
    const navigate = useNavigate()
    useEffect(() => {
        if(!loggin){
            navigate('/login')
        }
    },[navigate])
    return (
        <>
            <Component />
        </>
    )
}

export default ProtectRout