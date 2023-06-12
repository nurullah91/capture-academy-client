
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRouts = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();
    
    if(loading || isAdminLoading){
        return <div className='flex flex-col items-center justify-between'>
        <div className='w-10 h-10  border-b-4 border-b-cyan-300 rounded-full animate-spin '>
        </div>
    </div>;
    
    }

    if(user && isAdmin){
        return children;
    }

  return  <Navigate to= '/' state={{ from: location }} replace></Navigate>
};

export default AdminRouts;