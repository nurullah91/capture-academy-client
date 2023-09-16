import { useState } from "react";
import { useEffect } from "react";
import Container from "../../../Components/Container";

// swiper credential
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonial.css';




const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/testimonials`)
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (

        <div className="testimonial-bg">

            <Container>
                <h2 className='text-4xl text-blue-200 font-bold text-center mb-6'>Our testimonials</h2>

                <div>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper "
                    >
                        {
                            testimonials.map(item =>
                                <SwiperSlide className="pt-[40px] pb-[70px]" key={item._id}>
                                    <div className="w-3/4  p-6 text-white relative bg-blue-900 bg-opacity-80 rounded-md">
                                        <h1 className="text-9xl absolute -top-12 -left-3 text-blue-300">&#10077;</h1>
                                        <p className="pb-16 pt-5">{item.testimonial}</p>
                                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">

                                        <img src={item.photo} alt="user" className="w-24 h-24 rounded-full" />
                                        <h2 className="text-xl text-blue-50 font-bold">{item.name}</h2>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>

            </Container>
        </div>
    );
};

export default Testimonials;