import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useSecuredAxios from "../../../../Hooks/useSecuredAxios";
import Swal from "sweetalert2";

const AddFeedback = () => {
    const {id} = useParams();
    const [securedAxios] = useSecuredAxios();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        securedAxios.patch(`/manage-class/feedback/${id}`, data)
        .then(result=>{

            if(result.data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Feedback sent',
                    showConfirmButton: false,
                    timer: 1600
                })
                reset()
            }
        })
        
    }


    return (
        <div className="w-3/4 mx-auto lg:w-1/2">

            <Helmet>
                <title>Capture Academy | Feedback</title>
            </Helmet>


            <h2 className="text-4xl py-10 font-bold text-center">Give a Feedback</h2>

            <div className="border-2 p-8 mb-10  bg-cyan-50 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea {...register('feedback', { required: true })} className="textarea w-full  textarea-info" placeholder="feedback"></textarea>
                    {errors.feedback && <p className="text-rose-600 mt-1 ">Feedback is Empty</p>}
                    <button className="btn bg-cyan-500">Send</button>
                </form>
            </div>
        </div>
    );
};

export default AddFeedback;