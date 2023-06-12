import useAuth from "../../../Hooks/useAuth";

const StudentHome = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div>
             <h2 className="text-5xl font-bold text-center">Welcome {user?.displayName}</h2>
        </div>
    );
};

export default StudentHome;