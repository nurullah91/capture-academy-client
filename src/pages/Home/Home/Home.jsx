import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Capture Academy | Home</title>
            </Helmet>
            <Slider></Slider>
        </div>
    );
};

export default Home;