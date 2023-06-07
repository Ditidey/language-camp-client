
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import slider from '../../../public/slider.json';
import Aos from "aos";
import { Link } from "react-router-dom";

const SliderFirst = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className="pt-2">
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        slider.map(slide => <SwiperSlide key={slide.id}>
                            <div data-aos="zoom-in" data-aos-duration="3000" style={{
                                backgroundImage: `url(${slide.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '500px',
                            }} className="opacity-90 bg-black">
                                  <h2 data-aos="fade-down"  data-aos-duration="3000" className="text-7xl text-purple-900 font-bold font-serif pt-28 ps-20">{slide.name}</h2>

                                  <p className=" text-2xl text-black font-mono pt-5 ps-20" data-aos="fade-left"  data-aos-duration="3000">{slide.shortMessage}</p>
                                  <p className=" text-2xl text-black   font-mono ps-20" data-aos="fade-right"  data-aos-duration="3000">{slide.shortMessage1}</p>
                                <p className="ps-20    text-2xl mt-4">Enroll Start: <span className="text-red-800">21July, 2023</span></p>
                                  <button data-aos="fade-up"  data-aos-duration="3000" className="p-5 bg-purple-800 text-blue-100 ms-20 mt-14 uppercase"><Link to='/classes'>More about classes</Link>  </button>
                            </div>

                        </SwiperSlide>)
                    }

                </Swiper>
            </>
        </div>
    );
};

export default SliderFirst;