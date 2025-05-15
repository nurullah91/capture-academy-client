import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login-animation.json";
import SocialLogin from "../../Components/SocialLogin";
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { login } = useAuth();
  const onSubmit = (data) => {
    login(data.email, data.password)
      .then(() => {
        setError("");

        // Reset the form
        reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="mt-32">
      <Helmet>
        <title>Capture Academy | Login</title>
      </Helmet>
      <h3 className="text-4xl text-center font-bold">Please Login</h3>

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="">
            <Lottie animationData={loginAnimation} loop={true} />;
          </div>
          <div className="card bg-slate-100 w-full max-w-sm shadow-xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-rose-600 mt-1 ">
                      email is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password", { required: true })}
                      placeholder="password"
                      className="input input-bordered w-full"
                    />
                    <span
                      className="absolute right-4 top-4"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaRegEye></FaRegEye>
                      )}
                    </span>
                  </div>
                  {errors.password && (
                    <span className="text-rose-600 mt-1 ">
                      Password is required
                    </span>
                  )}

                  {/* TODO: add forget password section */}
                  {/* <label className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label> */}
                </div>
                <p className="text-rose-600">{error}</p>
                <button className="btn bg-blue-300 w-full mt-4 border-none shadow-md">
                  Login
                </button>
              </form>
              <div className="form-control mt-6">
                <SocialLogin></SocialLogin>
                <p className="text-center mt-3">
                  New to Capture Academy? Please{" "}
                  <Link to="/register" className="text-blue-600 font-bold">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
