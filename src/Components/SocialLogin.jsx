import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result => {
                setError('');
                const loggedUser = result.user;

                const saveUser = { displayName: loggedUser.displayName, email: loggedUser.email, photoURL: loggedUser.photoURL, role: "Student" }

                fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        // show success seal
                        Swal.fire(
                            'Success',
                            'Login Successful!',
                            'success'
                        )
                        navigate(from, { replace: true })

                    })


            })
            .catch(err => {
                setError(err.message)
                console.log(err)
            })
    }
    return (
        <div>
            <div className="divider">Login With</div>
            <button onClick={handleGoogleSignIn} className="flex items-center bg-blue-300 w-full px-5 py-3 rounded-md text-xl font-semibold"><FcGoogle className="mr-3 text-3xl"></FcGoogle> Google</button>
            <p className="text-rose-600">{error}</p>
        </div>
    );
};

export default SocialLogin;