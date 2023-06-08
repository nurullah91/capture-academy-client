import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import loginAnimation from '../../../public/login-animation.json';
const Login = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset(); // Reset the form
    };

    return (
        <div className='mt-32'>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="">
                            <Lottie animationData={loginAnimation} loop={true} />;
                        </div>
                        <div className="card bg-slate-100 w-full max-w-sm shadow-xl">
                            <div className="card-body">
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                    <p className='text-center mt-3'>New to Capture Academy? Please <Link to='/register' className='text-blue-600 font-bold'>Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;