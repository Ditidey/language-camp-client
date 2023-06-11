import React, { useContext } from 'react';
import { contextProvider } from '../../AuthProvider';
import useAxios from '../../components/hooks/useAxios';
import { useQuery } from 'react-query';
// import { useEffect } from 'react';

const EnrolledClasses = () => {
    const { user } = useContext(contextProvider);
    const [axiosFetch] = useAxios();
    console.log(user.email)
   
    const {data: classes=[], refetch} = useQuery({
        queryKey: ['payment'],
        queryFn: async ()=>{
            const res = await axiosFetch.get(`/get-payment?email=${user?.email}`)    
            // console.log(res)     
            return res.data;
        }
    })
    return (
        <div className='w-full h-full p-10'>
            <hr className='w-2/3 ms-44 border-purple-600' />
            <p className='text-center text-3xl font-serif my-2 uppercase'> Total {classes.length} enrolled classes</p>
            <hr className='w-2/3 ms-44 border-purple-600 mb-10' />

            {
                classes && Array.isArray(classes) && classes.length > 0 && 
                <div className='px-10 pb-20 grid md:grid-cols-2 gap-5'>
                {
                     classes.map(each =>
                        <div key={each._id} className={each.seat == 0 ? 'bg-red-300 card card-side' : 'card   bg-base-100 shadow-xl w-[350px] h-[400px]'}>
                            <figure><img src={each.class_image} alt="class" className='w-full h-[250px]' /></figure>
                            <div className="card-body w-full">
                                <h2 className="card-title">{each.class_name}</h2>
                                <p>Teacher: {each.teacher_name}</p>
                                <p className='mt-0 pt-0'>Email: {each.teacher_email}</p>
                                <div className='flex'>
                                    <p className='me-4'>Seat: {each.seat}</p>
                                    <p>Price: ${each.fee}</p>
                                </div>
                                 
                            </div>
                            <button className='rounded-b-xl w-full bg-purple-600 py-2'>Paid</button>
                        </div>
                    )
                }
            </div>
            }
        </div>
    );
};

export default EnrolledClasses;