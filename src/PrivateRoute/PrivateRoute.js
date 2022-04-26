import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { useAuthContext } from "../context/AuthContextProvider";

const PrivateRoute = ({ children }) => {
  const { username ,loading } = useAuthContext();
  const location = useLocation()
  if(loading){
    return <Loading />
  }
  console.log(username);
  
  console.log("this is private route");

  
  return username ? (
       children
    ) : (
      <Navigate to="/register/login"  state={{from : location}} />
  );
};

export default PrivateRoute;
