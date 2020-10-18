import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct({title, image, price, rating}) {

    const removeFromBasket = () =>{
        
    }

    return (
        <div className="checkoutproduct">
            <img className="checkoutProduct__image" src={image} alt="product"/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
                </div>

                <button onClick="removeFromBasket" className="">Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
