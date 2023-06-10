import anime from 'animejs';
import React, { useEffect, useRef, useState } from 'react';
import DivTitle from '../components/shared/DivTitle';

const Instructors = () => {
    const [teachers, setTeachers] = useState([]);
    const cardRef = useRef(null)
    useEffect(() => {
        anime({
            targets: cardRef.current,
            translateY: '-6vw',
            duration: 6000,
            // easing: 'easeInOutQuad',
            loop: true,
        })
    },
        [])
    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => {
                const teachers = data.filter(each => each.status == 'instructor')
                setTeachers(teachers);
            })
    }, [])
    return (
        <div className='pt-28'>
             
            <hr className='w-1/3 mx-auto border-purple-600 border-2' />
            <p className='text-center text-3xl font-serif my-3'> Total {teachers.length} instructors</p>
            <hr className='w-1/3 mx-auto border-purple-600 mb-8 border-2' />

            <div ref={cardRef} className='p-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    teachers.map(tech => 
                    <div ref={cardRef} key={tech._id} className="card w-[400px] h-[500px] glass">
                        <figure><img ref={cardRef} src={tech.photo} alt="car!" className='h-[300px] w-full'/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{tech.name}</h2>
                            <p>{tech.email}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-purple-800">See classes!</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructors;