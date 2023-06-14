import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

const Slider = () => {
    return (
        <div className="">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>

                        <img src="https://i.ibb.co/DQf41rm/camera-photographic-with-smartphone-devices-generative-ai.jpg" alt="" />

                        <div className='absolute top-0 left-0 bg-black bg-opacity-80 h-full w-full flex space-y-5  flex-col items-center'>
                            <h2 className='text-3xl font-bold my-auto text-rose-500 p-4'>Capture Life&apos;s Beauty: Learn Photography Today!</h2>

                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='relative'>
                        <img src="https://i.ibb.co/7NR938F/camera-photographic-with-smartphone-devices-generative-ai-8.jpg" alt="" />

                        <div className='absolute top-0 left-0 bg-black bg-opacity-80 h-full w-full flex space-y-5  flex-col items-center'>
                            <h2 className='text-3xl font-bold my-auto text-rose-500 p-4'>Master the Art of Visual Storytelling: Enroll in Our Photography Courses</h2>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="https://i.ibb.co/XzXTm4S/camera-photographic-with-smartphone-devices-generative-ai-6.jpg" alt="" />

                        <div className='absolute top-0 left-0 bg-black bg-opacity-80 h-full w-full flex space-y-5  flex-col items-center'>
                            <h2 className='text-3xl font-bold my-auto text-rose-500 p-4'>Unleash Your Creativity: Join Our Photography Community</h2>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>

                        <img src="https://i.ibb.co/MScvnjg/camera-photographic-with-smartphone-devices-generative-ai-1.jpg" alt="" />

                        <div className='absolute top-0 left-0 bg-black bg-opacity-80 h-full w-full flex space-y-5  flex-col items-center'>
                            <h2 className='text-3xl font-bold my-auto text-rose-500 p-4'>From Beginner to Pro: Elevate Your Photography Skills with Us</h2>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="https://i.ibb.co/jzHbghF/camera-photographic-with-smartphone-devices-generative-ai.jpg" alt="" />

                        <div className='absolute top-0 left-0 bg-black bg-opacity-80 h-full w-full flex space-y-5  flex-col items-center'>
                            <h2 className='text-3xl font-bold my-auto text-rose-500  p-4'> Enroll now and embark on a visual adventure</h2>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
