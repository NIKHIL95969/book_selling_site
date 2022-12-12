import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

export default function () {
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className='checkout__ad' src="https://s3images.coroflot.com/user_files/individual_files/large_601412_suge0avknnpat6lsf3yxyq3nd.jpg" alt="" />
            <div>
                <h2 className="checkout__title">Your Basket</h2>

                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}
