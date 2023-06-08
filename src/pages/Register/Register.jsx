import Lottie from "lottie-react";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import signUpAnimation from '../../../public/signup-animation.json';
import { useState } from "react";


const Register = () => {
    // password show hide toggle
    const [showPass, setShowPass] = useState(true)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Replace with your registration logic
        reset(); // Reset the form
    };

    return (
        <div className='mt-32'>

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
                                    <input type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" />
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
                                    <input type={showPass?'text': 'password'} placeholder="Password" className="input input-bordered" />
                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type={showPass?'text': 'password'} placeholder="Confirm Password" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    {/*TODO: take photo from user not url */}
                                    <input type="text" placeholder="Photo URL" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" placeholder="Phone" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign up</button>
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