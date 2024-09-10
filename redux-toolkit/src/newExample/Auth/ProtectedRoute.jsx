import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const { loginUser } = useSelector(state => state.users)
  const navigate = useNavigate()
  useEffect(() => {
      if(!loginUser){
          navigate('/login')
      }
  },[navigate])
  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
