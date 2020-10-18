import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id,title, image, price, rating}) {   

    const [state, dispatch] = useStateValue();

    const addtobasket = () => {
        dispatch({
            type: 'Add_To_Basket',
            item:{
                id:id,
                title: title,
                image:image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">

            <div className="product__info">


                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
    <strong>{price}</strong>
                </p>


            

            <div className="product__rating">
                {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                
            </div>
            </div>

            <img src={image} alt="product_1"></img>

            <button onClick={addtobasket}>Add {title} to basket</button>

        </div>
    )
}

export default Product
