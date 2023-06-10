import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';

const PayMentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorCard, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return
        }
        // console.log(card)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message)
        } else {
            setError('');
            console.log('payment', paymentMethod)
        }
    }


    return (
        <div> 
            {errorCard && <p className='text-red-500 text-xl pt-5 px-20 '>{errorCard}</p>}
        <form onSubmit={handleSubmit} className='bg-purple-100 m-32 px-20 pt-20 pb-5 rounded-sm shadow-xl'>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },

                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe} className='btn bg-purple-800 text-blue-100 mt-20 ms-52'>
                Confirm Pay
            </button>
        </form>
        </div>
    );
};

export default PayMentForm;