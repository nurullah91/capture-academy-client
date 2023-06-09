import React from 'react';
import { useForm } from 'react-hook-form';

const PasswordForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Password:</label>
                <input type="password" name="password" ref={register({ required: true, minLength: 8 })} />
                {errors.password && errors.password.type === 'required' && <p>Password is required</p>}
                {errors.password && errors.password.type === 'minLength' && <p>Password must be at least 8 characters long</p>}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    ref={register({
                        required: true,
                        validate: (value) => value === password || 'Passwords do not match',
                    })}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PasswordForm;