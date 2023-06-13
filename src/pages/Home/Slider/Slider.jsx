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
                <img src="https://i.ibb.co/DQf41rm/camera-photographic-with-smartphone-devices-generative-ai.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co/7NR938F/camera-photographic-with-smartphone-devices-generative-ai-8.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co/XzXTm4S/camera-photographic-with-smartphone-devices-generative-ai-6.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co/MScvnjg/camera-photographic-with-smartphone-devices-generative-ai-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co/jzHbghF/camera-photographic-with-smartphone-devices-generative-ai.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Slider;
