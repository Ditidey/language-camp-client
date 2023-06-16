 
import anime from 'animejs';
import React, { useEffect, useRef, useState } from 'react';
import DivTitle from '../../components/shared/DivTitle';
import PopularInstrSeeButton from './PopularInstrSeeButton';
const PopularInstruc = () => {
    const [teachers, setTeachers] = useState([]);
    const cardRef = useRef(null)
    useEffect(() => {
        anime({
            targets: cardRef.current,
            translateX: '3vw',
            duration: 6000,
            // easing: 'easeInOutQuad',
            loop: true,
        })
    },
        [])
      
    useEffect(() => {
        fetch('https://language-camp-server.vercel.app/students')
            .then(res => res.json())
            .then(data => {
                const teachers = data.filter(each => each.status == 'instructor')
                setTeachers(teachers);
            })
    }, [])
    return (
        <div className='pt-10 pb-5'>
            <DivTitle title={'Popular Instructors'}></DivTitle>

            <div className='px-20 py-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    teachers.slice(0, 6).map(tech => 
                    <div key={tech._id} className="card w-[400px] h-[500px] glass">
                        <figure><img ref={cardRef} src={tech.photo} alt="car!" className='hover:scale-125 duration-500 h-[300px] w-[400px]'/></figure>
                        <div className="card-body text-center font-serif">
                            <h2 className=" font-bold text-2xl text-center">{tech.name}</h2>
                            <p>{tech.email}</p>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-primary bg-purple-800">See classes!</button>
                                  
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstruc;