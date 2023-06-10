import Lottie from "lottie-react";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import signUpAnimation from '../../../public/signup-animation.json';
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../Components/SocialLogin";


const Register = () => {
    // password show hide toggle
    const [showPass, setShowPass] = useState(false)
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Replace with your registration logic
        reset(); // Reset the form
    };

    const password = watch('password');

    return (
        <div className='mt-32'>
            <h3 className="text-4xl text-center font-bold">Please Sign Up</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">

                            <Lottie animationData={signUpAnimation} loop={true} />;
                        </div>
                        <div className="card w-full max-w-sm shadow-xl bg-slate-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register('displayName', { required: true })} placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-rose-600 mt-1 ">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register('email', { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-rose-600 mt-1">Email is required</span>}
                                </div>

                                {/* Name
                                    Email
                                    Password
                                    Confirm Password
                                    Photo URL
                                    (optional) Gender
                                    (optional) Phone Number
                                    (optional) Address */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input type={showPass ? 'text' : 'password'} name='password'  {...register('password', {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])./

                                        })} placeholder="Password" className="input input-bordered w-full" />
                                        <span className='absolute bottom-4 right-3' onClick={() => setShowPass(!showPass)}>{!showPass ? <FaEye ></  FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                                    </div>

                                    {errors.password?.type === 'required' && <span className="text-rose-600 mt-1">Password is required</span>}

                                    {errors.password?.type === 'minLength' && <span className="text-rose-600 mt-1">Password must be more than 6 character</span>}

                                    {errors.password?.type === 'maxLength' && <span className="text-rose-600 mt-1">Password must be less than 20 character</span>}

                                    {errors.password?.type === 'pattern' && <span className="text-rose-600 mt-1">Password must have one uppercase one lower case one number and one special character</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <div className="relative">
                                        <input type={showPass ? 'text' : 'password'}  {...register('confirmPassword', {
                                            required: true,
                                            validate: (value) => value === password || 'Password and Confirm password does not match'
                                        })} placeholder="Confirm Password" className="input input-bordered w-full" />
                                        <span className='absolute bottom-4 right-3' onClick={() => setShowPass(!showPass)}>{!showPass ? <FaEye ></  FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                                    </div>
                                    {errors.confirmPassword && <span className="text-rose-600 mt-1">{errors.confirmPassword.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    {/*TODO: take photo from user not url */}
                                    <input type="text"  {...register('photoURL', { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-rose-600 mt-1">Photo URL is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="number"  {...register('phone')} placeholder="Phone" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn bg-blue-400 border-none shadow-md">Sign up</button>
                                    <SocialLogin></SocialLogin>
                                    <p className="mt-3">Already Have an Account? Please <Link to='/Login' className='text-blue-600 font-bold'>Login</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;