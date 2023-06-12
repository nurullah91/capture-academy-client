import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import useInstructor from "../../Hooks/useInstructor";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const Dashboard = () => {

    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();



    return (
        <div>
            <NavBar></NavBar>
            <div className="mt-16">
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <Outlet></Outlet>

                    </div>
                    <div className="drawer-side mt-16 lg:mt-0">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-slate-100 text-base-content">
                            {/* Sidebar content here */}
                            {user && isAdmin ? <>

                                <li><Link to='/dashboard/manage-classes'>Manage Classes</Link></li>
                                <li><Link to='/dashboard/manage-users'>Manage Users</Link></li>

                            </> : user && isInstructor ? <>

                                <li><Link to='/dashboard/add-class'>Add a class</Link></li>
                                <li><Link to='/dashboard/my-classes'>My classes</Link></li>
                                <li><Link to='/dashboard/total-enrolled-students'>Total enrolled students</Link></li>
                                <li><Link to='/dashboard/feedback'>Feedback</Link></li>

                            </> :

                                <>
                                    <li><Link to='/dashboard/my-selected-class'>My Selected Class</Link></li>
                                    <li><Link to='/dashboard/my-enrolled-class'>My Enrolled Class</Link></li>
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