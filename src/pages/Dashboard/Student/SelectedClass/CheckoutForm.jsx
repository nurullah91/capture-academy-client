import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../../Hooks/useAuth';
import useSecuredAxios from '../../../../Hooks/useSecuredAxios';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ selectedClass, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [securedAxios] = useSecuredAxios();
    const navigate = useNavigate();
    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            securedAxios.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, securedAxios])





    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message)
            console.log('error', error);
        }
        else {
            setCardError('');
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'unknown'
                    }
                }
            }
        )

        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);


            // save payment information
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                classes: selectedClass.length,
                classId: selectedClass.map(item => item._id),
                className: selectedClass.map(item => item.name)
            }

            securedAxios.post('/payment', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire(
                            'Success!',
                            'Payment successful!',
                            'success'
                        )
                        navigate('/dashboard/my-enrolled-class')
                    }
                })


        }
    }
    return (
        <div className='md:w-3/4 mx-auto my-5 bg-slate-100 shadow-md px-6 py-10 rounded-md'>
            <form onSubmit={handleSubmit}>
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
                <button className='bg-orange-400 px-5 py-2 font-bold text-white shadow-md rounded my-6' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-center text-red-500'>{cardError}</p>}
            {transactionId && <p className='text-orange-500 font-bold'>Transaction complete with transactionId: <span className='text-green-600 '>{transactionId}</span></p>}
        </div>
    );
};

export default CheckoutForm;