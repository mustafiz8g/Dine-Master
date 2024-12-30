
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import Section_Title from '../../Components/Section_Title';


const Category = () => {
    return (
        <>
        <section>
          <Section_Title 
          subHeading={'From 11:00 AM 8:00 PM'}
          heading={'order online'}
          ></Section_Title>
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h2 className='text-center uppercase  -mt-12 font-medium text-white'>Salad</h2>
            </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            </SwiperSlide>
         
        </Swiper>
        </section>
      </>
    );
};

export default Category;