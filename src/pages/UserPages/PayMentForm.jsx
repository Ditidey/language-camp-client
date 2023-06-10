import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { contextProvider } from '../../AuthProvider';
// import useAxios from '../../components/hooks/useAxios';

const PayMentForm = ({ eachClass, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorCard, setError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState('');
    const {user} = useContext(contextProvider);
    // const [axiosFetch] = useAxios();
    // const price = eachClass.price;
    console.log(price, eachClass)

    useEffect(() => {
        console.log('use effect ...',price)
        // axiosFetch.post('/create-payment', { price })
        //     .then(res => {
        //         console.log(res.data.clientSecret)
        //         setClientSecret(res.data.clientSecret)
        //     })
         fetch('http://localhost:5000/create-payment', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({price})
         }).then(res=>res.json())
         .then(data =>{
             console.log(data.clientSecret)
            setClientSecret(data.clientSecret)
         })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
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
            // console.log('payment', paymentMethod)
        }
         setProcessing(true)
     const {paymentIntent, error:confirmError} =await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name:  user?.displayName || 'Unknown',
                        email: user?.email || 'Unknown',
                    },
                },
            })
             if(confirmError){
                console.log(confirmError)
                setError(confirmError.message)
             }

             console.log('intent', paymentIntent)
             setProcessing(false);

             if(paymentIntent.status === 'succeeded'){
                setSuccess(paymentIntent.id);
             }
    }


    return (
        <div>
            {errorCard && <p className='text-red-500 text-xl pt-5 px-20 '>{errorCard}</p>}
            {success && <p className='text-purple-700 text-xl py-5 px-20 bg-yellow-100'>Payment completed <br /> Transaction Id: {success}</p>}
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
                <button type="submit" disabled={!stripe || !clientSecret || processing} className='btn bg-purple-800 text-blue-100 mt-20 ms-52'>
                    Confirm Pay
                </button>
            </form>
        </div>
    );
};

export default PayMentForm;