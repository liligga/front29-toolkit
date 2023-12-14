import { Outlet, Navigate } from "react-router-dom";


const PrivateRoute = () => {
  const isAuth = localStorage.getItem('token')
  
  if (!isAuth) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default PrivateRoute



