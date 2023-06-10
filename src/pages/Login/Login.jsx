import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import loginAnimation from '../../../public/login-animation.json';
import SocialLogin from '../../Components/SocialLogin';
const Login = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset(); // Reset the form
    };

    return (
        <div className='mt-32'>
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
                                    <input type="text" {...register('name', { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.name && <span>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    {/* TODO: add forget password section */}
                                    {/* <label className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label> */}
                                </div>
                                <button className="btn bg-blue-400 w-full mt-4 border-none shadow-md">Login</button>
                            </form>
                            <div className="form-control mt-6">
                                <SocialLogin></SocialLogin>
                                <p className='text-center mt-3'>New to Capture Academy? Please <Link to='/register' className='text-blue-600 font-bold'>Register</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;