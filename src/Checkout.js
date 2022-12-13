import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProducts from './CheckoutProducts';

export default function () {
  const [ {basket,user}, dispatch] = useStateValue();

  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className='checkout__ad' src="https://s3images.coroflot.com/user_files/individual_files/large_601412_suge0avknnpat6lsf3yxyq3nd.jpg" alt="" />
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">Your Basket</h2>

                {basket.map(item => (
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

        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}
