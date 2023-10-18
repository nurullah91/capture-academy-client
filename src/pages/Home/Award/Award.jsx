import Container from "../../../Components/Container";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Award.css';


import award from "../../../assets/awerds/awerd.jpg"
import award1 from "../../../assets/awerds/awerd1.jpg"
import award2 from "../../../assets/awerds/awerd2.jpg"
import award3 from "../../../assets/awerds/awerd3.jpg"
import award4 from "../../../assets/awerds/awerd4.jpg"
import award5 from "../../../assets/awerds/awerd5.jpg"
import award6 from "../../../assets/awerds/awerd6.jpg"
import award7 from "../../../assets/awerds/awerd7.jpg"



const Award = () => {
    return (
        <div>
            <Container>
            <h2 className="text-4xl font-bold mb-10 text-center ">Our Achievement</h2>

            <div>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={award} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award7} />
        </SwiperSlide>
       
        
      </Swiper>
            </div>
            </Container>
        </div>
    );
};

export default Award;