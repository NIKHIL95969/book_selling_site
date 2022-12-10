import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className='home__image' src="https://m.media-amazon.com/images/I/71Q+KKv0umL._SX3000_.jpg" alt="" />
        </div>

        <div className="home__row">
            <Product /> 
            <Product /> 
        </div>

        <div className="home__row">
            <Product /> 
            <Product /> 
            <Product /> 
        </div>

        <div className="home__row">
            <Product /> 
        </div>
        <div className="home__row">
            {/*  */}
        </div>
    </div>
  )
}
