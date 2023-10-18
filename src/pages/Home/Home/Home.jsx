import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Message from "../Message/Message";
import Testimonials from "../Testimonials/Testimonials";
import Launch from "../Launch/Launch";
import WeAre from "../WeAre/WeAre";
import WhyChose from "../WhyChose/WhyChose";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Award from "../Award/Award";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Capture Academy | Home</title>
            </Helmet>
            <Slider></Slider>
            <WeAre></WeAre>
            <PopularClasses></PopularClasses>
            <Testimonials></Testimonials>
            <PopularInstructors></PopularInstructors>
            <WhyChose></WhyChose>
            <Award></Award>
            <Launch></Launch>
            <PhotoGallery></PhotoGallery>
            <Message></Message>
         
        </div>
    );
};

export default Home;