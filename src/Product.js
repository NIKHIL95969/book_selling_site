import React from 'react' ;
import './Product.css';
export default function Product() {
  return (
    <div className="product">
        <div className="product__info">
            <p>The learn startup</p>
            <p className="product__price">
                <small>$</small>
                <strong>199</strong>
            </p>
            <div className="product__rating">
              <p>⭐</p>
            </div>
        </div>

        <img src="https://m.media-amazon.com/images/I/41N+G+A5qkL.jpg" alt="product img" />

        <button>Add to Basket</button>
    </div>
  )
}
