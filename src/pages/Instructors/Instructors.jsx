import useInstructors from "../../Hooks/useInstructors";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from "../../Components/Container";
import InstructorCard from "../Home/PopularInstructors/InstructorCard";
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
    <Container>

      <div className="mt-24 mb-10 overflow-hidden">
        <h3 className="text-4xl font-bold text-center my-5">Our All Instructors</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}/>)
          }
        </div>
      </div>
    </Container>
  );
};

export default Instructors;