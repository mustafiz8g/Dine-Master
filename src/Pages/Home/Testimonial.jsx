import Section_Title from "../../Components/Section_Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import '@smastrom/react-rating/style.css'
import '../../../public/reviews.json'
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {

    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => { setReview(data) })
    }, [])

    return (
        <section>
            <Section_Title
                subHeading={'what our client say'}
                heading={'Testimonial'}
            ></Section_Title>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    review.map(review => <SwiperSlide key={review._id} review={review}>

                        <div className="  flex flex-col text-center items-center space-y-5 mb-7 px-14">
                            <Rating 
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                isRequired
                            />
                            <FaQuoteLeft className="text-7xl" />

                            <p >{review.details}</p>
                            <p className="text-yellow-600 font-medium uppercase">{review.name}</p>
                        </div>


                    </SwiperSlide>)
                }




            </Swiper>


        </section>
    );
};

export default Testimonial;