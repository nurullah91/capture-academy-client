import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";
import { useContext } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }
    const navItem = <>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-cyan-100" : ""} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-cyan-100" : ""} to='/instructors'>Instructors</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-cyan-100" : ""} to='/classes'>Classes</NavLink></li>
        {
            user && isAdmin ? <li><NavLink className={({ isActive }) =>
                isActive ? "bg-cyan-100" : ""} to='/dashboard/admin-home'>Dashboard</NavLink></li> :
                user && isInstructor ? <li><NavLink className={({ isActive }) =>
                    isActive ? "bg-cyan-100" : ""} to='/dashboard/instructor-home'>Dashboard</NavLink></li> :
                    user && <li><NavLink className={({ isActive }) =>
                        isActive ? "bg-cyan-100" : ""} to='/dashboard/user-home'>Dashboard</NavLink></li>
        }

    </>
    return (
        <div>
            <div className="navbar bg-slate-100 shadow-md fixed top-0 z-50 bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navItem
                            }
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <Link to='/' className="btn btn-ghost normal-case text-xl"><img className="w-full h-full" src="https://i.ibb.co/gWk7nBN/Black-Yellow-White-Modern-Studio-Photo-Logo-1-removebg-preview-1.png" alt="" /></Link>
                        <h4 className="text-xl font-bold hidden md:block">Capture Academy</h4>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center">
                        {user ? <>
                            {user.photoURL ? <img className="w-10 h-10 rounded-full mr-2" src={user.photoURL} alt="User Photo" title={user.displayName} /> : <FaUserCircle className="text-4xl mr-2"></FaUserCircle>}
                            <button onClick={handleLogOut} className="bg-rose-300 px-4 py-2 rounded-md font-bold shadow-md">LogOut</button>

                        </> : <>
                            <FaUserCircle className="text-4xl mr-2"></FaUserCircle>
                            <Link to='/login' className="bg-rose-300 px-4 py-2 rounded-md font-bold shadow-md ">Login</Link>
                        </>

                        }
                        <button className="mx-3" onClick={toggleTheme}>{
                            isDarkMode ? <BsFillMoonStarsFill></BsFillMoonStarsFill> : <BsFillSunFill></BsFillSunFill>

                        }</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;