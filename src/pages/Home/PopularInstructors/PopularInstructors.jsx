import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([]);
    console.log(instructors);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/instructors/popular`)
            .then(data => {
                setInstructors(data.data)
            })
    }, [])

    return (
        <div>
            <h2 className="text-4xl font-bold my-10 text-center">Our Popular Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    instructors.map(instructor => <div key={instructor._id} className="card bg-slate-100 shadow-xl">
                        <figure><img src={instructor.photoURL} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name: {instructor.displayName}</h2>
                            <h2 className="card-title">Email: {instructor.email}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;