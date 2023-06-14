import { useState } from "react";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import useInstructor from "../../Hooks/useInstructor";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ singleClass }) => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const navigate = useNavigate();
    // disable for button disable
    const [disabled, setDisabled] = useState(false);

    const handleSelect = (item) => {
       
        if (user && user.email) {
            const selectedClass = { classId: item._id, name: item.name, image: item.image, email: user.email, price: item.price, status: "pending" };

            axios.post(`${import.meta.env.VITE_BASE_URL}/selected-class`, selectedClass)
                .then(data => {
                    if (data.data.insertedId) {
                        setDisabled(true);
                        Swal.fire({
                            title: `${item.name} is selected for Enroll`,
                            icon: 'success',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Pay Now!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/dashboard/my-selected-class')
                            }
                        })

                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Select for Enroll',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div  data-aos="flip-left">
            <div className={`card ${singleClass.availableSeats === 0 ? "bg-rose-300" : "bg-slate-100"} shadow-xl`}>

                <figure><img src={singleClass.image} alt="Class Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{singleClass.name}</h2>
                    <p className="font-semibold">Instructor: {singleClass.instructorName}</p>
                    <p className="font-semibold">Available Seats: {singleClass.availableSeats}</p>
                    <p className="text-orange-500 font-bold">price: ${singleClass.price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleSelect(singleClass)} disabled={disabled || isAdmin || isInstructor || singleClass.availableSeats === 0} className="btn bg-cyan-200 shadow-md border-none">Select to Enroll</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ClassCard;