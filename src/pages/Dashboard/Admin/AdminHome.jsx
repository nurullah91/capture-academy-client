import useAuth from "../../../Hooks/useAuth";
import welcome from '../../../../public/welcome.json';
import Lottie from "lottie-react";
const AdminHome = () => {
    const {user} = useAuth();

    return (
        <div>
            <h2 className="text-5xl font-bold text-center mt-10">Welcome {user?.displayName}</h2>
            <div>
            <Lottie className='h-[70vh]' animationData={welcome} loop={true} />;
            </div>
        </div>
    );
};

export default AdminHome;