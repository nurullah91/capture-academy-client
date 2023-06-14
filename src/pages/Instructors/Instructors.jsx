import useInstructors from "../../Hooks/useInstructors";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Instructors = () => {
// initialize AOS

AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });



    // getting instructors info from custom hook
    const [instructors] = useInstructors();
    return (
        <div className="mt-24 mb-10 overflow-hidden">
            <h3 className="text-4xl font-bold text-center my-5">Our All Instructors</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    instructors.map(instructor => <div data-aos="fade-up" key={instructor._id} className="card bg-slate-100 shadow-xl">
                    <figure><img src={instructor.photoURL} alt="Instructor Image" /></figure>
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

export default Instructors;