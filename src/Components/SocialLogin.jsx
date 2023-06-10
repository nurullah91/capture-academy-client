import { FcGoogle} from "react-icons/fc";
import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();

    const handleGoogleSignIn = () =>{
        console.log(googleSignIn);
        // googleSignIn()
        // .then(result=>console.log(result))
        // .catch(err=>console.log(err))
    }
    return (
        <div>
             <div className="divider">Login With</div>
            <button onClick={handleGoogleSignIn} className="flex items-center bg-blue-300 w-full px-5 py-3 rounded-md text-xl font-semibold"><FcGoogle className="mr-3 text-3xl"></FcGoogle> Google</button>
        </div>
    );
};

export default SocialLogin;