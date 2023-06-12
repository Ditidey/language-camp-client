import React, { useContext, useEffect, useState } from 'react';
import useStatus from '../components/hooks/useStatus';
import { addSelectedClass } from '../components/api-calls/studentApi';
import { contextProvider } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../components/hooks/useTitle';
import anime from 'animejs';
import { useRef } from 'react';

const Classes = () => {
    useTitle('Classes')
    const [dark, setDark] = useState(false);
    const [classes, setClasses] = useState([]);
    const [status] = useStatus();
    const { user } = useContext(contextProvider);
    const location = useLocation()
    const cardRef = useRef(null)
    useEffect(() => {
        anime({
            targets: cardRef.current,
            translateY: '-5vw',
            duration: 6000,
            // easing: 'easeInOutQuad',
            loop: true,
        })
    },
        [])

    useEffect(() => {
        fetch('https://language-camp-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                const classes = data.filter(each => each.status == 'approve')
                setClasses(classes)
            })
    }, [classes])

    const handleSelect = eachClass => {
        if (!user) {
            Swal.fire({
                title: 'Login',
                text: 'Login First',
                timer: '1500',
                icon: 'warning',
                showConfirmButton: false,
            })
            return <Navigate to='/login' state={{ from: location }} replace></Navigate>
        }
        addSelectedClass(eachClass, user)
    }
    return (
        <div className={dark ? 'bg-black text-white pt-28 w-full relative' : ' pt-28 w-full relative'}>
            <div className='ms-5 shadow-2xl w-20 absolute md:end-20 md:top-4 z-20'>
                <label htmlFor="" className='text-black'>Dark Mode</label>
                <button onClick={() => setDark(!dark)} className='toggle ms-3'></button>
            </div>

            <hr className='w-1/3 mx-auto border-purple-600 border-2' />
            <p className='text-center text-3xl font-serif my-3'> Total {classes.length} courses available</p>
            <hr className='w-1/3 mx-auto border-purple-600 border-2' />

            <div ref={cardRef} className='px-10 pt-10 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
                {
                    classes.map(each =>
                        <div key={each._id} className={each.seat == 0 ? 'bg-red-300 card card-side' : 'card card-side bg-base-100 shadow-xl pe-2 w-[470px]'}>
                            <figure><img src={each.class_image} alt="class" className='w-[180px] h-full' /></figure>
                            <div className="card-body w-[200px]">
                                <h2 className="card-title">{each.class_name}</h2>
                                <p>Teacher: {each.teacher_name}</p>
                                <p>Email: {each.teacher_email}</p>
                                {/* <p>Students: {each.students || 0}</p> */}
                                <div className='flex'>
                                    <p className='me-4'>Seat: {each.seat}</p>
                                    <p>Price: ${each.fee}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleSelect(each)} disabled={each.seat == 0 || status} className="btn btn-primary bg-purple-800">Select</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>


        </div>
    );
};

export default Classes;