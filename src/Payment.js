import React, { useEffect, useState } from 'react';
import CheckoutProducts from './CheckoutProducts';
import './Payment.css';
import { useStateValue } from './StateProvider';
import {Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer'; 
import axios from './axios';

export default function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements(); 

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket)}`   
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{
            setSucceeded(true);
            setError(null);
            setProcessing(false)

            navigate .replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
        <div className="payment_container">
            <h1 className="payment_checkout">
                Checkout(<Link to="/checkout">{basket?.length}items</Link>)
            </h1>

            {/* Payment address */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>Nikhil Singh</p>
                    <p>Delhi</p>
                </div>
            </div>

            {/* Items */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review item and delivery</h3>
                </div>
                <div className="payment_item">
                    {basket.map(item=>(
                        <CheckoutProducts
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            {/* card */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>

                <div className="payment_details">

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>

                        <div className="payment_priceContainer">
                        <CurrencyFormat
                            renderText={(value)=>(
                                <h3>Order Total: {value}</h3>
                            )}
                            
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p>: "Buy Now" }</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>

                </div>
            </div>

        </div>
    </div>
  )
}
