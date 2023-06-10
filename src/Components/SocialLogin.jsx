import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const [error, setError] = useState('')
    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result =>{
                setError('')
                console.log(result.user)
            })
            .catch(err =>{
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