
import useAuth from '../../../Hooks/useAuth';

const InstructorHome = () => {
    const {user} = useAuth();
    return (
        <div>
             <h2 className="text-5xl font-bold text-center">Welcome {user?.displayName}</h2>
        </div>
    );
};

export default InstructorHome;