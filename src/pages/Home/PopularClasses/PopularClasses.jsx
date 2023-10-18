import usePopularClasses from "../../../Hooks/usePopularClasses";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from "../../../Components/Container";
import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {
  const [popularClasses] = usePopularClasses();

  // initialize aos
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <Container>
      <div>
        <h3 className="text-center text-4xl font-bold mt-10">Popular classes to students</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {
            popularClasses.map(popularClass => <PopularClassCard key={popularClass._id} popularClass={popularClass} />)
          }

        </div>
      </div>
    </Container>
  );
};

export default PopularClasses;