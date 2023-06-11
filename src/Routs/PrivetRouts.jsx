import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouts = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className='flex flex-col items-center justify-between'>
            <div className='w-10 h-10  border-b-4 border-b-cyan-300 rounded-full animate-spin '>
            </div>
        </div>
    }


    if(user){
        return children
    }

    return <Navigate to='/login' state={{from:location}}></Navigate>;
};

export default PrivetRouts;