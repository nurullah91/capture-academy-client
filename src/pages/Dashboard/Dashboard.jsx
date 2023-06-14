
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import useInstructor from "../../Hooks/useInstructor";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const { theme } = useContext(ThemeContext);

    const CAtheme = localStorage.getItem("CAtheme")

    return (
        <div data-theme={CAtheme}>
            <NavBar></NavBar>
            <div className="lg:pt-16 pt-20">
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="bg-cyan-100 px-4 py-2 rounded-md drawer-button lg:hidden">Dashboard Menu</label>

                        <div className="min-h-[calc(100vh-68px)]">
                            <Outlet></Outlet>
                        </div>

                    </div>
                    <div className="drawer-side mt-16 lg:mt-0">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-slate-100 text-base-content">
                            {/* Sidebar content here */}
                            {user && isAdmin ? <>

                                <li><NavLink className={({ isActive }) =>
                                    isActive ? "bg-cyan-100" : ""} to='/dashboard/manage-classes'>Manage Classes</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? "bg-cyan-100" : ""} to='/dashboard/manage-users'>Manage Users</NavLink></li>

                            </> : user && isInstructor ? <>

                                <li><NavLink className={({ isActive }) =>
                                    isActive ? "bg-cyan-100" : ""} to='/dashboard/add-class'>Add a class</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? "bg-cyan-100" : ""} to='/dashboard/my-classes'>My classes</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? "bg-cyan-100" : ""} to='/dashboard/total-enrolled-students'>Total enrolled students</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? "bg-cyan-100" : ""} to='/dashboard/feedback'>Feedback</NavLink></li>

                            </> :

                                <>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? "bg-cyan-100" : ""} to='/dashboard/my-selected-class'>My Selected Class</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? "bg-cyan-100" : ""} to='/dashboard/my-enrolled-class'>My Enrolled Class</NavLink></li>
                                </>
                            }
                        </ul>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;