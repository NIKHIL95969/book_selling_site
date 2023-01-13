import React from "react";
import "./Home.css";
import Product from "./Product";
import banner1 from './assets/banner_img.png';

export default function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className='home__image' src={banner1} alt="" />
        </div>

        <div className="home__row">
            <Product
                id ="1005"
                title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones ..."
                price = {149.99}
                image="https://m.media-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg"
                rating={4}
            /> 
            <Product
                id ="1006"
                title="The Successful Mind: Tools to Living a Purposeful, Productive, and Happy Life"
                price = {299.99}
                image="https://m.media-amazon.com/images/I/41o-EryxVrL._SX331_BO1,204,203,200_.jpg"
                rating={5}
            /> 
        </div>

        <div className="home__row">
            <Product
                id ="1000"
                title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Mass Market"
                price = {199}
                image="https://m.media-amazon.com/images/I/51A88IvtjGL._SX331_BO1,204,203,200_.jpg"
                rating={4}
            /> 
            <Product
                id ="1001"
                title="Quantum Computing: An Applied Approach"
                price = {99.99}
                image="https://m.media-amazon.com/images/I/41G0JZY2BkL._SX330_BO1,204,203,200_.jpg"
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

        <div className="home__row rap_box">
            <Product
                id ="1005"
                title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Mass Market"
                price = {199}
                image="https://m.media-amazon.com/images/I/51A88IvtjGL._SX331_BO1,204,203,200_.jpg"
                rating={4}
            /> 
            <Product
                id ="1006"
                title="Quantum Computing: An Applied Approach"
                price = {99.99}
                image="https://m.media-amazon.com/images/I/41G0JZY2BkL._SX330_BO1,204,203,200_.jpg"
                rating={3}
            />  

            <Product
                id ="1007"
                title="50+ Linux Commands before joining a Company (Algorithms for Coding Interviews)"
                price = {99.99}
                image="https://m.media-amazon.com/images/I/719cszfn7eL._AC_UY218_.jpg"
                rating={4}
            /> 
            <Product
                id ="1008"
                title="50+ Linux Commands before joining a Company (Algorithms for Coding Interviews)"
                price = {99.99}
                image="https://m.media-amazon.com/images/I/719cszfn7eL._AC_UY218_.jpg"
                rating={3}
            /> 
        </div>


    </div>
  )
}
