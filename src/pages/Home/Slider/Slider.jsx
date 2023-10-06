import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay]);

const Slider = () => {
    return (
        <div className="mt-16 md:mt-0">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>

                        <img src="https://i.ibb.co/8PrMWJB/slider1.jpg" alt="slider image" />

                        <div className='absolute top-0 left-0 bg-gradient-to-r from-[#0259eed5] via-[#055eeecb] to-transparent h-full w-full flex items-center pl-10'>

                            <div className='w-full'>
                                <h2 data-aos="fade-right" className='text-3xl lg:text-5xl font-semibold my-auto text-white w-3/4 md:w-1/2 mb-5 md:mb-2'>Capture Life&apos;s Beauty</h2>
                                <p data-aos="fade-left" className='w-3/4 text-blue-50 mb-5 hidden md:block'>Join Capture Academy this summer to elevate your photography skills through expert guidance and hands-on learning.</p>

                                <Link className='text-white border px-4 py-2 hover:bg-blue-500 rounded' to="/classes">Get started</Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='relative'>
                        <img src="https://i.ibb.co/0Xvz639/slider2.jpg" alt="slider image" />

                        <div className='absolute top-0 left-0 bg-gradient-to-r from-[#0259eed5] via-[#055eeecb] to-transparent h-full w-full flex items-center pl-10'>

                            <div className='w-full'>
                                <h2 data-aos="fade-right" className='text-3xl lg:text-5xl font-semibold my-auto text-white w-3/4 md:w-1/2 mb-5 md:mb-2'>Summer Camp for Young Shutterbugs</h2>
                                <p data-aos="fade-left" className='w-3/4 text-blue-50 mb-5 hidden md:block'>Capture Academy offers a magical summer camp for young shutterbugs, combining creativity and adventure through photography.</p>

                                <Link className='text-white border px-4 py-2 hover:bg-blue-500 rounded' to="/classes">Get started</Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="https://i.ibb.co/6YrgMxt/slider3.jpg" alt="slider image" />

                        <div className='absolute top-0 left-0 bg-gradient-to-r from-[#0259eed5] via-[#055eeecb] to-transparent h-full w-full flex items-center pl-10'>

                            <div className='w-full'>
                                <h2 data-aos="fade-right" className='text-3xl lg:text-5xl font-semibold my-auto text-white w-3/4 md:w-1/2 mb-5 md:mb-2'>Framing Memories, One Click at a Time</h2>
                                <p data-aos="fade-left" className='w-3/4 text-blue-50 mb-5 hidden md:block'>Capture Academy is where art and technology converge, allowing you to frame memories one click at a time.</p>

                                <Link className='text-white border px-4 py-2 hover:bg-blue-500 rounded' to="/classes">Get started</Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>

                        <img src="https://i.ibb.co/QrStyWf/slider4.jpg" alt="slider image" />

                        <div className='absolute top-0 left-0 bg-gradient-to-r from-[#0259eed5] via-[#055eeecb] to-transparent h-full w-full flex items-center pl-10'>

                            <div className='w-full'>
                                <h2 data-aos="fade-right" className='text-3xl lg:text-5xl font-semibold my-auto text-white w-3/4 md:w-1/2  mb-5 md:mb-2'>Summer Camp for Future Photographers</h2>
                                <p data-aos="fade-left" className='w-3/4 text-blue-50 mb-5 hidden md:block'>Capture Academy is the place where young talents evolve into future photographers, nurturing skills and creativity for a bright future.</p>

                                <Link className='text-white border px-4 py-2 hover:bg-blue-500 rounded' to="/classes">Get started</Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="https://i.ibb.co/1Z29qCv/slider5.jpg" alt="slider image" />

                        <div className='absolute top-0 left-0 bg-gradient-to-r from-[#0259eed5] via-[#055eeecb] to-transparent h-full w-full flex items-center pl-10'>

                            <div className='w-full'>
                                <h2 data-aos="fade-right" className='text-3xl lg:text-5xl font-semibold my-auto text-white w-3/4 md:w-1/2 mb-5 md:mb-2'>Discover Your Photographic Passion with Capture Academy</h2>
                                <p data-aos="fade-left" className='w-3/4 text-blue-50 mb-5 hidden md:block'>Experience the joy of snapping, learning, and having fun at Capture Academy&apos;s photography-centered summer activities.</p>

                                <Link className='text-white border px-4 py-2 hover:bg-blue-500 rounded' to="/classes">Get started</Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
