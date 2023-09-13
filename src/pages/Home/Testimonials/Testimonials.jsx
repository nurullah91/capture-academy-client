import { useState } from "react";
import { useEffect } from "react";

const Testimonials = () => {
const [testimonials,setTestimonials] = useState([])

useEffect( ()=>{
    fetch(`${import.meta.env.VITE_BASE_URL}/testimonials`)
    .then(res=>res.json())
    .then(data=>setTestimonials(data))
},[])

    return (
        <div>
            <h2 className="text-4xl text-center text-rose-500">Total Testimonials: {testimonials.length}</h2>
        </div>
    );
};

export default Testimonials;