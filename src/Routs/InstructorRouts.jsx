
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useInstructor from "../Hooks/useInstructor";

const InstructorRouts = ({children}) => {
    const {user, loading} = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();

    const location = useLocation();
    
    if(loading || isInstructorLoading){
        return <div className='flex flex-col items-center justify-between'>
        <div className='w-10 h-10  border-b-4 border-b-cyan-300 rounded-full animate-spin '>
        </div>
    </div>;
    
    }

    if(user && isInstructor){
        return children;
    }

  return  <Navigate to= '/' state={{ from: location }} replace></Navigate>
};

export default InstructorRouts;