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
            <Product
                id ="1005"
                title="Lenovo IdeaPad Gaming 3 - 2022 - Everyday Gaming Laptop - NVIDIA GeForce RTX 3050 Graphics - 15.6 FHD Display - 120 Hz - AMD Ryzen 5 6600H - 8GB DDR5 - 258GB SSD - Win 11 - Free 3-month Xbox ..."
                price = {69949.99}
                image="https://m.media-amazon.com/images/I/81zcUyiNcUL._AC_UY218_.jpg"
                rating={4}
            /> 
            <Product
                id ="1006"
                title="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray"
                price = {10999.99}
                image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg"
                rating={5}
            /> 
        </div>

        <div className="home__row">
            <Product
                id ="1000"
                title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES..."
                price = {1999.99}
                image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
                rating={4}
            /> 
            <Product
                id ="1001"
                title="SQL Coding for Beginners: After work guide to start learning SQL on your own. Surprise yourself by discovering how to manage, analyze and manipulate data with simple tips and tricks."
                price = {99.99}
                image="https://m.media-amazon.com/images/I/71X-jlXT-eL._AC_UY218_.jpg"
                rating={3}
            />  

            <Product
                id ="1002"
                title="50+ Linux Commands before joining a Company (Algorithms for Coding Interviews)"
                price = {99.99}
                image="https://m.media-amazon.com/images/I/719cszfn7eL._AC_UY218_.jpg"
                rating={4}
            /> 
        </div>

        <div className="home__row">
            <Product
                id ="1003"
                title="The Know-It-Alls: The Rise of Silicon Valley as a Political Powerhouse and Social Wrecking Ball"
                price = {29.99}
                image="https://m.media-amazon.com/images/I/81vdBiQP8VL._AC_UL320_.jpg"
                rating={4}
            /> 
            <Product
                id ="1004"
                title="A World of Curiosities: A Novel (Chief Inspector Gamache Novel Book 18)"
                price = {1299}
                image="https://m.media-amazon.com/images/I/810y68slmXL._AC_UL320_.jpg"
                rating={4}
            /> 
        </div>
        <div className="home__row">
            {/*  */}
        </div>
    </div>
  )
}
