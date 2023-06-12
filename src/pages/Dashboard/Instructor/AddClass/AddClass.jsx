import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import useSecuredAxios from "../../../../Hooks/useSecuredAxios";
import Swal from "sweetalert2";

const AddClass = () => {

    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const [securedAxios] = useSecuredAxios();


    const onSubmit = (data) => {
        // creating a new empty form
        console.log(data);
        data.price = parseFloat(data.price);
        data.totalSeats = parseFloat(data.totalSeats);
        data.enrolled = parseFloat(data.enrolled);
        data.availableSeats = parseFloat(data.availableSeats);

        securedAxios.post('/class', data)
            .then(result => {
                if (result.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your class is pending to approve',
                        showConfirmButton: false,
                        timer: 1600
                    })
                }
            })
    }


    return (
        <div>

            <div className="w-11/12 lg:w-9/12 mx-auto">

                <h2 className="text-4xl font-bold text-center my-10">Add a Class</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-cyan-50 shadow-md p-10 rounded-md">
                        <div className="form-control w-full col-span-2">
                            <label className="label">
                                <span className="label-text">Enter class name</span>
                            </label>
                            <input type="text" {...register('name', { required: true })} placeholder="Type here" className="input input-bordered w-full" />
                            {errors.name && <span className="text-rose-600 mt-1 ">Class name is required</span>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Instructor name</span>
                            </label>
                            <input type="text" {...register('instructorName', { required: true })} value={user.displayName} className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Instructor email</span>
                            </label>
                            <input type="email" {...register('email', { required: true })} value={user.email} className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Total seats</span>
                            </label>
                            <input type="number" {...register('totalSeats', { required: true })} className="input input-bordered w-full" />
                            {errors.totalSeats && <span className="text-rose-600 mt-1 ">Total seats is required</span>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available seats</span>
                            </label>
                            <input type="number" {...register('availableSeats', { required: true })} className="input input-bordered w-full" />
                            {errors.availableSeats && <span className="text-rose-600 mt-1 ">Available seats is required</span>}
                        </div>


                        <div className="form-control w-full hidden">
                            <label className="label">
                                <span className="label-text">Enrolled</span>
                            </label>
                            <input type="number" {...register('enrolled', { required: true })} value={0} className="input input-bordered w-full" />
                        </div>


                        <div className="form-control w-full hidden">
                            <label className="label">
                                <span className="label-text">status</span>
                            </label>
                            <input type="text" {...register('status', { required: true })} value='pending' className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" {...register('price', { required: true })} className="input input-bordered w-full" />
                            {errors.price && <span className="text-rose-600 mt-1 ">Price is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter class Image URL</span>
                            </label>
                            <input type="text" {...register('image', { required: true })} className="input input-bordered  w-full" />
                            {errors.image && <span className="text-rose-600 mt-1 ">Class image is required</span>}
                        </div>


                    </div>
                    <div className="text-center">
                        <input className="bg-cyan-400 px-4 py-2 rounded-md font-bold mt-5" type="submit" value='Add class' />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddClass;