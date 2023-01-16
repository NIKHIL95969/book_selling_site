import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import Footer from './Footer.js';
import Payment from './Payment.js';
import Orders from "./Orders";
import { useStateValue } from './StateProvider';
import { useEffect } from "react";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth } from "./firebase";

const promise = loadStripe(
  "pk_test_51MPWnvSDn5Kl4m2VUpgdM3eApAheaMpz8uGMsmgOMWu8QB2jygQ6zCZeqYbv6DgBf9ePzRRg6e1JIkEcjSrquRWC00WgKMFcNT"
);

function App() {

  const [ {}, dispatch] = useStateValue();

  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      console.log('the user is ',authUser);

      if(authUser){
        // user loged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        // user logout

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
  
    <Router>
      <div className="App">
      
        <Routes>
          
          <Route path="/login" element={
            <>
              <Login />
            </>
          } />

          <Route path="/orders" element={
            <>
              <Header />
              <Home />
            </>
          } />

          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          
          <Route path="/checkout" element ={
            <>
              <Header />
              <Checkout />
            </>
          } />

          <Route path="/payment" element ={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          } />

        </Routes>

      </div>
    </Router>
 
  );
}

export default App;

