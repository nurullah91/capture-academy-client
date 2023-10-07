import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Container from '../../../Components/Container';
import InstructorCard from './InstructorCard';

const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([]);

    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/instructors/popular`)
            .then(data => {
                setInstructors(data.data)
            })
    }, [])

    return (
        <Container>
            <div className=' overflow-hidden'>
                <h2 className="text-4xl font-bold my-10 text-center">Our Popular Instructors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">


                    {
                        instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}/>)
                    }
                    
                </div>
            </div>
        </Container>
    );
};

export default PopularInstructors;