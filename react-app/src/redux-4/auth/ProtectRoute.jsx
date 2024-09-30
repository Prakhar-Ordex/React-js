import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("loginUser");
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
    
export default ProtectRoute;
