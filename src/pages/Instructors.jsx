import anime from 'animejs';
import React, { useEffect, useRef, useState } from 'react';
import useTitle from '../components/hooks/useTitle';

const Instructors = () => {
    useTitle('Instructors')
    const [dark, setDark] = useState(false);
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
        fetch('https://language-camp-server.vercel.app/students')
            .then(res => res.json())
            .then(data => {
                const teachers = data.filter(each => each.status == 'instructor')
                setTeachers(teachers);
            })
    }, [])
    return (
        <div className={dark ? 'bg-black text-white pt-28 w-full relative' : ' pt-28 w-full relative'}>
            <div className='ms-5 shadow-2xl w-20 absolute md:end-20 md:top-4 z-20'>
                <label htmlFor="" className='text-black'>Dark Mode</label>
                <button onClick={() => setDark(!dark)} className='toggle ms-3'></button>
            </div>
            <hr className='w-1/3 mx-auto border-purple-600 border-2' />
            <p className='text-center text-3xl font-serif my-3'> Total {teachers.length} instructors</p>
            <hr className='w-1/3 mx-auto border-purple-600 mb-8 border-2' />

            <div ref={cardRef} className='p-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    teachers.map(tech =>
                        <div ref={cardRef} key={tech._id} className="card w-[400px] h-[500px] glass">
                            <figure><img ref={cardRef} src={tech.photo} alt="car!" className='h-[300px] w-full' /></figure>
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