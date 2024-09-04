import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectRout({ Component }) {
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem("user-token")
        if(!login){
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