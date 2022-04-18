import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContextProvider';



const PrivateRoute = ({children}) => {
 
   const {username} = useAuthContext() 
   if(!username){
     return  <Navigate to="/register/login"  />
   }
    return children
};

export default PrivateRoute;