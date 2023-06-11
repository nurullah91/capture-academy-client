import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-slate-100 shadow-md fixed top-0 z-50 bg-opacity-60">
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
                        <h4 className="text-xl font-bold">Capture Academy</h4>
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
                    <div className="flex">
                        {user ? <>
                            <img src={user.photoURL} alt="" />
                            <button onClick={handleLogOut} className="bg-rose-300 px-4 py-2 rounded-md font-bold shadow-md">LogOut</button>

                        </> : <>
                        <FaUser></FaUser>
                            <Link to='/login' className="bg-rose-300 px-4 py-2 rounded-md font-bold shadow-md">Login</Link>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;