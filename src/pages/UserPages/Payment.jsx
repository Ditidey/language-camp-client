import React, { useContext } from 'react';
import DivTitle from '../../components/shared/DivTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PayMentForm from './PayMentForm';
import { useParams } from 'react-router-dom';
import { getSelectedClasses } from '../../components/api-calls/studentApi';
import { contextProvider } from '../../AuthProvider';

const Payment = () => {
    const stripPk = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
    const {user} = useContext(contextProvider);
    const {id} = useParams();
    const classes = getSelectedClasses(user?.email);
    const [eachClass] = classes.filter(each =>each._id == id );
    const price = eachClass?.fee;
    console.log('payment com', price, eachClass)
    return (
        <div className='w-full h-full p-20'>
            <DivTitle title={'payment'}></DivTitle>

            <Elements stripe={stripPk}>
                    <PayMentForm  eachClass={eachClass} price={price}></PayMentForm>
            </Elements>
        </div>
    );
};

export default Payment;