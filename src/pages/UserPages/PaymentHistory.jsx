import React, { useContext } from 'react';
import DivTitle from '../../components/shared/DivTitle';
import useAxios from '../../components/hooks/useAxios';
import { useQuery } from 'react-query';
import { contextProvider } from '../../AuthProvider';

const PaymentHistory = () => {
    const {user} = useContext(contextProvider);
    const [axiosFetch] = useAxios();

    const {data: classes=[], refetch} = useQuery({
        queryKey: ['payment'],
        queryFn: async ()=>{
            const res = await axiosFetch.get(`/get-payment?email=${user?.email}`)         
            return res.data;
        }
    })
    const sortedPayments = classes.sort((a, b) => new Date(b.date) - new Date(a.date));
    console.log(sortedPayments)
    return (
        <div className='w-full h-full p-20'>
            <DivTitle title={'payment history'}></DivTitle>
           {
            sortedPayments && sortedPayments.length > 0 &&          
            <div className=' '>
                <p className='px-10 py-2 text-xl font-serif font-bold'>Payment for {sortedPayments.length} classes</p>
                {
                     sortedPayments?.map(each => <div key={each._id} className='p-5 bg-purple-50 shadow-xl my-3 px-10'>
                         <p>Transaction id: {each.transaction_id}</p>
                         <p>Class id: {each.class_id}</p>
                         <p>Class Name: {each.class_name || 'Not found'}</p>
                         <p>Date: {new Date(each.date).toLocaleDateString() || ''}</p>
                    </div>)
                }
            </div>
           }
        </div>
    );
};

export default PaymentHistory;