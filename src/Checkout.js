import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images.squarespace-cdn.com/content/v1/598eaf83d7bdce2890ccead1/1502626566414-3F6CCEJS4UF5X1HGFD18/ke17ZwdGBToddI8pDm48kN0N46Nv7mTlBkhIhIKPc_VZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI1TaDrrVoMjofv8HRwVgObCGbRr25ddUW4XMvRLfa2uYKMshLAGzx4R3EDFOm1kBS/AATU-web-banner-958x236.jpg?format=1500w" alt="ad"></img>
                <div>
                <h2 className="checkout__title">Your shopping basket</h2>
                
                {basket.map(item => (
                    <CheckoutProduct
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    />
                ))}

                {/* Basket items */}
                {/* Basket items */}
                {/* Basket items */}
                {/* Basket items */}
                {/* Basket items */}
                </div>
            </div>
        
            
            <div className="checkout__right">
                <Subtotal />
            </div>


        </div>

    
    )
}

export default Checkout
