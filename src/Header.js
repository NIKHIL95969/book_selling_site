import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";

function Header () {
  return (
    <div className='header'>
        
        <Link to="/" >
          <img className="header__logo" src="https://lh5.googleusercontent.com/proxy/OmGpt6hwutjo4ZnHgsPGitSUyxglpUSr6QZ7LWpz1kpHcgt8UkSv2MH3uakhGRQmhyzPwZJW9VUyZL7AdRpsP28Bb6yletHyF6pC4YXgbi3X28Mi0L0-svViEZn-_KRnGQ0=w1200-h630-p-k-no-nu " alt="logo" />
        </Link>

        <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/* <span className="material-symbols-outlined">
        Search
        </span> */}
      </div>

        <div className="header__nav">
            <div className="header__option">
                <span className="header__optionLineOne">Hello Guest</span>
                <span className="header__optionLineTwo">Sign in</span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout">
              <div className="header__optionBasket">
                  <ShoppingBasketIcon />
                  <span className="header__optionLineTwo header__basketCount">0</span>
              </div>
            </Link>
        </div>

    </div>
  )
}

export default Header;
