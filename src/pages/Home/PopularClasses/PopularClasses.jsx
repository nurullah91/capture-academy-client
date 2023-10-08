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
        <h3 className="text-center text-4xl font-bold mt-10">Popular classes</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {
            popularClasses.map(popularClass => <PopularClassCard key={popularClass._id} popularClass={popularClass}/>)
          }
          {/* {
            popularClasses.map(popularClass => <div data-aos="fade-up" key={popularClass._id} className="card bg-slate-100 shadow-xl">
              <figure><img className="" src={popularClass.image} alt="Class image" /></figure>
              <div className="card-body justify-end">
                <h2 className="card-title">{popularClass.name}</h2>
              </div>
            </div>)
          } */}
        </div>
      </div>
    </Container>
  );
};

export default PopularClasses;