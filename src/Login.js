import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate} from 'react-router-dom';
import { auth } from './firebase';


export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // firebase sign in
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            navigate.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password).then((auth) =>{
            navigate.push('/')
        })
        .catch(error => alert(error.message))

        // register with firebase
    }

  return (
    <div className="login">
        <Link to='/'>
            <img className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG7.png" alt="" />
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={ e => setPassword(e.target.value)} />

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}
