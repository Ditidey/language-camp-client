import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { contextProvider } from '../../AuthProvider';
import Swal from 'sweetalert2';
import useAxios from '../../components/hooks/useAxios';

const PayMentForm = ({ eachClass, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorCard, setError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState('');
    const { user } = useContext(contextProvider);
    const [axiosFetch] = useAxios();
    
        useEffect(() => {
            // console.log('use effect ...', price)
          if(price > 0){
               axiosFetch.post('/create-payment', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
            
          }
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
        const { error } = await stripe.createPaymentMethod({
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
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'Unknown',
                    email: user?.email || 'Unknown',
                },
            },
        })
        if (confirmError) {
            console.log(confirmError)
            setError(confirmError.message)
        }

        console.log('intent', paymentIntent)
        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setSuccess(paymentIntent.id);
            const payDetails = {
                transaction_id: paymentIntent.id,
                class_id: eachClass.class_id,
                class_image: eachClass.class_image,
                class_name: eachClass.class_name,
                fee: price,
                date: new Date(),
                seat: eachClass.seat - 1,
                student_email: eachClass.student_email,
                teacher_email: eachClass.teacher_email,
                students: eachClass.students + 1 || 1,
            }
            fetch('https://language-camp-server.vercel.app/payment',{
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(payDetails)
            }).then(res=>res.json())
            .then(data=>{
                
                if(data.insertedId || modifiedCount > 0){
                    Swal.fire(
                        'Payment done'
                    )
                }
               
            })
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