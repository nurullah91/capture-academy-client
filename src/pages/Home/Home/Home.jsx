import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Message from "../Message/Message";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Capture Academy | Home</title>
            </Helmet>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Testimonials></Testimonials>
            <Message></Message>
         
        </div>
    );
};

export default Home;