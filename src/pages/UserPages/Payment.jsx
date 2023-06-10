import React from 'react';
import DivTitle from '../../components/shared/DivTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PayMentForm from './PayMentForm';

const Payment = () => {
    const stripPk = loadStripe(import.meta.env.VITE_PAYMENT_KEY)
    return (
        <div className='w-full h-full p-20'>
            <DivTitle title={'payment'}></DivTitle>

            <Elements stripe={stripPk} >
                <PayMentForm></PayMentForm>
            </Elements>
        </div>
    );
};

export default Payment;