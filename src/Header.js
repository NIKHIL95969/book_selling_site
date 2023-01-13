import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import headerlogo from './assets/header_logo.png';

function Header () {
  const [ {basket, user}, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header'>
        
        <Link to="/" >
          <img className="header__logo" src={headerlogo} alt="logo" />
        </Link>

        <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/* <span className="material-symbols-outlined">
        Search
        </span> */}
      </div>

        <div className="header__nav">
            <Link to={!user && '/login'}>
              <div onClick={handleAuthenticaton}>
                <div className="header__option">
                    <span className="header__optionLineOne" style={{textDecoration: 'none'}}>Hello { !user ? 'Guest' : user.email}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
                </div>
              </div>
            </Link>

            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>

            {/* <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div> */}

            <Link to="/checkout">
              <div className="header__optionBasket">
                  <ShoppingBasketIcon />
                  <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
              </div>
            </Link>
        </div>

    </div>
  )
}

export default Header;
