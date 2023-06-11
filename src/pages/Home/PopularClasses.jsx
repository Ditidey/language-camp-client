import React from 'react';
import DivTitle from '../../components/shared/DivTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { useEffect } from 'react';
import { useState } from 'react';
import anime from 'animejs';
import { useRef } from 'react';

const PopularClasses = () => {
    const [selects, setSelected] = useState([]);
    const [students, setStudents] = useState('students');
    const cardRef = useRef(null)

    useEffect(() => {
        anime({
            targets: cardRef.current,
            translateX: '-3vw',
            duration: 6000,
            // easing: 'easeInOutQuad',
            loop: true,
        })
    },
        [])
    useEffect(() => {
        console.log(students)
        fetch(`https://language-camp-server.vercel.app/classes?students=${students}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // const sortData = data.sort((a,b) => (a.students || '')  < (b.students || '')  ? -1 : 1)
                setSelected(data)
            })
    }, [students])
   
    return (
        <div className='py-20 px-20 mt-10'>
            <DivTitle title={'popular classes'}></DivTitle>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                ref={cardRef}
            > 
            {
                selects.slice(0, 6).map(select =>
                 <SwiperSlide key={select._id} className='py-10' > 
                    <div className='px-5'  >
                        <img src={select.class_image} alt="" className='w-full h-[200px] rounded-xl'/>
                        <p className='text-xl text-center font-serif font-bold mt-3 ms-3'>{select.class_name}</p>
                        <p className='text-lg text-center font-serif mt-3 ms-3'>Instructor: {select.teacher_name}</p>
                    </div>
                </SwiperSlide>)
            }
                
            </Swiper>
        </div>
    );

};

export default PopularClasses;