import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';



// CSS-----------------------------

const header__optionLineOne = {
    fontSize: "12px",
    fontWeight: "500"
    };
const header__optionLineTwo = {
    fontSize: "13px",
    fontWeight: "800"
    };

// CSS-----------------------------



function Header() {

    const [{basket}] = useStateValue();

    return (

        <div className="header">
                <Link to="/">
                <img className="header__logo" alt="Logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                </Link>

                <div className="header__search">
                    <input className="header__searchInput" type="text"/>
                    <SearchIcon className="header__SearchIcon"/>
                </div>

                <div className="header__nav">

                    <div className="country">
                        <img src="https://cdn.countryflags.com/thumbs/india/flag-button-round-250.png" alt="India" />
                        <ArrowDropDownIcon className="arrows" />
                    </div>


                    <Link to="./login">
                    <div className="header__option">
                        <span style={header__optionLineOne}>Hello, Sign in</span>
                        <span style={header__optionLineTwo}>Account & Lists</span>
                    </div>
                    </Link>


                    <div className="header__option">
                    <span style={header__optionLineOne}>Returns</span>
                    <span style={header__optionLineTwo}>& Orders</span>
                    </div>

                    <div className="header__option">
                    <span style={header__optionLineOne}>Your</span>
                    <span style={header__optionLineTwo}>Prime</span>
                        
                    </div>

                    <Link to="/checkout">

                    <div className="header__optionBasket">
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                        <ShoppingCartIcon className="cart__logo"/>
                    </div>

                    </Link>
                    
            </div>
        </div>

    )
}

export default Header
