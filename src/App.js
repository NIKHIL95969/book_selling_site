import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import { useStateValue } from './StateProvider';
import { useEffect } from "react";


import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth } from "./firebase";


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

          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
          
          <Route path="/checkout" element ={
            <>
              <Header />
              <Checkout />
            </>
          } />


        </Routes>

      </div>
    </Router>
 
  );
}

export default App;

