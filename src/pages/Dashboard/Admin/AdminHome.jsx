import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
    const {user} = useAuth();

    return (
        <div>
            <h2 className="text-5xl font-bold text-center">Welcome {user?.displayName}</h2>
        </div>
    );
};

export default AdminHome;